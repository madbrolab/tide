# Tide 官方商店与开发资源

官方仓库仅发布商店、正式分发产物和开发者需要的开放文档、SDK 契约及公开打包工具。基座源码和内部开发资料不在此仓库。

- [官方商店索引](store/index.json)
- [插件开发入门](docs/getting-started.md)
- [SDK 与接口契约](docs/sdk.md)
- [自建仓库与安装](docs/repositories.md)
- [加密包格式](docs/package-format.md)
- [本次商店更新](docs/releases/2026-11-07.md)
- [云盘账号中心](docs/accounts.md)
- [云盘挂载](docs/mount.md) · [挂载引擎与容器要求](docs/mount-engine.md)
- [115 连接器说明](docs/cloud115.md)
- [光鸭云盘连接器说明](docs/guangya.md)
- [123 网盘连接器](docs/cloud123.md) · [夸克连接器](docs/quark.md) · [天翼云盘连接器](docs/cloud189.md)
- [官方组件目录](docs/components.md)

Tide 默认使用官方商店。开发者模式默认关闭，其唯一用途是允许添加第三方仓库、安装及更新第三方插件；它不控制工作台、SDK 或已有插件的运行。开启时会明确告知：第三方仓库风险未知，用户自行判断并承担风险。关闭后保留已有插件和仓库设置。

插件开发者使用本仓库的 JS 工具加密，基座负责解密、检查和运行。用户不需要配置发布者身份、公钥、信任 JSON 或签名服务。Node.js 只用于开发机打包，插件部署运行不需要 Node.js 或 Python。

商店目录名为 `store`。不要改写为其他拼写。加密插件需要支持 `tide.encrypted/1`、SDK 2 的新版 Tide；旧基座应先升级。

115 和天翼连接器按 GPL-3.0 分发，保留上游声明，并提供对应插件源码。其他插件与组件沿用各自许可证；商店索引中的下载大小与 SHA-256 绑定实际产物。

- [自定义界面与独立样式](docs/console.md) · [可构建示例](examples/console-example/README.md)
- [115 账号管理器](docs/accounts115.md)
