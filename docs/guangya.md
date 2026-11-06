# 光鸭云盘连接器

`com.tide.guangya` · `1.0.2` · Tide SDK 2 · MIT

纯 JavaScript，在宿主 QuickJS 内运行，使用现有 SDK，不需要 Python、Node.js 运行环境或额外常驻服务。交付格式为 `tide.encrypted/1`，由开发者加密、宿主解密运行。

提供 **95 个动作、14 个执行分片**。功能包括扫码/短信/应用授权登录、刷新令牌、账号资料和容量、文件及回收站管理、压缩解压、下载与视频地址、分享与转存、离线下载与种子解析、秒传、流式上传、持久化分片续传和 OSS 底层接口。它是供账号管理器和其他插件调用的连接器，账号展示与保存由调用方负责。

协议基于 [ChenyangGao/guangyapan](https://github.com/ChenyangGao/guangyapan)，固定提交 `2b5b7e8df5290f3d223d7c24b4ce31108fec34f9`。短信设备请求头另参考 [DDSRem-Dev/guangyaclient](https://github.com/DDSRem-Dev/guangyaclient)。许可证与归属见 [NOTICE.txt](../store/interfaces/com.tide.guangya/NOTICE.txt)。

## 接口和调用

完整参数、返回结构与上游字段说明见 [operations.json](../store/interfaces/com.tide.guangya/operations.json)，客户端成员映射见 [coverage.tsv](../store/interfaces/com.tide.guangya/coverage.tsv)。上游客户端的 76 个公开方法均有对应动作；两个属性改用调用信封和 `client-info`。Python 的同步/异步双入口统一为 SDK 的异步调用，迭代器改为分页或显式下一步。

常规动作接收 `payload` 对象，也支持对应上游的字符串/数组快捷参数。保留未知业务字段；大整数 ID 使用字符串。基础接口原样返回业务错误，组合流程检查错误并返回状态或 Tide 错误；不会自动重试删除、转存等操作。返回体受宿主 256 KiB 上限约束，大目录应减小 `pageSize`，逐页读取。

```js
const result = await ctx.invoke({
  version: 1,
  target: 'com.tide.guangya',
  operation: 'fs-list',
  uuid: 'account-id',
  credential: {kind: 'bearer', inline: accessToken},
  args: {payload: {parentId: '', page: 0, pageSize: 100}}
});
```

常规认证动作也接受宿主当前调用链内的 Bearer 凭据句柄。`uuid` 用于宿主按账号调度，应使用稳定账号标识。分享访问动作使用分享 `accessToken`；分享转存需要账号 Bearer。`request` 允许自定义光鸭 api/account 域的 HTTPS 请求，需要本次 Bearer；常规请求遵循宿主的账号连接设置。

## 登录

- `login-with-qrcode`：首次传 `{}`，取得 `url`、加密 `cursor`、`interval` 和 `expiresAt`；调用方展示二维码，按间隔带 `cursor` 查询。返回 `complete` 时读取 `credentials`。`authorization_pending`、`slow_down`、拒绝和过期分别处理，不在动作内持续轮询。
- `login-with-phone`：首次传 `phoneNumber`（含区号）。若返回 `captcha`，在官方验证页面完成验证后带 `cursor` 与 `captchaToken` 继续；返回 `code` 后，带 `cursor` 和短信 `code` 完成。已发送验证码的游标不会再次发送短信。
- `login`：按首次是否提供 `phoneNumber` 自动选择上述流程，后续按游标继续。
- `login-with-app` / `login-another-app`：用当前 Bearer 授权 `clientId`，返回新应用凭据。默认应用 ID 为 `aMe-8VSlkrbQXpUR`；不同应用须显式传入正确 ID。
- `refresh-access-token`：传 `refreshToken` 和可选 `clientId`，返回新令牌。省略 refreshToken 时需传 inline Bearer；使用凭据句柄重新授权时调用 `login-with-app`。

首次登录及刷新请求不要求已有账号凭据。认证失败的 HTTP 400 JSON 通过 SDK 通用网络接口读取，以保留 OAuth 等待状态。原始 `auth-*` 动作也可单独调用，需要额外设备头时传 `authHeaders`。调用方应加密保存返回的令牌及流程游标，不写入日志。

## 上传

1. 用 `upload-file` 传宿主可读的绝对 `sourcePath`、`fileName`、`parentId`。先计算 MD5，大于等于 1 MiB 时本地计算 GCID 后尝试秒传；秒传成功直接返回 `complete`，否则返回 `ready` 与加密 `cursor`。
2. 保存游标后，调用 `upload-resume`（或再次调用 `upload-file`），传同一 `sourcePath` 和 `cursor`。每次默认最多 4 片，可设 `maxParts: 1–64`。每片校验通过就保存到私库，原游标始终读取最新进度；一次调用响应丢失也不需要重新取得游标。
3. `uploading` 表示继续；`retry` 表示本次分片未完成，可按游标重试；`uploaded` 表示全部分片已上传，需要调用 `upload-complete` 合并。
4. 合并返回 `complete` 后完成。若返回 `uncertain`，先通过 `fs-task-status` 或文件详情核对云端状态，勿自动创建新任务或重发合并。放弃未提交合并的上传可调用 `upload-cancel`；取消请求中断后可以重试取消。
5. `upload-status` 用游标查询私库进度。完成/取消后的调用返回已保存的结果，不重复上传、合并或取消；终态清除分片记录和临时凭据，保留小型结果记录。

默认分片至少 8 MiB，大文件自动增大片大小，支持 OSS 的 **10,000 个分片**。私库逐行保存分片进度，游标仅包含加密的任务引用，不再因游标或单条 SDK 消息大小而限制为 1000 片。合并时分批读取进度，通过 TLS 流式发送完整 XML 清单。片数依据 [OSS CompleteMultipartUpload 文档](https://www.alibabacloud.com/help/en/oss/developer-reference/completemultipartupload)；光鸭实际允许的单文件大小仍由云端账号及服务规则决定。

初始化读取一次全文件 MD5；续传检查文件路径、大小、修改时间及首尾各 32 KiB 摘要，每片另做 MD5/ETag 校验。上传期间源文件必须保持不变。文件内容通过 SDK 流式发送；整文件使用 `bodyPath`，区间使用 TLS socket 与 64 KiB 文件块，不创建临时分片副本。动态 OSS 地址严格限于 HTTPS OSS 域，不转发账号 Bearer。

临时上传凭据在私库中加密保存。任务租约防止同时续传、合并和取消相互覆盖；进程中断后租约在该次调用截止时间加 30 秒后失效。重启后使用原游标恢复，需保留插件私库及宿主加密密钥。1.0.0 的未完成上传游标可自动导入私库；旧游标不会覆盖较新的进度。

`upload-file-fast` 可直接提供 MD5、大小和文件名。底层 `oss-*` 动作接受上游 `creds`、对象 URL 和 uploadId，提供签名、初始化、单片、分页、合并、取消及直接上传。`oss-multipart-upload` 为初始化/逐片入口，需按返回的偏移与分片号继续，最后显式合并；`oss-multipart-part-iter` 每次返回一页（每页最多 1000 条，并非总片数限制）。STS 到期后需取得有效的临时凭据。

`oss-multipart-upload-complete` 支持最多 10,000 片。小清单可传 `parts`；大清单传 `partsPath`，与 `parts` 二选一，避免输入超过 SDK 的 256 KiB 上限。文件为 ASCII JSON Lines，按 PartNumber 升序，每行只需 `PartNumber`、`ETag`，例如：

```json
{"PartNumber":1,"ETag":"0123456789abcdef0123456789abcdef"}
{"PartNumber":2,"ETag":"fedcba9876543210fedcba9876543210"}
```

清单文件最多 2 MiB，足以容纳 10,000 条上述记录；发送期间保持文件不变。高层 `upload-complete` 自动从私库读取清单，无需调用方准备文件。

Python 文件对象、字节迭代器等不穿过 JSON 调用边界：调用方可先用 SDK 文件/网络接口准备源文件，再提供 `sourcePath`。种子解析 `cloudcollection-resolve-torrent` 额外支持宿主 `sourceRef` 文件句柄。

## 上游差异和验证边界

- 修正 `fs_restore_list`、`fs_user_action_list` 的循环引用分页默认值。
- 修正分享下载和文件大小查询遗漏 payload，以及分享下载助手调用了个人下载接口的问题。
- OSS `IsTruncated` 正确转为布尔值；续传不保留上游 `skip_size == filesize` 的无效赋值写法。
- `share-template-set` 保留上游使用的 `get_share_template` 地址，没有猜测替换；该云端写入行为仍需真实账号验证。

已覆盖协议与流程单元测试、宿主加密包加载、真实 QuickJS + SDK 文件读取/TLS 流式上传集成测试，并验证 10,000 片合并、SQLite 重新打开后恢复、旧游标迁移、并发与过期租约、取消清理。测试预置已成功上传的分片记录，实际验证大清单完整发送；不代表已向真实云盘上传超大文件。云端风控、会员限制、真实短信/扫码授权和文件最终入库仍需要账号联调确认。

## 构建

取得插件开发源码后，在包含公开 SDK packager 的开发目录中执行：

```sh
npm --prefix sdk/packager ci
node plugins/guangya/build.mjs
node --test plugins/guangya/tests/*.test.mjs
node sdk/packager/pack.mjs --dir plugins/guangya --out releases/guangya-1.0.2-encrypted.zip
```

Node.js 仅用于构建与测试。运行包不包含 Python、构建工具或测试代码。

`upload-calculate-gcid` 可按 sourcePath 单独计算 GCID，按协议逐段 SHA-1 后汇总二进制摘要。`upload-file-fast` 可显式传 gcid；服务端缺少有效 GCID 时继续普通上传，秒传检查返回 112 时保留上传票据并回退。
