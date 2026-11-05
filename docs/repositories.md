# 商店接入与卸载：当前可用协议

本页描述实际实现。插件源码包和加密分片包共用此流程；组件仅由官方维护。界面显示名称，包身份仍使用 manifest.id。稳定版本范围、候选求解与调用方名称绑定已实现；来源优先级和可选依赖尚未实现，不能把设计稿字段直接写进当前清单。

## 官方商店与开发者模式

默认内置 `https://raw.githubusercontent.com/madbrolab/tide/main/srore/index.json`，官方源不可修改。开发者模式默认关闭，唯一含义是允许添加第三方仓库、安装及更新第三方插件；不是工作台或运行权限开关。开启前明确告知第三方风险未知，由用户自行判断并承担风险。关闭后保留已有插件和仓库配置，停止第三方仓库读取与安装更新，不停止已有插件。

管理员在商店的「商店源」添加最多 8 个第三方仓库，只需名称与索引 URL。API 中 id 为本地仓库标识，界面自动生成：

```json
{"id":"studio","name":"开发者商店","url":"https://example.com/tide/index.json","enabled":true}
```

新仓库无需公钥、发布者身份、trust JSON 或签名服务。旧签名包保留兼容，旧源绑定的信任项被已安装包使用时仍受删除保护。

| 方法与路径 | 输入 | 返回 |
|---|---|---|
| GET `/api/v1/market/settings` | 无 | developerMode、warning |
| PUT `/api/v1/market/settings` | `{developerMode:true,acknowledge:true}` 或 `{developerMode:false}` | 当前状态；首次开启未确认风险返回 400 |
| GET `/api/v1/market/sources` | 无 | 源数组，包含只读 official |
| PUT `/api/v1/market/sources/{id}` | 上述源对象 | true；开发者模式关闭返回 403 |
| DELETE `/api/v1/market/sources/{id}` | 无 | true；官方源不可删除 |
| GET `/api/v1/market` | 无 | items、installed、disabled、sources、warnings、platform、developerMode |

所有入口只允许管理员。关闭模式后，已生成的第三方安装预览也不能继续安装；依赖安装沿用同一规则。官方条目优先，第三方包不能覆盖已标记为官方来源的安装。来源由基座赋值，不相信索引自行声称的 source。

HTTP/HTTPS 地址继承系统代理并可连接局域网。禁止 URL 用户信息和 fragment；未提供独立私有仓库认证头。索引最多 1 MiB，每源最多 300 项，缓存 5 分钟，无后台轮询。源失败时可使用已验证的进程内缓存并提示，关闭开发者模式后不读取第三方缓存或网络。

不同第三方源提供相同包 ID 时，排除冲突项并提示保留一个启用源。插件本地列表独立于商店索引。

## 发布目录

准备 index.json，示例中的 SHA256 和 size 必须替换为实际 ZIP 字节摘要及大小：

```json
{
  "format": "tide.store/1",
  "items": [{
    "kind": "plugin",
    "id": "com.example.reader",
    "name": "网页阅读",
    "version": "1.0.0",
    "description": "读取网页并提取标题",
    "contract": "https://example.com/tide/reader/operations.json",
    "requires": [{"kind":"plugin","id":"com.example.parser","minVersion":"1.0.0"}],
    "files": {"any": {
      "url": "https://example.com/tide/reader-1.0.0.zip",
      "sha256": "64 位小写十六进制，不带 sha256: 前缀",
      "size": 12345
    }}
  }]
}
```

新插件必须提供倒序包 ID、名称、说明、图标和开发者仓库。使用公开 JS 打包器生成 `tide.encrypted/1` ZIP，基座解密并编译缓存。不需要签名：直接把上述 JSON 保存为 `index.json`。

只上传 index.json、加密 ZIP 和公开接口文档；许可证要求时同时提供插件对应源码。静态网站或 Git 仓库均可托管。不要公开基座源码、内部测试、凭据和解密密钥。正式版本的 URL 应固定到发行标签或不可覆盖路径。

## 安装与依赖

插件依赖可附 `name:"连接器"`，将本插件的 `@连接器` 固定指向该项 id；名称在同一清单内唯一、不含 @。该绑定属于发行清单和安装计划，索引的 requires 必须与包内一致。无需额外别名数据库或后台索引。接口与例子见[调用名称规范](sdk.md)。

