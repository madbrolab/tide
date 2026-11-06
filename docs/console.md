# 自定义插件界面

插件可以在宿主内容区内提供自己的布局、字体、颜色与交互样式。官方插件与用户已允许安装的第三方插件使用同一界面能力，不需要配置发布者、公钥或额外签名服务。

## 包文件

清单设置 `"console": true`，构建目录提供 `dist/console.mjs` 和 `console.css`（也接受根目录 `console.mjs`）。两个文件各不超过 256 KiB，均须非空；脚本默认导出 Vue 3 组件。后端仍为 `main.js` 与动作契约。

公开打包器将界面文件一起放入加密负载，绑定文件摘要。宿主从已安装的包中校验并读取界面文件，加载界面不会执行后端动作、重新编译后端或启动常驻服务。默认 `ui.json` 表单页面继续可用。

## 框架与样式

Vue 从 `/tide-vue.mjs` 导入，构建时将 `vue` 标记为这个外部模块，不要打入另一份 Vue。宿主提供 Element Plus 全局组件，也可自带打包后的界面依赖；不能要求安装者配置开发工具。完整组件例子见 [console-example](../examples/console-example/README.md)。

界面挂载在宿主框架内的独立 Shadow DOM 中。加载顺序是宿主基础样式、插件 `console.css`；插件选择器只作用于本插件，不能通过普通 CSS 改动宿主导航或其他插件。主题变量从宿主继承，可使用 `--ink`、`--muted`、`--paper`、`--field`、`--line` 和 `--el-*`。使用 `:host` 设置界面基础样式；`html`、`body` 选择器不匹配影子根内的节点。

弹窗、下拉框与浮层应保持在该边界内：Element Plus 的 `el-dialog` 使用 `:append-to="surface.overlay"`，其他浮层使用支持的 `append-to` 或 `:teleported="false"`。不要传送到 `document.body`，否则无法沿用本插件样式。页面卸载时清理定时器、事件监听和未完成请求。

Shadow DOM 用于样式隔离，不是脚本安全沙箱。插件运行在管理员页面来源，第三方插件的风险仍通过第三方仓库开关与安装来源控制。关闭开发者模式不停止已安装插件及其页面。

## Props 与调用

[console.d.ts](../sdk/console.d.ts) 定义三个 props：`plugin`（当前安装信息）、`api`（已认证的宿主请求函数）、`surface`（影子根、内容挂载点及浮层挂载点）。

```js
const result = await props.api("invoke", "POST", {
  version: 1,
  target: props.plugin.id,
  operation: "status",
  args: {}
}, {}, abortController.signal);
// 动作返回值在 result.data；失败抛出 Error。
```

页面仅在启用且未暂停的插件中展示，资源读取需要管理员身份。宿主保留导航、插件开关和设置；插件负责内容区。可选 `connector` 事件传入账号 UUID，宿主跳转到清单 `credentialTarget` 所指连接器；声明 `credentialTargets` 的通用账号插件传入 `{uuid, connector}`，`connector` 须是已声明的目标。响应式布局、键盘焦点、加载与错误反馈应由插件实现。
