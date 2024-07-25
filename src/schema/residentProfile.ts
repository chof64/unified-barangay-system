import { z } from "zod"

export const residentProfileSearchSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  middleName: z.string().optional(),
  extensionName: z.string().optional(),
})

export const completeNameSchema = z.object({
  profileId: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  middleName: z.string(),
  extensionName: z.string().optional(),
})
