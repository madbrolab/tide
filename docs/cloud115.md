# 115 连接器 2.0.1

按 Tide SDK 2 重写的纯 JavaScript 插件。部署使用现有 QuickJS 和宿主 SDK，不包含 Python、Node.js、额外运行环境或伴随进程，不修改基座。常规动作调用结束后释放运行时；没有注册常驻服务。

[官方加密包](https://github.com/madbrolab/tide/blob/main/store/packages/cloud115-2.0.1-encrypted.zip) · [对应源码](https://github.com/madbrolab/tide/blob/main/store/packages/cloud115-2.0.1-corresponding-source.zip) · [动作契约](../store/interfaces/com.tide.cloud115/operations.json) · [操作覆盖表](../store/interfaces/com.tide.cloud115/P115C实现覆盖.tsv) · [完整清单](../store/interfaces/com.tide.cloud115/P115C完整覆盖.tsv)

## 覆盖范围

基于 P115C `0.0.9.7.2`，固定提交 `856e4f8f09ce034534bd458f06d3dee4474a1698`。原操作清单的 **893 个定义均映射到可执行 JS 动作**，别名共用入口；加上支持函数、状态续接和常量读取，共 **827 个动作**。包含 Cookie / Open 客户端、网盘 / 分享 / 压缩包文件视图、下载上传、分片续传、目录索引、事件、批处理及组合工具。

不提供挂载功能。仓库中的 WebDAV、FUSE、FTP / SFTP 文件服务及独立 CLI / Web 应用不是本插件的部署组件。二维码、OSS、提取码转换和索引等库内能力直接由 JS 动作提供；独立程序的进程管理、HTTP 服务包装和 OCR 模型未打包。完整清单将这些仓库扩展单独标记。

| P115C 功能 | 插件表示 |
| --- | --- |
| Client / Cookie / header | `client-init` 等动作的加密 `session`；不隐式读取其他插件的凭据 |
| FileSystem / Path | `scope`、`cid` 和属性对象；路径反斜杠转义，名称数组保持字面值 |
| Iterator / generator | `{items,cursor,complete}`；保留参数并回传游标。远程树遍历为广度优先 |
| 文件句柄 / seek / read | URL 或文件属性加偏移；范围读取返回 `nextOffset`，二进制为 Base64 / hex |
| callable / with lock | 显式动作调用、有期限的 `client-lock` 租约；`util-call-with-lock` 接收 invoke 请求 |
| 目录缓存 / QueryDB | 私有 SQLite，按 `index` 隔离账号；JS 分页实现递归 |
| MultipartUpload | `multipart-init → multipart-step → multipart-complete`，传回加密 `state` |
| 数据类型 / 异常 / 常量 | JSON 值和 `support-value` / `support-error` / `support-throw` / `support-constant` |

这不是 Python ABI：不接受 Python callback、自定义 request、协程对象或外部 SQLite 连接。使用声明式筛选、显式调用、游标和私有索引表达相应工作。协议动作返回上游 JSON，高层动作检查业务错误；大整数 ID 保持字符串。

## 安装与调用

本包采用 `tide.encrypted/1` 加密动作分片。开发者用公开 JS 打包器加密，基座解密并逐组编译缓存，调用时只加载命中的分片。用户无需配置签名身份、公钥或信任文件。可从内置官方商店安装；第三方来源和本地自行构建的包需要开启开发者模式。旧账号管理器仍需单独迁移 SDK 2。

业务动作传稳定的账号 UUID 和本次 Cookie / bearer 或有效句柄，沿用宿主账号 QPS。具体输入以 `operations.json` 为准：

```js
const result = await ctx.invoke({
  version: 1, target: "com.tide.cloud115", operation: "vfs-iter",
  uuid: accountUUID,
  credential: {kind: "cookie", handle: credentialHandle},
  args: {id: "0", limit: 100, filter: {is_dir: false}}
});
// 继续调用时保留参数，设置 args.cursor = result.data.cursor。
```

`client-init` 的 `session` 是持久密文；其 `uuid` 参数供插件父调用请求本次调用链的凭据句柄，句柄不能留到下次使用。二维码登录继续回传同一个 session，支持 Cookie 与 bearer。密码登录的随机填充读取 `/dev/urandom`，已在本机宿主测试；Windows 原生宿主缺少该路径时使用二维码登录。

高层网盘及分享工具默认使用 Cookie；标注 `inlineCredential: any` 的上传、秒传动作支持两种凭据。Open 协议另有 `open-*` 动作。

## 大任务与恢复

- 遵守宿主 256 KiB JSON 限额；范围读取单次最多 64 KiB，大文件摘要可续接。超大目录使用分页动作。
- 上传源以 `sourceRef` 或 `sourcePath` 委托。续传重新委托同一文件，检查账号、大小与修改标识；最多 10,000 片，可调整分片大小。未确认的大分片重新上传，全部分片确认后才提交。
- 大型上传及文件批处理检查点分段加密存入私库，返回短令牌；保存 30 天，后续任务清理过期记录。
- `tool-batch-*-files` 先完成遍历计划，再执行写入，防止修改目录导致分页漏项。结果不确定时停止；核对后用 `resolve_id` 和 `resolution: done|pending` 续接。完成任务的旧游标不重复写入。
- `index-get-count-tree` 等长查询可能返回累计值和 cursor，以 complete 为准。每个账号使用不同 index；同步不提供远端快照隔离。
- 生活记录以游标轮询，不常驻等待；容量探测 complete=false 表示下界。临时下载及导出结果的清理由动作参数控制。

## 验证与构建

构建已生成的 main.js 仅需 Node.js 22+ 和公开打包器，不需要基座源码。Python 3.12+ 只用于重新生成及离线对照；部署时不使用 Python 或 Node.js。

```sh
npm ci --prefix sdk/packager
node sdk/packager/pack.mjs --dir plugins/cloud115 --out cloud115-2.0.1-encrypted.zip
```

可选的重新生成与测试（先取得上述固定提交的 P115C 仓库，离线对照还需要该仓库的 Python 依赖）：

```sh
npm ci --prefix plugins/cloud115
python3.12 plugins/cloud115/dev/generate.py /path/to/p115client
python3.12 plugins/cloud115/dev/conformance.py /path/to/p115client
python3.12 plugins/cloud115/dev/library-conformance.py /path/to/p115client
python3.12 plugins/cloud115/dev/support-conformance.py /path/to/p115client
node --test plugins/cloud115/tests/library.test.mjs
```

main.js 是分片构建输入，保留纯函数标注供官方构建器裁剪。验收使用官方分片构建和真实宿主测试，不走将整个源码编译成单个旧格式产物的检查路径。每个交付分片分别受源码、字节码大小与 24 MiB JS 堆 限制。

已做离线协议、属性、工具函数对照，以及摘要、分享隔离、分页、续传、SQLite、加密会话、密码加密和写入恢复测试。**没有用真实 115 账号逐项实测，也没有执行真实 115 上传、移动或删除。** 覆盖表表示实现映射，不代表全部方法已在线验证；上游接口、风控和账号差异仍可能产生错误。

本插件整体按 GPL-3.0 分发，保留 P115C 的 MIT 声明。提取码转换包含 p115pickcode 0.0.5 的 JS 移植；许可证见 [NOTICE.txt](../store/interfaces/com.tide.cloud115/NOTICE.txt)，提供对应源码。

## 2.0.1 更新

- 改用公开 JS 工具直接加密，安装不需要发布者签名配置。
- 上架新的官方商店，提供可独立构建的插件对应源码。

## 2.0.0 更新

- 迁移 SDK 2，使用纯 JS 按动作分片运行。
- 补齐非挂载操作清单，加入文件视图、索引和组合工具。
- 支持上传续传、加密检查点及批处理失败恢复。
- 保留大整数 ID，修正客户端身份转发和分页续接。
