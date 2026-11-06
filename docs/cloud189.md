# 天翼云盘连接器

`com.tide.cloud189` · `1.0.0` · Tide SDK 2 · GPL-3.0-only（含 MIT 上游部分）

纯 JavaScript，在宿主现有 QuickJS 内运行，无 Python、Node 运行环境、附加进程或常驻服务。不改基座。提供 **129 个动作**，由开发者加密、宿主解密运行。

基于 [ChenyangGao/p189client](https://github.com/ChenyangGao/p189client)，固定提交 [`d615c540e505`](https://github.com/ChenyangGao/p189client/commit/d615c540e505f0f7ada862e30131aba7f0bc8ed7)，实际代码提交时间 **2025-08-05T08:38:00Z**。这是代码提交时间，不是仓库星标等元数据更新时间。许可见 [NOTICE.txt](../store/interfaces/com.tide.cloud189/NOTICE.txt)。

## 范围

本连接器覆盖固定版本的客户端网络接口和登录/上传组合流程，映射见 [coverage.tsv](../store/interfaces/com.tide.cloud189/coverage.tsv)，全部调用参数和上游字段说明见 [operations.json](../store/interfaces/com.tide.cloud189/operations.json)。Python 对象、会话锁、文件属性和自定义 HTTP 回调不进入运行时；对象状态改为加密 `session`。目录列表保留上游分页参数；不把所有文件一次塞入返回值。不包含挂载服务。

包括 Web、`api-*` 会话签名客户端、个人盘/家庭盘、分享转存、批处理、回收站、账号权益及分片上传。签名模块按其自身 GPLv3 标注处理，随正式包提供插件的完整对应源码；不包含基座源码。

## 会话与调用

先调用 `session-create`，参数 `{"credentials":{"cookie":"账号 Cookie"}}`，保存返回的 `session`。后续在 `args.session` 中传入它，例如：

```json
{"version":1,"target":"com.tide.cloud189","operation":"fs-list","args":{"session":"上一步返回值","payload":{}}}
```

`session` 是宿主密钥保护的加密票据，调用方负责按账号保存；不写入日志。`session-update` 使用旧 session 和新 credentials 返回新票据。`session-info` 只展示连接状态。此版通过 args.session 接入，不会把宿主的 opaque Cookie/Bearer 凭据句柄还原成明文；账号管理器应保存连接器返回的会话票据。

业务接口原样返回上游 JSON，`check-response` 可显式检查业务错误。ID 超过 JS 安全整数范围时保持字符串；输入大 ID 也须使用字符串。`request` 仅允许本网盘声明的 HTTPS API 域，不自动跟随跨域重定向；分享只使用分享参数，不夹带账号凭据。

`login-with-password`、`login-with-password2`、`login-with-qrcode` 为网页认证，`api-login-with-password`、`api-login-with-qrcode` 为 PC 会话认证。扫码首次返回二维码内容/图片地址与 cursor，后续用 cursor 查询。验证码、人机验证或设备锁由官方流程处理，本插件不会绕过。

普通 Web 操作使用 Cookie；`api-*` 请求需要 sessionKey/sessionSecret，家庭盘使用 familySessionKey/familySessionSecret。开放接口的 accessToken 与登录 accessToken 不同：先调用 `user-access-token`，再用 `session-update` 写入 accessToken。底层 `login-with-token` 等接口返回上游原始会话字段，可交给 session-create 导入。

## 持久化上传

1. 调用 `upload-file`，提供 session、sourcePath、可选 file_name、parent_id，得到 cursor。初始化会先读取全文件 MD5，文件必须可由宿主读取。
2. 调用 `upload-resume`，传相同 session 和原 cursor；默认每次 2 片，maxParts 可设 1–64。每片成功保存进度，进程重启或响应丢失仍可使用原 cursor。此流程需要保留插件私库和宿主加密密钥。
3. 状态 `uploaded` 后调用 `upload-complete`。`processing` 表示服务端异步合并，使用 `upload-status` 单次查询；不会重复提交合并。
4. `completed` 为成功终态。若合并响应丢失而显示 `uncertain`，先用原始云端任务查询接口核对结果，禁止自动重复合并。
5. `upload-forget` 仅停止本地续传并清除本地票据，上游没有对应取消接口，**不表示云端未完成分片已被删除**。已提交合并的任务不能用此动作取消。

分片进度不塞入长游标，没有 1000 片游标限制。源文件通过 SDK 文件流/64 KiB 区间读取发送，不缓存整个文件，不创建分片副本。每次续传重新核对全文件 MD5，因此很大的文件会增加本地磁盘读取时间；可增加 maxParts 减少恢复次数。实际文件上限和合法分片大小由对应云盘决定。会话与上传任务绑定，续传期间须保留初始化使用的会话票据。

## 验证与构建

已验证离线协议、参数默认值、长整数 ID、会话隔离、签名和持久化流程，以及真实宿主的加密安装、QuickJS/SQLite/文件/TLS 通道。**尚未使用真实网盘账号联调**，上游固定版本的接口、风控和账号权益仍可能影响实际可用性；方法映射表不表示已逐项在线测试。

开发环境执行 `node tools/cloud-connectors/build.mjs cloud189`，再用公开 SDK packager 生成 `releases/cloud189-1.0.0-encrypted.zip`。构建时使用 Node，安装后只运行 JS。公开商店只分发加密包、契约、必要许可证及开发者文档。

[下载对应插件源码](../store/packages/cloud189-1.0.0-corresponding-source.zip)。解压后按包内 BUILD.txt 构建，不需要基座源码。
