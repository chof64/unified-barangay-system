import { z } from "zod"

export const cardInformationSchema = z.object({
  id: z.string(),
  profileId: z.string(),
  cardType: z.string(),
  cardNumber: z.string(),
})
