import { z } from "zod"

export const cardInformationSchema = z.object({
  cardId: z.string(),
  profileId: z.string(),
  cardType: z.string().trim(),
  cardNumber: z.string().trim().min(2),
})
