# 云盘账号中心 1.0.0

插件 ID：`com.tide.accounts`，使用 Tide SDK 2。统一管理 115、光鸭、123、天翼和夸克账号，为挂载及其他插件提供稳定的账号 UUID。需要基座支持 `credentialTargets` 和凭据绑定 `targetColumn`；旧版基座请先升级。

## 安装与登录

从官方商店安装账号中心，再安装需要使用的网盘连接器。连接器为可选项，未安装的网盘会显示“连接器未安装”，不影响其他账号。

| 网盘 | 连接器 | 登录方式 |
| --- | --- | --- |
| 115 | `com.tide.cloud115` | Cookie 扫码、OpenAPI 扫码授权、手动 Cookie 或令牌 |
| 光鸭 | `com.tide.guangya` | 扫码、短信及手动令牌 |
| 123 | `com.tide.cloud123` | 扫码、账号密码、开放平台应用及手动令牌 |
| 天翼 | `com.tide.cloud189` | 扫码、账号密码及手动 Cookie |
| 夸克 | `com.tide.quark` | 扫码及手动 Cookie |

在账号中心页面添加账号，完成验证后保存。支持名称、备注、资料、容量、状态检查和令牌刷新。每小时检查一批需要复核的账号；具备刷新能力的令牌会在到期前刷新，夸克会话支持续期。

已安装 [115 账号管理器](accounts115.md) 时，可在页面导入已有账号，保留 UUID、名称、备注和登录设备。原插件及其数据继续保留，核对迁移结果后再决定是否卸载。

## 供其他插件调用

推荐通过 `call` 统一调用，不必区分凭据模型：

```js
const data = (await ctx.invoke({
  version: 1,
  target: "com.tide.accounts",
  operation: "call",
  args: {
    uuid,
    operation: "fs-files",
    args: {payload: {cid: "0", limit: 100}}
  }
})).data;
```

示例使用 115 的 `fs-files`，其他网盘请选用对应连接器的动作。账号中心自动注入凭据或会话，并保存续期后的票据；返回值不会携带会话票据。登录和会话管理动作不能经 `call` 转发。

115 和光鸭也可用 `acquire` 获取本次调用链专用的凭据句柄，交给指定连接器；句柄不能跨调用复用。123、天翼和夸克使用密封会话票据，应通过 `call` 调用，不能使用 `acquire`。

`list`、`get`、`providers`、`profile`、`avatar` 提供不含凭据的账号资料。状态变化发布 `changed` 事件，包含账号 UUID、网盘、连接方式和新旧状态。完整参数见[动作契约](../store/interfaces/com.tide.accounts/operations.json)。

凭据和会话密封保存在私库中，备份时应保留宿主数据卷及其加密材料。115 的部分链路已随挂载使用真实账号验证；其他网盘仍以模拟协议验证为主，首次登录后请核对资料、容量和账号状态。
