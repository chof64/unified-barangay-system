import React, { Suspense } from "react"
import { redirect } from "next/navigation"

import { getServerAuthSession } from "~/server/auth"

import CompleteName from "./CompleteName"

export default async function ResidentProfile() {
  const session = await getServerAuthSession()
  if (!session) {
    return redirect("/admin/login")
  }

  return (
    <div className="container my-16 w-full">
      <section className="mt-8 space-y-16 divide-y border-t">
        <Suspense fallback={<div>Loading...</div>}>
          <CompleteName />
        </Suspense>
      </section>
    </div>
  )
}
