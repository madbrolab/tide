# SDK 2 与接口契约

完整方法签名以 [tide.d.ts](../sdk/tide.d.ts) 为准；[capabilities.json](../sdk/capabilities.json) 列出方法用途、执行位置和生命周期。它们仅用于开发提示和契约发现，不是需要部署的运行库。

```js
/** @param {import('./tide').Context} ctx */
export async function run(ctx, args) {
  const info = await ctx.host.info();
  await ctx.log.info("查询环境");
  return { timezone: info.timezone };
}
```

根据项目实际路径调整类型引用。运行时还可通过 `ctx.host.capabilities()` 查询宿主能力，使用 `ctx.host.resources()` 发现资源；组件和插件动作均以其 `operations.json` 为准。

## 常用能力

| 能力 | 接口 |
| --- | --- |
| 宿主及依赖发现 | `ctx.host.info`、`capabilities`、`resources` |
| 其他插件与组件 | `ctx.invoke`、`ctx.call`、`ctx.components.call`，统一调用信封及取消、身份链 |
| HTTP、连接与监听 | `ctx.net`；继承任务网络策略，也可显式选择路由 |
| 文件和系统程序 | `ctx.fs`、`ctx.system` |
| 私有数据及密文 | `ctx.db`、`ctx.secrets`，具体方法和参数见类型文件 |
| 日志、超时、等待 | `ctx.log`、`ctx.deadline`、`ctx.remaining()`、`ctx.sleep` |
| 常驻服务 | `ServiceContext`；`ctx.service.ready()` 后等待 `ctx.service.stopped` 并释放资源 |

除 `ctx.remaining()` 等本地属性读取外，SDK 方法返回 Promise，可用 `Promise.all` 并发。普通动作结束后其运行时释放，跨调用状态应保存在私库中。返回值与宿主 JSON 调用受 256 KiB 限额约束，大文件使用流式或分块接口；二进制优先使用 Uint8Array。单次执行最多 64 个宿主调用并发、4096 个待处理调用和 1000 个定时器。

插件是容器内的受信任脚本，具有容器 root 可用的文件、系统与网络能力，彼此不构成安全沙箱。开发者模式不会额外授予这些能力，也不会改变运行权限。第三方来源风险由安装者自行判断。

## 依赖与跨插件调用

`requires` 使用固定包 ID，版本支持精确版本、范围、`^`、`~` 等。声明 `name` 可在调用方内部使用 `@名称` 绑定；显示名改动不改变包身份。不得用展示名称代替凭据目标 ID。

```js
const result = await ctx.invoke({
  version: 1, target: "com.tide.cloud115", operation: "vfs-iter",
  uuid: accountUUID,
  credential: {kind: "cookie", handle: credentialHandle},
  args: {id: "0", limit: 100}
});
```

凭据句柄绑定本次调用链，不应存入私库留待下次使用。不要隐式读取其他插件的账号秘密。

## 结构定义与接口发现

- [清单](schemas/plugin-manifest.schema.json)
- [动作契约](schemas/operation.schema.json)
- [调用信封](schemas/call.schema.json)
- [组件 RPC](schemas/component-rpc.schema.json)
- [网络策略](schemas/network-route.schema.json)
- [统一统计](schemas/statistics.json)
- [商店目录](schemas/store-catalog.schema.json)
- [加密包头](schemas/encrypted-package.schema.json)

管理员可从 `/api/v1/developer/capabilities`、`/api/v1/developer/resources?kind=plugin` 和 `/api/v1/developer/files/tide.d.ts` 取得运行版本的资源。组件目录使用 `kind=component`。这些只读发现入口不依赖开发者模式。

## 页面

第三方插件用 `ui.json` 声明表单、表格和动作，由基座渲染并沿用主题。字段值作为文本处理，不接受 HTML、脚本、iframe 或自定义前端框架。复杂独立 Console 属于既有官方组件通道，不属于公开加密打包器的第三方页面能力。动作调用与页面加载彼此独立，不因展示页面而启动后台常驻服务。
