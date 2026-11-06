/** Tide SDK 2. Development types only: no Node, Python or browser runtime dependency.
 * Every ctx method returns a Promise; independent calls can overlap with Promise.all.
 * Actions run in an in-process QuickJS runtime; setTimeout/setInterval and console are available.
 * At most 64 host calls execute at once per execution (4096 may wait); at most 1000 timers.
 * Action results and host JSON calls are limited to 256 KiB; use Uint8Array for bytes.
 */
export type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
export type JSONObject = { [key: string]: JSONValue };
export type Digest = "sha1" | "sha256" | "md5";
export type Bytes = Uint8Array | string; // strings are standard Base64, never plain text
export type Cancel = () => void;
export interface ResourceQuery { kind?: "plugin" | "component"; after?: string; limit?: number }
export interface Resource {
  kind: "plugin" | "component"; id: string; name: string; version: string;
  description?: string; installed: boolean;
  state: "enabled" | "disabled" | "paused" | "installed" | "not-installed" | "builtin";
  contract: string;
}
export interface ResourcePage { items: Resource[]; next?: string }
export type Dependency = {
  kind: "plugin" | "component"; id: string;
  /** Caller-local name used as @name; independent of the target's display name. */
  name?: string;
} & ({version: string; minVersion?: never} | {minVersion: string; version?: never});
export interface HostInfo {
  sdk: 2; timezone: "Asia/Shanghai"; os: string; arch: string;
  plugin: { id: string; name: string; version: string };
  dependencies: Dependency[];
  execution: { id: string; action: string; chain: string[]; lifetime: "action" | "service" };
  limits: { jsonBytes: number; jsHeapBytes: number; shortActionSlots: number; defaultActionTimeoutMs: number };
}
export interface Capability {
  path: string; summary: string; execution: "local" | "host" | "hybrid";
  lifetime: "both" | "service"; signature: string;
}
export interface Capabilities {
  format: "tide.host-capabilities/1"; sdk: 2; timezone: "Asia/Shanghai";
  methods: Capability[]; properties: { path: string; description: string }[];
  runtime: { engine: string; globals: string[]; unavailable: string[] };
  limits: Record<string, number>; notes: string[];
}
export type Route = { mode: "direct" | "system" } | {
  mode: "custom"; profile?: string; url?: string; domains?: string[]; authRef?: string;
};
export interface TLSOptions {
  serverName?: string; caPEM?: string; certPEM?: string; keyPEM?: string; insecureSkipVerify?: boolean;
}
export interface NetworkRequest {
  url: string; method?: string; headers?: Record<string, string>;
  body?: Bytes; bodyPath?: string; outputPath?: string;
  responseType?: "base64" | "text" | "bytes"; maxBytes?: number;
  followRedirects?: boolean; route?: Route; timeoutMs?: number; tls?: boolean | TLSOptions;
}
export interface NetworkResponse<T = string | Uint8Array> { status: number; headers: Record<string, string[]>; body: T }
export interface FileResponse { status: number; headers: Record<string, string[]>; path: string; bytes: number }
export interface SocketOptions { protocol?: string; address: string; tls?: boolean | TLSOptions; timeoutMs?: number; route?: Route }
export interface SocketHandle { handle: string; address: string }
export interface SocketRead { handle: string; length?: number; timeoutMs?: number }
export interface SocketData<T> { data: T; eof: boolean; address?: string }
export interface SocketWrite { handle: string; data: Bytes; address?: string; timeoutMs?: number }
export interface NetworkInterface { name: string; index: number; mtu: number; flags: string; hardwareAddress: string; addresses: string[] }
export interface FileInfo { size: number; directory: boolean; modified: string; mode: number; symlink: boolean }
export interface FilePage { names: string[]; next: number | null }
export interface Recursive { recursive?: boolean }
export interface CommandResult { exitCode: number; stdout: string; stderr: string; truncated: boolean }
export interface Credential { kind: "cookie" | "bearer"; inline?: string; ref?: string; handle?: string }
export interface Call {
  version: 1; target: string; operation: string; args: JSONObject | AIRequest;
  instance?: string; credential?: Credential; uuid?: string; userAgent?: string;
  headers?: Record<string,string>; baseUrl?: string; route?: Route;
  timeoutMs?: number; idempotencyKey?: string;
}
export interface StreamHandle { streamId: string; direction: "server-stream" | "client-stream" | "bidi-stream"; expiresAt: string; receiptId?: string }
export interface StreamFrame<T = JSONValue> { type: "ready" | "data" | "end" | "error"; data?: T; code?: string }
export interface CallResult<T = JSONValue> { data: T; receiptId?: string }
export interface ScopedHTTPRequest {
  url: string; method?: string; headers?: Record<string,string>; body?: string; bodyHex?: string;
  response?: "hex"; credential?: boolean; route?: Route; loginExchange?: boolean; linkMeta?: boolean;
  transfer?: boolean; sourceRange?: { offset: number; length: number };
  multipart?: { field?: string; fields: Record<string,string>; filename: string }; originReferer?: boolean;
}
export interface ContentRequest { url: string; userAgent?: string; offset: number; length: number; digests?: Digest[]; route?: Route }
export interface Notification {
  channel: string; type?: "text" | "link" | "image"; style?: "plain" | "markdown" | "html";
  text?: string; title?: string; url?: string; imageBase64?: string;
}
export interface NotificationReceipt { sent: boolean; channel: string; partial?: boolean }
export interface ServiceMemory { jsBytes: number; allocatedBytes: number; handles: number; sampledAt: number }
export interface ServiceStatus {
  plugin: string; pluginName: string; name: string; label: string; version: string;
  state: "starting" | "running" | "stopping" | "stopped" | "backoff" | "failed" | "blocked";
  desired: boolean; runId?: string; caller?: string; parent?: string;
  started?: number; failures: number; error?: string; info?: JSONValue;
  memoryMiB?: number; memory?: ServiceMemory;
}
/** A resident service is a long-running async action:
 *   await ctx.service.ready(info); await ctx.service.stopped; clean up; return.
 * After a stop request it has its grace period (stopTimeoutMs) before it is interrupted. */
