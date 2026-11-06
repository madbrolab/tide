# 夸克连接器

`com.tide.quark` · `1.1.1` · Tide SDK 2 · MIT

纯 JavaScript，在宿主现有 QuickJS 内运行，无 Python、Node 运行环境、附加进程或常驻服务。不改基座。提供 **53 个动作**，由开发者加密、宿主解密运行。

基于 [ChenyangGao/python-quark](https://github.com/ChenyangGao/python-quark)，固定提交 [`639caf6a03b8`](https://github.com/ChenyangGao/python-quark/commit/639caf6a03b8f4eee887990b7af25a784afda2dc)，实际代码提交时间 **2026-06-25T20:48:35Z**。这是代码提交时间，不是仓库星标等元数据更新时间。许可见 [NOTICE.txt](../store/interfaces/com.tide.quark/NOTICE.txt)。

## 范围

本连接器覆盖固定版本的客户端网络接口和登录/上传组合流程，映射见 [coverage.tsv](../store/interfaces/com.tide.quark/coverage.tsv)，全部调用参数和上游字段说明见 [operations.json](../store/interfaces/com.tide.quark/operations.json)。Python 对象、会话锁、文件属性和自定义 HTTP 回调不进入运行时；对象状态改为加密 `session`。目录列表保留上游分页参数；不把所有文件一次塞入返回值。不包含挂载服务。

包括账号与会员信息、压缩包操作、签到、分享创建/查询/转存、文件查询/下载/复制/移动/删除、隐私空间、常用目录、回收站及任务查询。1.1.0 补充 Web 扫码、Cookie 续期、MD5/SHA-1 秒传检查和 OSS 分片续传。1.1.1 新增 `download-range`：带账号 Cookie 按字节范围下载到调用方指定的文件，供云盘挂载读取夸克文件，Cookie 不离开连接器。登录及上传流程按独立协议实现，另参考 imeiming/quark-drive 和 suileyan/xpmibackup_sly 的交叉验证资料。

## 会话与调用

先调用 `session-create`，参数 `{"credentials":{"cookie":"账号 Cookie"}}`，保存返回的 `session`。后续在 `args.session` 中传入它，例如：

```json
{"version":1,"target":"com.tide.quark","operation":"fs-list","args":{"session":"上一步返回值","payload":{}}}
```

`session` 是宿主密钥保护的加密票据，调用方负责按账号保存；不写入日志。`session-update` 使用旧 session 和新 credentials 返回新票据。`session-info` 只展示连接状态。此版通过 args.session 接入，不会把宿主的 opaque Cookie/Bearer 凭据句柄还原成明文；账号管理器应保存连接器返回的会话票据。

业务接口原样返回上游 JSON，`check-response` 可显式检查业务错误。ID 超过 JS 安全整数范围时保持字符串；输入大 ID 也须使用字符串。`request` 仅允许本网盘声明的 HTTPS API 域，不自动跟随跨域重定向；分享只使用分享参数，不夹带账号凭据。

`login` / `login-with-qrcode` 首次返回二维码 URL、cursor、interval 和 expiresAt；按 interval 间隔传 cursor 查询，成功返回 status=completed 和加密 session。过期、取消和失败单独返回，不启动轮询进程。登录过程中按域隔离 Cookie，并用文件列表验证登录成功。

已有 Cookie 仍可 session-create 导入。`refresh-session` 显式更新 __puus 并验证登录。普通 API 或上传返回新 session 时，调用方应更新保存；同一账号的服务端 Cookie 续期不影响上传游标。手动 session-update 换 Cookie 会重新绑定账号，不能继续旧上传任务。网络异常或账号失效不会自动重发文件操作。

`share-create` 接收 payload.fid_list，可传 title、url_type、expired_type 等字段；异步任务通过原 task 查询，再用 share-password 取得分享信息。share-created-list 查询自己的分享。

`download-range` 参数 `url`（`fs-download` 返回的 `*.quark.cn` 链接）、`offset`、`length`（最多 64 MiB）和 `outputPath`（尚不存在的本机绝对路径）。连接器带上 Cookie 和 Range 请求头，把响应体写入该文件，返回 `{status, bytes, path}`。状态码由调用方判断：206 为正常，403/410 通常表示链接过期，应重新取链接。跨域重定向不会携带 Cookie。

本版补齐现有 Web/Cookie 通道；夸克官方 Open/Agent 接口使用独立接入条件，未混用其应用身份或凭据。

## 持久化上传

1. 调用 `upload-file`，提供 session、sourcePath、可选 file_name、parent_id，得到 cursor。初始化会先读取全文件 MD5，文件必须可由宿主读取。
2. 调用 `upload-resume`，传相同 session 和原 cursor；默认每次 2 片，maxParts 可设 1–64。每片成功保存进度，进程重启或响应丢失仍可使用原 cursor。此流程需要保留插件私库和宿主加密密钥。
3. 状态 `uploaded` 后调用 `upload-complete`。`processing` 表示服务端异步合并，使用 `upload-status` 单次查询；123 V2 的完成接口按其协议同时用于查询。
4. `completed` 为成功终态。若合并响应丢失而显示 `uncertain`，先用原始云端任务查询接口核对结果，禁止自动重复合并。
5. `upload-forget` 仅停止本地续传并清除本地票据，上游没有对应取消接口，**不表示云端未完成分片已被删除**。已提交合并的任务不能用此动作取消。

分片进度不塞入长游标，没有 1000 片游标限制。源文件通过 SDK 文件流/64 KiB 区间读取发送，不缓存整个文件，不创建分片副本。每次续传重新核对全文件 MD5，因此很大的文件会增加本地磁盘读取时间；可增加 maxParts 减少恢复次数。实际文件上限和合法分片大小由对应云盘决定。会话与上传任务绑定。123/天翼续传期间保留初始化会话；夸克可使用服务端续期后返回的新会话，切换账号则不能继续旧任务。

## 验证与构建

已验证离线协议、参数默认值、长整数 ID、会话隔离、签名和持久化流程，以及真实宿主的加密安装、QuickJS/SQLite/文件/TLS 通道。**尚未使用真实网盘账号联调**，上游固定版本的接口、风控和账号权益仍可能影响实际可用性；方法映射表不表示已逐项在线测试。

开发环境执行 `node tools/cloud-connectors/build.mjs quark`，再用公开 SDK packager 生成 `releases/quark-1.1.1-encrypted.zip`。构建时使用 Node，安装后只运行 JS。公开商店只分发加密包、契约、必要许可证及开发者文档。
