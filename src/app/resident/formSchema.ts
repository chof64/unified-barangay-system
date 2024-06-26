import { z } from "zod";

export const residentCreateSchema = z.object({
  lastName: z.string().trim().min(2, "Last name must be at least 2 characters"),
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters"),
  middleName: z
    .string()
    .trim()
    .min(2, "Middle name must be at least 2 characters"),
  suffixName: z.string().optional(),
});

export const residentSearchSchema = z.object({
  lastName: z.string().optional(),
  firstName: z.string().optional(),
  middleName: z.string().optional(),
});

export const registerIdSchema = z.object({
  idNumber: z.string(),
  idType: z.string(),
});
