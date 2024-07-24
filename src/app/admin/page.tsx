import React from "react"
import { redirect } from "next/navigation"

import { getServerAuthSession } from "~/server/auth"

export const metadata = {
  title: "Dashboard",
}

export default async function AdminDashboard() {
  const session = await getServerAuthSession()
  if (!session) {
    return redirect("/admin/login")
  }

  return (
    <main>
      <section>
        <h1 className="typography-page-heading">Admin Dashboard</h1>
      </section>
    </main>
  )
}
