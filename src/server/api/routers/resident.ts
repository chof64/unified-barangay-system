import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import {
  residentCreateSchema,
  residentSearchSchema,
} from "~/app/resident/formSchema";

export const residentRouter = createTRPCRouter({
  // TODO(auth): Convert to protectedProcedure once auth is implemented
  createResident: publicProcedure
    .input(residentCreateSchema)
    .mutation(async ({ input, ctx }) => {
      const checkIfResidentExists = await ctx.db.registryResident.findFirst({
        where: {
          lastName: input.lastName,
          firstName: input.firstName,
          middleName: input.middleName,
        },
      });
      if (checkIfResidentExists) {
        throw new Error("Resident already exists");
      }
      return ctx.db.registryResident.create({
        data: {
          ...input,
        },
      });
    }),

  // TODO(auth): Convert to protectedProcedure once auth is implemented
  listResidents: publicProcedure
    .input(residentSearchSchema)
    .query(({ input, ctx }) => {
      return ctx.db.registryResident.findMany({
        where: {
          lastName: input.lastName && {
            contains: input.lastName,
          },
          firstName: input.firstName && {
            contains: input.firstName,
          },
          middleName: input.middleName && {
            contains: input.middleName,
          },
        },
        orderBy: {
          lastName: "asc",
        },
        take: 100,
      });
    }),

  getResident: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      return ctx.db.registryResident.findUnique({
        where: {
          id: input.id,
        },
      });
    }),

  deleteResident: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      return ctx.db.registryResident.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
