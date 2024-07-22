import { publicProcedure, createTRPCRouter } from "~/server/api/trpc";
import { adminRegisterSchema } from "~/schema/adminRegister";
import { TRPCError } from "@trpc/server";

export const adminAuthRouter = createTRPCRouter({
  register: publicProcedure
    .input(adminRegisterSchema)
    .mutation(async ({ input, ctx }) => {
      const isEmailTaken = await ctx.db.user.findFirst({
        where: {
          email: input.email,
        },
      });

      if (!!isEmailTaken) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Email is already taken",
        });
      }

      return ctx.db.user.create({
        data: {
          email: input.email,
          password: input.password,
        },
        select: {
          id: true,
          email: true,
          password: false,
        },
      });
    }),
});
