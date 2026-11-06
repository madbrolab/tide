# 自定义界面示例

在公开仓库根目录执行：

```sh
npm ci --prefix examples/console-example
npm run build --prefix examples/console-example
npm ci --prefix sdk/packager
node sdk/packager/pack.mjs --dir examples/console-example --out console-example-1.0.0.zip
```

开发构建使用 Node.js；安装运行只依赖 Tide。修改组件和 `console.css` 即可设计独有界面，不需要宿主源码。包内脚本复用 `/tide-vue.mjs`，浮层挂载到 `surface.overlay`。完整说明见 [自定义界面文档](../../docs/console.md)。
