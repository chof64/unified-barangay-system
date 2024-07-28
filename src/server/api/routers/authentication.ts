import { createTRPCRouter, publicProcedure } from "../trpc"

export const authenticationRouter = createTRPCRouter({
  getAuthSession: publicProcedure.query(({ ctx }) => {
    return ctx.session
  }),
})
