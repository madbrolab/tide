/** Browser-only Console contract. Backend SDK methods live in tide.d.ts. */
export interface ConsoleSurface {
  /** CSS boundary within the host content area; not a JavaScript security sandbox. */
  root: ShadowRoot;
  /** Host-owned mount point; do not remove it. */
  content: HTMLElement;
  /** Target for plugin dialogs and popovers so their styles stay inside the boundary. */
  overlay: HTMLElement;
}
export type ConsoleAPI = (
  path: string, method?: string, body?: unknown,
  headers?: Record<string, string>, signal?: AbortSignal
) => Promise<any>;
export interface ConsoleProps {
  plugin: { id: string; version: string; name: string; [key: string]: unknown };
  api: ConsoleAPI;
  surface: ConsoleSurface;
}
/** Default-export a Vue 3 component. Import Vue from /tide-vue.mjs at runtime.
 * Element Plus and TideDialog are globally registered. No host source imports.
 * Optional `connector` event payload is an account UUID string.
 */
