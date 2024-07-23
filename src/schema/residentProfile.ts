import { z } from "zod"

export const completeNameSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  middleName: z.string(),
  extensionName: z.string(),
})
