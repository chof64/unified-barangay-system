import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { registrySchema } from "~/app/(private)/registry/create/formSchema";

export const registryRouter = createTRPCRouter({
  getRegistryList: publicProcedure.query(({ ctx }) => {
    return ctx.db.registry.findMany({
      orderBy: {
        updatedAt: "desc",
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        middleName: true,
        suffixName: true,
        streetAddress: true,
        barangayAddress: true,
        municipalityAddress: true,
        provinceAddress: true,
        birthDate: true,
        sex: true,
      },
    });
  }),
  createRegistryProfile: publicProcedure
    .input(registrySchema)
    .mutation(({ ctx, input }) => {
      return ctx.db.registry.create({
        data: {
          ...input,
        },
      });
    }),
});
