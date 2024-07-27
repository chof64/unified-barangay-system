import { PrismaAdapter } from "@auth/prisma-adapter"
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth"
import { type Adapter } from "next-auth/adapters"
import CredentialsProvider from "next-auth/providers/credentials"

import { db } from "~/server/db"

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string
      // ...other properties
      // role: UserRole;
      type: "admin-barangay" | "resident-identity"
    } & DefaultSession["user"]
  }

  interface User {
    // ...other properties
    // role: UserRole;
    type: "admin-barangay" | "resident-identity"
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id
        token.type = user.type
      }
      return token
    },
    session: async ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.id,
        type: token.type,
      },
    }),
  },
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    CredentialsProvider({
      id: "admin-barangay",
      name: "Barangay Admin Account",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, _req) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Missing email or password")
        }

        const dbUser = await db.user.findUnique({
          where: { email: credentials.email },
        })

        if (!dbUser) {
          throw new Error("No user found")
        }

        const isValidPassword = dbUser.password === credentials.password

        if (!isValidPassword) {
          throw new Error("Invalid password")
        }

        return { id: dbUser.id, type: "admin-barangay", email: dbUser.email }
      },
    }),
    CredentialsProvider({
      id: "resident-identity",
      name: "Resident Identity",
      credentials: {
        cardId: { label: "Card ID", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.cardId) {
          throw new Error("Missing card ID")
        }

        const dbResidentIdentity = await db.residentIdentity.findUnique({
          where: { cardNumber: credentials.cardId },
          include: {
            residentProfile: true,
          },
        })

        if (!dbResidentIdentity) {
          throw new Error("No resident found")
        }

        return {
          id: dbResidentIdentity.residentProfileId,
          type: "resident-identity",
        }
      },
    }),
  ],
}

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions)
