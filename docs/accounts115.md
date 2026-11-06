# 115 账号管理器 2.0

插件 ID：`com.tide.accounts115`。需要 SDK 2 基座及 `com.tide.cloud115 ^2.0.1`。从官方商店安装，启用连接器和账号管理器后，在账号页面新建连接。采用 `tide.encrypted/1`，开发者加密、基座解密运行，无需签名身份或额外运行环境。

同一 UID 可同时保存 Cookie 和 OpenAPI 两种连接；支持多个账号、名称与备注、资料与头像缓存、空间和会员信息。

| 连接方式 | 扫码授权 | 手动管理 |
| --- | --- | --- |
| Cookie | 选择登录设备，取码后在手机确认；凭据填入表单后点击「验证并保存」 | 粘贴完整 Cookie，核验 UID 后保存；更换为其他账号的凭据会被拒绝 |
| OpenAPI | 填写自己的开放平台 AppID，通过 PKCE 扫码取得访问令牌与刷新令牌 | 可填写访问令牌和刷新令牌；支持主动刷新和已知有效期内的到期前刷新 |

二维码会话约 5 分钟。等待期间约每两秒查询一次状态；过期后自动换码，手机拒绝后停止。关闭窗口、切换设备、切换连接方式或停止扫码会取消旧请求。扫码结果是待保存草稿，不会直接写入账号库。管理员可显示或隐藏现有凭据。

凭据由宿主加密后存入插件私库，备份需包含宿主卷密钥。资料和头像读取不返回凭据。临时资料查询失败保留已有缓存；刷新令牌采用并发锁，手动替换或删除连接不会被旧刷新结果覆盖。

1.x 使用旧插件 ID `accounts115`，2.0 使用新的固定包 ID。旧私库保留，不会自动读取或覆盖；请在新管理器中重新扫码或手动添加账号。停用旧管理器前可核对所有连接已迁移。

## 供其他插件调用

在调用方清单声明以下接口，并声明对应插件依赖：

```json
{"calls":["com.tide.accounts115/list@1","com.tide.accounts115/acquire@1","com.tide.cloud115/fs-files@1"]}
```

```js
export async function files(ctx, {uuid, offset = 0}) {
  const account = (await ctx.invoke({
    version: 1, target: "com.tide.accounts115", operation: "acquire",
    args: {uuid, kind: "cookie"}
  })).data;
  return (await ctx.invoke({
    version: 1, target: "com.tide.cloud115", operation: "fs-files",
    ...account, args: {payload: {cid: "0", offset, limit: 20}}
  })).data;
}
```

句柄只在获取它的调用链内有效，绑定连接器、账号和凭据种类，不能持久保存或跨调用复用。OpenAPI 使用 `kind: "bearer"` 和对应连接器动作。保存、删除、刷新、扫码及查看凭据均仅供管理员直接调用。账号 UID 始终使用字符串，避免大整数精度丢失。

[完整的 13 个动作、参数与示例](../store/interfaces/com.tide.accounts115/operations.json)。`list` 支持分页；`profile` 和 `avatar` 返回缓存资料；`refresh-profile` 请求更新资料。头像由连接器从官方域读取，不携带 Cookie 或令牌。

## 开发

后台纯 JavaScript，全部宿主调用遵循异步 SDK 2。界面是独立 Vue 组件与 `console.css`，复用宿主 Vue、Element Plus 和主题变量，在 Shadow DOM 内展示；无需引用任何基座源码。二维码库在开发时打入界面文件。

开发环境运行 `npm ci && npm run build` 生成 `dist/console.mjs`，随后使用公开 `sdk/packager/pack.mjs --dir 插件目录 --out 插件.zip` 加密。Node.js 仅用于开发构建，部署不需要 Node.js 或 Python。自动测试使用 Node.js 24 的内置 SQLite：`npm test`。
