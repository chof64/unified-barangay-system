import { adminAuthRouter } from "~/server/api/routers/adminAuth"
import { residentIdentityRouter } from "~/server/api/routers/residentIdentity"
import { residentProfileRouter } from "~/server/api/routers/residentProfile"
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc"

import { authenticationRouter } from "./routers/authentication"

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  authentication: authenticationRouter,
  adminAuth: adminAuthRouter,
  residentProfile: residentProfileRouter,
  residentIdentity: residentIdentityRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter)
