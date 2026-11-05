/** @typedef {import('../../sdk/tide').Context} Context */
/** @param {Context} ctx */
export function environment(ctx) {
  return ctx.host.info();
}
/** @param {Context} ctx @param {import('../../sdk/tide').ResourceQuery} input */
export function resources(ctx, input) {
  return ctx.host.resources(input);
}
/** A service entry runs only through service management, never as a short action.
 * It reports readiness, keeps serving until the host asks it to stop, then cleans up.
 * @param {import('../../sdk/tide').ServiceContext} ctx
 * @param {{address?: string}} input
 */
export async function echo(ctx, input) {
  const listener = await ctx.net.listen({ address: input.address || '127.0.0.1:0' });
  /** @param {string} handle */
  const serve = async (handle) => {
    try {
      for (;;) {
        const { data, eof } = await ctx.net.readBytes({ handle });
        for (let offset = 0; offset < data.length;) offset += await ctx.net.write({ handle, data: data.subarray(offset), timeoutMs: 2000 });
        if (eof) break;
      }
    } catch {}
    await ctx.net.close({ handle }).catch(() => {});
  };
  (async () => {
    try {
      for (;;) serve((await ctx.net.accept({ handle: listener.handle })).handle);
    } catch {}
  })();
  await ctx.service.ready({ address: listener.address });
  await ctx.service.stopped;
  // Open handles are closed by the host when this function returns.
}
