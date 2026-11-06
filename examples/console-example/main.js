export async function status(ctx) {
  const {timezone} = await ctx.host.info();
  return {timezone};
}
