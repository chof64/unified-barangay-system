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
    <div className="container my-16">
      <section>
        <h1 className="typography-page-title">Admin Dashboard</h1>
        <p className="typography-page-description">
          Welcome back, <strong>{session.user.email}</strong>!
        </p>
      </section>
      <section className="mt-16 max-w-xl">
        <p className="typography-p text-muted-foreground">
          Nothing to see here yet. Use the sidebar to navigate to the different
          sections of the admin dashboard.
        </p>
      </section>
    </div>
  )
}
