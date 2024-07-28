import React, { Suspense } from "react"
import { redirect } from "next/navigation"

import { getServerAuthSession } from "~/server/auth"

import ResidentTable from "./ResidentTable"

export default async function ResidentProfiles() {
  const session = await getServerAuthSession()
  if (!session) {
    return redirect("/admin/login")
  }

  return (
    <main className="container my-16">
      <section>
        <h1 className="typography-page-title">Resident Profiles</h1>
        <p className="typography-page-description">
          Existing resident profiles are displayed here. You can view, edit, or
          delete them. You can also create a new resident profile. Click on the
          &quot;Add Resident&quot; button to create a new resident profile.
        </p>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <ResidentTable />
      </Suspense>
    </main>
  )
}
