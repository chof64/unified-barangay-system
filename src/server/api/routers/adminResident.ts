import { completeNameSchema } from "~/schema/residentProfile"

import { createTRPCRouter, publicProcedure } from "../trpc"

export const adminResidentRouter = createTRPCRouter({
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
