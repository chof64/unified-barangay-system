import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

import { getServerAuthSession } from "~/server/auth"

import LoginForm from "./LoginForm"

export const metadata = {
  title: "Login",
}

export default async function PageAdminLogin() {
  const session = await getServerAuthSession()
  if (session) {
    return redirect("/admin")
  }

  return (
    <main className="min-h-[calc(100vh-3.5rem)] w-full px-6 md:px-0 lg:grid lg:grid-cols-2">
      <section className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="typography-page-title">Login</h1>
            <p className="text-balance text-muted-foreground">
              Login to your Barangay Admin account to access the dashboard.
            </p>
          </div>
          <LoginForm />
          <div className="mt-4 text-center text-sm">
            Having trouble? Send an email to{" "}
            <Link
              href="mailto:contact@chadfernandez.me"
              className="underline"
              target="_blank"
            >
              contact@chadfernandez.me
            </Link>
          </div>
        </div>
      </section>
      <section className="hidden bg-muted lg:block">
        <div className="relative h-full w-full">
          <Image
            src="/image/login-image.jpg"
            alt="Image"
            fill
            className="object-cover object-center dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </section>
    </main>
  )
}
