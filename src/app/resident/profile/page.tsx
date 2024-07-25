import React, { Suspense } from "react"

import ResidentTable from "./ResidentTable"

export default function ResidentProfiles() {
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
