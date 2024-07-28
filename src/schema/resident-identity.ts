import { z } from "zod"

export const residentIdentityLoginSchema = z.object({
  cardId: z.string(),
})
