import { z } from "zod"

import { cardInformationSchema } from "~/schema/residentIdentity"
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc"

export const residentIdentityRouter = createTRPCRouter({
  getAllIdentityCards: publicProcedure
    .input(z.object({ profileId: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.db.residentIdentity.findMany({
        where: {
          residentProfileId: input.profileId,
        },
      })
    }),

  getCardInformation: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.db.residentIdentity.findUnique({
        where: {
          id: input.id,
        },
      })
    }),
  upsertCardInformation: publicProcedure
    .input(cardInformationSchema)
    .mutation(({ input, ctx }) => {
      return ctx.db.residentIdentity.upsert({
        where: {
          id: input.cardId,
        },
        update: {
          cardType: input.cardType,
          cardNumber: input.cardNumber,
        },
        create: {
          id: input.cardId,
          residentProfileId: input.profileId,
          cardType: input.cardType,
          cardNumber: input.cardNumber,
        },
      })
    }),
})
