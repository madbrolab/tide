# 官方组件目录

在 Tide 官方商店的组件分类中安装。下表版本对应本轮发行，实际下载地址、架构、大小与 SHA-256 以[商店索引](../store/index.json)为准。

| 组件 | 版本 | 用途与接口 |
| --- | --- | --- |
| 浏览器抓取 `chromium` | 1.0.0 | 动态网页抓取；[契约](../store/interfaces/chromium/operations.json) |
| CloudDrive2 `cd2` | 1.1.0 | 连接 CloudDrive2 实例；[契约](../store/interfaces/cd2/operations.json) |
| AI 模型服务 `ai` | 1.0.0 | 提供商、模型别名、生成与用量；[契约](../store/interfaces/ai/operations.json) |
| AI 工作台 `ai-panel` | 0.3.0 | 管理员插件开发工作区，依赖 AI 模型服务；[契约](../store/interfaces/ai-panel/operations.json) |
| 消息通知 `notify` | 1.0.0 | 消息通知能力；[契约](../store/interfaces/notify/operations.json) |
| 图片处理 `image` | 1.0.0 | 图片处理能力；[契约](../store/interfaces/image/operations.json) |
| 光盘处理 `optical` | 1.1.0 | 光盘媒体处理；[契约](../store/interfaces/optical/operations.json) |
| FFprobe `ffprobe` | 7.0.2 | 媒体信息探测；[契约](../store/interfaces/ffprobe/operations.json) |
| FFmpeg `ffmpeg` | 7.0.2 | 媒体转码与处理；[契约](../store/interfaces/ffmpeg/operations.json) |
| Mihomo `mihomo` | 1.19.33 | 网络代理；[契约](../store/interfaces/mihomo/operations.json) |
| 挂载引擎 `mount` | 1.1.0 | FUSE 网盘挂载，提供 amd64/arm64 包；[使用条件](mount-engine.md) |

组件由官方维护，第三方仓库仅用于插件。安装或更新前，基座会检查平台、大小和摘要，并展示相关依赖；已有官方组件继续保留。开发者调用动作组件时使用 [SDK](sdk.md) 和对应动作契约；挂载引擎的启动、停止由基座管理。