export interface Service {
  /** Report readiness; the service counts as starting until it does. */
  ready(info?: JSONObject): Promise<boolean>;
  /** Resolves when the host asks the service to stop. */
  readonly stopped: Promise<void>;
  readonly stopping: boolean;
}
/** Every SDK rejection is a TideError. A plugin may throw one with its own code; it reaches the caller unchanged. */
export interface TideError extends Error {
  code: "invalid_input" | "not_found" | "forbidden" | "conflict" | "disabled" | "busy" | "timeout" | "unavailable" | "upstream" | "cancelled" | "failed" | string;
  retryable: boolean;
}
export interface Context {
  readonly runId: string;
  /** Deadline of this execution in epoch milliseconds; null for a resident service. */
  readonly deadline: number | null;
  /** Milliseconds left before the deadline (Infinity for a service). */
  remaining(): number;
  sleep(ms: number): Promise<boolean>;
  /** Plugin log, shown per plugin on the console Logs page. console.* writes here too. */
  readonly log: {
    info(...values: unknown[]): Promise<boolean>;
    warn(...values: unknown[]): Promise<boolean>;
    error(...values: unknown[]): Promise<boolean>;
  };
  readonly host: {
    info(): Promise<HostInfo>;
    capabilities(): Promise<Capabilities>;
    resources(query?: ResourceQuery): Promise<ResourcePage>;
  };
  /** Present only in a declared resident service. */
  readonly service: Service | undefined;
  readonly services: {
    list(): Promise<ServiceStatus[]>;
    start(name: string, input?: JSONObject): Promise<ServiceStatus>;
    stop(name: string): Promise<ServiceStatus>;
    restart(name: string, input?: JSONObject): Promise<ServiceStatus>;
  };
  viewer(): Promise<{ plugin: string; name: string } | null>;
  connection(): Promise<{ kind: string; userAgent: string; hasSource: boolean }>;
  /** @name resolves against this plugin's requires[].name first; then global display names. */
  call<T = JSONValue>(targetAction: string, input: JSONObject): Promise<T>;
  invoke<T = JSONValue>(request: Call): Promise<CallResult<T> | StreamHandle>;
  /** Catalogs differ for JS actions, official components, and CD2 protobuf RPCs. Inspect the returned contract. */
  operations(target: string, instance: string, operation?: string): Promise<JSONValue>;
  stream<T = JSONValue>(id: string, command: "next"): Promise<StreamFrame<T>>;
  stream(id: string, command: "send", data: JSONObject): Promise<boolean>;
  stream(id: string, command: "end" | "cancel"): Promise<boolean>;
  emit(event: string, input: JSONObject): Promise<number>;
  readonly components: { call<T = JSONValue>(id: string, operation: string, args?: JSONObject | AIRequest): Promise<T> };
  readonly notify: { send(message: Notification): Promise<NotificationReceipt> };
  readonly secrets: {
    seal(purpose: string, value: string): Promise<string>;
    open(purpose: string, sealed: string): Promise<string>;
    /** `target` is required for providers declaring `credentialTargets` and must be one of them. */
    issue(grant: { uuid: string; kind: "cookie" | "bearer"; value: string; target?: string }): Promise<{ kind: string; handle: string }>;
  };
  readonly store: {
    get<T extends JSONValue = JSONValue>(key: string): Promise<T | null>;
    put(key: string, value: JSONValue): Promise<boolean>;
    list(): Promise<{ key: string; value: JSONValue }[]>;
  };
  readonly db: {
    query<T = Record<string, JSONValue>>(sql: string, params?: (string | number | boolean | null)[]): Promise<T[]>;
    exec(sql: string, params?: (string | number | boolean | null)[]): Promise<number>;
  };
  readonly crypto: {
    hmacSHA1(key: string, text: string): Promise<string>;
    digest(algorithm: Digest, text: string): Promise<string>;
    aesCBC(mode: "encrypt" | "decrypt", keyHex: string, ivHex: string, dataHex: string): Promise<string>;
  };
  readonly system: { exec(program: string, argv?: string[]): Promise<CommandResult> };
  readonly fs: {
    stat(path: string): Promise<FileInfo>;
    lstat(path: string): Promise<FileInfo>;
    statMany(paths: string[]): Promise<(FileInfo | { error: string })[]>;
    list(path: string, offset?: number): Promise<FilePage>;
    mkdir(path: string, options?: Recursive): Promise<boolean>;
    rename(path: string, newName: string): Promise<boolean>;
    move(path: string, destination: string): Promise<boolean>;
    copy(path: string, destination: string, options?: Recursive): Promise<boolean>;
    remove(path: string, options?: Recursive): Promise<boolean>;
    read(path: string, offset?: number, count?: number): Promise<{ base64: string; bytes: number; eof: boolean }>;
    readBytes(path: string, offset?: number, count?: number): Promise<Uint8Array>;
    write(path: string, base64: string): Promise<boolean>;
    writeBytes(path: string, bytes: Uint8Array): Promise<boolean>;
    appendBytes(path: string, bytes: Uint8Array): Promise<boolean>;
    writeAt(path: string, bytes: Uint8Array, offset: number): Promise<boolean>;
    truncate(path: string, size: number): Promise<boolean>;
    chmod(path: string, mode: number): Promise<boolean>;
    link(source: string, destination: string): Promise<boolean>;
    symlink(target: string, linkPath: string): Promise<boolean>;
    readlink(path: string): Promise<string>;
    hashRange(path: string, offset: number, length: number, algorithm?: Digest): Promise<string>;
    source(path: string): Promise<string>;
    sourceInfo(): Promise<{ size: number; stamp: string }>;
    sourceSHA1(): Promise<string>;
  };
  readonly net: {
    request(options: NetworkRequest & { outputPath: string }): Promise<FileResponse>;
    request(options: NetworkRequest & { responseType: "text" | "base64" }): Promise<NetworkResponse<string>>;
    request(options: NetworkRequest & { responseType?: "bytes" }): Promise<NetworkResponse<Uint8Array>>;
    request(options: NetworkRequest): Promise<NetworkResponse | FileResponse>;
    connect(options: SocketOptions): Promise<SocketHandle>;
    listen(options: Omit<SocketOptions, "route">): Promise<SocketHandle>;
    accept(options: { handle: string; timeoutMs?: number }): Promise<SocketHandle>;
    read(options: SocketRead): Promise<SocketData<string>>;
    readBytes(options: SocketRead): Promise<SocketData<Uint8Array>>;
    write(options: SocketWrite): Promise<number>;
    close(options: { handle: string }): Promise<boolean>;
    lookup(options: { host: string; protocol?: "ip" | "ip4" | "ip6"; timeoutMs?: number }): Promise<string[]>;
    interfaces(): Promise<NetworkInterface[]>;
  };
  readonly http: {
    text(url: string): Promise<string>;
    request(options: ScopedHTTPRequest): Promise<{ status: number; body?: string; location?: string; mediaCookie?: string; etag?: string }>;
    readContent(options: ContentRequest): Promise<{ bytes: number; base64?: string; digests?: Partial<Record<Digest, string>> }>;
  };
  readonly html: { title(html: string): Promise<string> };
  readonly browser: { title(html: string): Promise<string> };
}
export type ServiceContext = Omit<Context, "service"> & { readonly service: Service };

/** Official AI component; use ctx.components.call or ctx.invoke after declaring ai dependency. */
export interface AIModel {
  alias: string; name: string; default: boolean; tools: boolean; json: boolean;
  maxInputBytes: number; maxOutputTokens: number;
}
export interface AIToolCall { callId: string; name: string; arguments: JSONObject }
export interface AIMessage {
  role: "system" | "user" | "assistant" | "tool"; text?: string;
  callId?: string; toolCalls?: AIToolCall[];
}
export interface AIRequest {
  model?: string; messages: AIMessage[]; maxOutputTokens?: number;
  tools?: { name: string; description: string; inputSchema: JSONObject }[];
  outputSchema?: JSONObject;
}
export interface AIResult {
  model: string; finish: "stop" | "length" | "tool_calls"; text: string;
  value?: JSONValue; toolCalls?: AIToolCall[];
  usage: { source: "provider" | "unknown"; inputTokens: number | null; outputTokens: number | null };
}
export type AIEvent = { type: "text.delta"; text: string } | { type: "done"; result: AIResult };
export interface AIStatistic {
  day: string; caller: string; model: string; calls: number; failed: number;
  inputTokens: number; outputTokens: number; unknownUsage: number; durationMs: number;
}
