import React, { Suspense } from "react"
import { redirect } from "next/navigation"

import { getServerAuthSession } from "~/server/auth"

import CardList from "./CardList"

export default async function ResidentIdentity() {
  const session = await getServerAuthSession()
  if (!session) {
    return redirect("/admin/login")
  }
  return (
    <main className="container my-16">
      <section className="mt-8">
        <Suspense fallback={<div>Loading...</div>}>
          <CardList />
        </Suspense>
      </section>
    </main>
  )
}
