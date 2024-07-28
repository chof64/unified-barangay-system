import React from "react"
import Link from "next/link"
import { redirect } from "next/navigation"

import { getServerAuthSession } from "~/server/auth"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

import RegisterForm from "./RegisterForm"

export const metadata = {
  title: "Register",
}

export default async function PageAdminRegister() {
  const session = await getServerAuthSession()
  if (session) {
    return redirect("/admin")
  }

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
            Register a new Barangay Admin account. This is for Barangay
            officials only.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter>
          <p className="typography-muted">
            Already have an account?{" "}
            <Link className="typography-link-default" href="/admin/login">
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
