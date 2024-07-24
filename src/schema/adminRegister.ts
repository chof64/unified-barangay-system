import { z } from "zod"

// TODO: Add first name and last name
export const adminRegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})
