import { z } from "zod"

import { completeNameSchema } from "~/schema/residentProfile"

import { createTRPCRouter, publicProcedure } from "../trpc"

export const adminResidentRouter = createTRPCRouter({
  getCompleteName: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      return ctx.db.residentProfile.findUnique({
        where: { id: input.id },
      })
    }),
  upsertCompleteName: publicProcedure
    .input(completeNameSchema)
    .mutation(async ({ input, ctx }) => {
      return ctx.db.residentProfile.upsert({
        where: { id: input.id },
        update: {
          firstName: input.firstName,
          lastName: input.lastName,
          middleName: input.middleName,
          extensionName: input.extensionName,
        },
        create: {
          id: input.id,
          firstName: input.firstName,
          lastName: input.lastName,
          middleName: input.middleName,
          extensionName: input.extensionName,
        },
      })
    }),
})
