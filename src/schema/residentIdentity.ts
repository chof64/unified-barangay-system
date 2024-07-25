import { z } from "zod"

export const cardInformationSchema = z.object({
  cardId: z.string(),
  profileId: z.string(),
  cardType: z.string(),
  cardNumber: z.string(),
})
