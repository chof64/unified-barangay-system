import { z } from "zod";

export const registrySchema = z.object({
  firstName: z.string().trim().min(2),
  lastName: z.string().trim().min(2),
  middleName: z.string().trim().min(2).optional(),
  suffixName: z.string().trim().optional(),

  streetAddress: z.string().trim(),
  barangayAddress: z.string().trim(),
  municipalityAddress: z.string().trim(),
  provinceAddress: z.string().trim(),

  birthDate: z.date(),
  birthPlace: z.string().trim(),
  sex: z.enum(["male", "female"]),

  civilStatus: z.enum(["single", "married", "widowed", "separated"]),
});
