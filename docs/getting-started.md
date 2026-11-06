# 开发一个 Tide 插件

下载此仓库，在自己的项目中开发。无需取得或修改基座源码。SDK 2 的插件是 JavaScript ES 模块，动作接受 `(ctx, args)` 并返回 JSON；所有 `ctx` 方法均返回 Promise。

## 从示例开始

开发机安装 Node.js 22 或以上版本，然后在仓库根目录执行：

```sh
npm ci --prefix sdk/packager
node sdk/packager/pack.mjs --dir examples/resource-inspector --out resources-1.0.0.zip
```

打包器读取示例中的 `manifest.json`、`main.js`、`operations.json`、`icon.png`，自动分组、裁剪和加密。可选文件为 `ui.json`、`migrations.json`、`NOTICE.txt`；自定义界面还需 `console: true`、`dist/console.mjs` 和 `console.css`。不会打包整个目录、node_modules、源码映射、凭据或测试文件。

在 Tide 商店开启开发者模式并了解第三方风险，再上传自己构建的 ZIP，查看安装预览后安装、启用。官方商店中的正式包可直接安装，无需开启开发者模式。自行重新打包会得到不同摘要，因此视为第三方包。

## 项目结构

| 文件 | 用途 |
| --- | --- |
| manifest.json | SDK、固定包 ID、显示名称、版本、开发者、动作及依赖 |
| main.js | 导出与动作名对应的 JS 函数 |
| operations.json | 每个动作的输入、输出和示例 |
| icon.png | 最大 128 KiB，宽高不超过 512 的 PNG |
| ui.json | 可选的声明式表单、表格及操作页面 |
| dist/console.mjs、console.css | 可选的自定义界面脚本与独立样式，见 [界面开发](console.md) |
| migrations.json | 可选的私有 SQLite 迁移 |
| NOTICE.txt | 可选的版权和许可证声明 |

包 ID 采用 `com.example.plugin` 形式，至少三段，后续只能使用小写字母及数字，每段以字母开头。版本为 `1.0.0` 形式的稳定三段数字。同一包、同一版本的内容不可替换，改变内容须增加版本号。

`manifest.sdk` 必须为 2。完整字段及限制见 [清单 Schema](schemas/plugin-manifest.schema.json)，不要添加未声明字段。不同动作可用 `entry` 分组，共享函数会随需要进入各组。

```js
export async function environment(ctx, args) {
  const info = await ctx.host.info();
  return { timezone: info.timezone, message: args.message ?? "Hello Tide" };
}
```

在 `operations.json` 为动作声明 `input`、`output` 和 `example`。安装时核对动作和导出，调用前校验输入；不符合约定的参数不会执行插件。

## 构建与调试

公开打包器使用锁定的 esbuild，只接受本项目模块。需要外部 JS 依赖时，先在开发机将其打包进 `main.js`；部署时不能 import Node.js、浏览器或其他外部模块。不要把 Node.js 开发环境当作插件运行时。

可使用 Tide 自带工作台编辑、构建及断言测试，默认生成加密包，不需要创建签名身份。工作台不受开发者模式开关限制，安装第三方插件仍受限制。使用已经安装的 Tide 命令行，也可运行 `plugs check <插件目录>` 检查开发目录及 `tests.json`。

打包成功表示文件已经加密，不表示业务行为已验证。发布前应通过实际宿主测试、参数错误测试及必要的远端接口测试；不要在测试文件或发行包中放真实账号和令牌。

## 发布

把 ZIP、接口契约和 [商店索引](repositories.md) 放到静态仓库。安装者只需填写名称与索引 URL。所有新流程均不需要发布者签名、信任 JSON 或额外签名服务。官方收录与第三方发布是不同来源，加密本身不证明作者身份。
