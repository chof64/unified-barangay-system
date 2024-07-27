import { z } from "zod"

export const residentProfileSearchSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  middleName: z.string().optional(),
  extensionName: z.string().optional(),
})

export const completeNameSchema = z.object({
  profileId: z.string(),
  firstName: z.string().trim().min(2),
  lastName: z.string().trim().min(2),
  middleName: z.string().trim().min(2),
  extensionName: z.string().trim().optional(),
})
