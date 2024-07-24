import React from "react"

import CompleteName from "./CompleteName"

export default function ResidentProfile() {
  return (
    <main className="container my-16">
      <section>
        <h1 className="typography-page-title">Resident Profile</h1>
        <p className="typography-page-description">
          Please make sure to keep these information up-to-date. This is
          important for the community&apos;s record keeping.
        </p>
      </section>
      <section className="mt-16 space-y-16 divide-y border-t">
        <CompleteName />
      </section>
    </main>
  )
}
