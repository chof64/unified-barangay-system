import React, { Suspense } from "react"
import Link from "next/link"

import { Button } from "~/components/ui/button"

import CompleteName from "./CompleteName"

export default function ResidentProfile({
  params,
}: {
  params: { profileId: string }
}) {
  return (
    <main className="container my-16">
      <section className="mt-8 space-y-16 divide-y border-t">
        <Suspense fallback={<div>Loading...</div>}>
          <CompleteName />
        </Suspense>
      </section>
    </main>
  )
}