推荐依赖声明 `{kind,id,version:"^1.2.0"}`；也可用 `minVersion:"1.2.0"` 表示 `>=1.2.0`，二者互斥。kind 是 plugin/component。`version` 支持精确版本、`^`、`~`、比较符、空格/逗号交集、`||` 并集、通配符和有空格的连字符范围。包自身发行号仍要求稳定的三段数字，不接受 prerelease/build 标签。范围语义使用 [Masterminds semver](https://github.com/Masterminds/semver/tree/v3.5.0)，不是自行近似解释 `^0.x`。

同一源可以发布同包的多个版本，`kind/id/version` 不能重复；跨自定义源仍按包身份判断冲突。控制台按名称合并目录，详情可选具体发行版本。预览和安装请求可带 `?version=1.2.3` 锁定根包；省略时优先最新兼容版本。依赖优先复用满足范围的已安装版本，再尝试源中从高到低的候选版本。本地显式提供的 ZIP 固定该包候选，不暗中换成商店其他版本。

只依据元数据求解，选完才下载实际使用的插件包；不会为了每个候选启动插件、下载二进制或写数据库。最多 96 个包、32 层深度、2048 次搜索状态，每条范围最多 256 字节/8 个分支。检测循环，合并菱形依赖的约束；安装图之外的已安装插件（包括停用项）也会约束共享依赖升级。不自动降级、不静默停止其他插件来强行升级，冲突时显示不兼容的调用方和范围。需要破坏性升级时，由管理员先处理旧调用方。

插件包内 requires 必须与索引一致。明文、加密、本地上传共用解析器。本地包缺少依赖时从已安装项或启用源补齐；完全离线可上传主包和依赖包。

POST `/api/v1/market/{kind}/{id}/preview?version=1.2.3` 返回 `{steps,digest}`。每项包含 name、source、kind、id、version、installed、digest、size 及可选 manifest。再次 POST 同路径 `/install`，带 `If-Match: <digest>`；计划变化需重新审核。安装不是全图数据库事务：已完成依赖会保留，重试复用，不会因为后续包失败而卸载其他已用依赖。

## 安装期间的影响范围

下载和验证完成后，安装器仅阻止本次变更包及其已安装反向依赖的新调用。相关即时调用、排队或执行中的任务尚未结束时返回 409，并指出名称；不取消这些任务，结束后可重试。无关插件的任务和组件调用不阻止安装，也不会被取消。短暂的安装锁仅串行化安装事务，不覆盖所有动作执行。

相关常驻服务、原生流和浏览器会话在切换前关闭，按最终启用状态协调恢复；失败会释放准入阻止并恢复原版本的服务期望状态。单包迁移仍使用原有快照恢复机制。多包安装不是全图回滚事务，前面已成功安装的依赖保留。未声明的动态调用者不能提前出现在影响清单，但其进入正在变更目标的调用仍会返回 409。

## 卸载影响与回收

1. GET `/api/v1/packages/{kind}/{id}/removal` 返回 `{target,affected,digest}`。target/affected 包含 kind、id、name、version、enabled。
2. 管理员核对名称、直接及间接影响。
3. DELETE `/api/v1/plugins/{id}` 或 `/api/v1/market/component/{id}`，带 `If-Match: <digest>`。空摘要或清单已变返回 409。

基座按 requires、声明的跨插件调用、组件调用、凭据目标与浏览器依赖计算反向闭包。确认后先持久化停用，再阻止新的调用，取消排队及正在运行的任务，关闭常驻、门户、原生流和浏览器会话。活动调用使用内存取消登记，不为即时调用新增任务数据库行，也没有常驻依赖扫描器。

只卸载目标注册/组件二进制，受影响扩展仍安装但停用。插件私库、配置、历史记录保留，目标计划任务及动作密钥删除。恢复依赖后需手动启用插件；停用的依赖组件可重新安装恢复。共享服务进程若无法单独结束，会遵循已有运行器故障边界回收整组。

退出超时或文件清理失败会报错，已停用状态不会自动回滚；刷新清单核对当前状态后重试。已完成的网络/文件外部副作用不会撤销。未声明的动态调用关系无法出现在静态影响清单中；开发者必须声明依赖。主动脱离 SDK 管理的系统进程仍由容器管理员负责。

## 本地未签名明文包

无需生成密钥即可构建：

```sh
go run ./cmd/tidepack build -source -unsigned -dir examples/resource-inspector -out /tmp/resources-local.zip
```

这会生成独立格式 `tide.source/1`：release.json 记录每个文件的大小及摘要，publisher 为空，入口为 source-shards，代码为 unit-组名.js，build/units 记录编译配置和执行摘要；保留 manifest、完整 operations.json、图标、可选 ui.json/migrations.json/NOTICE.txt。不接受签名条目、加密分片或同源可执行 console。它与“签名验证失败的包”不同，移除签名不能自动转为受信任安装。

管理员仍使用 POST `/api/v1/plugins/preview` 上传 ZIP 或 multipart。返回 `unsigned:true`，steps 中的 `sourceApproval` 是对应完整 ZIP 的 SHA-256（64 位十六进制）。页面按名称列包，展示摘要，并要求确认未签名来源。提交同一批文件时同时发送：

```text
If-Match: <preview.release>
X-Tide-Approve-Source: <preview.release>
```

缺少第二个确认返回 403，计划变化返回 412。确认绑定整个安装计划，包含未签名依赖，不能复用于另一个包或版本。授权记录与安装元数据在同一事务提交；重启或重新启用时核对发行 ZIP、记录的摘要、清单及编译产物。即时业务调用没有新增授权数据库读取。

未签名包保留内部本地归属，不冒充开发者签名；已有签名发布者的包身份不能用未签名包接管，历史版本同样保留身份。更换信任来源需使用新的包 ID。自定义/官方商店仍要求签名发行包，安装未签名包不会扩大商店信任。插件运行能力与同样安装的签名包一致。

结构资源可从 `/api/v1/developer/files/plugin-manifest.schema.json`、`source-release.schema.json`、`store-catalog.schema.json` 下载；JSON Schema 供编辑器校验结构，签名、摘要、版本组合和重复身份仍由后端校验。
