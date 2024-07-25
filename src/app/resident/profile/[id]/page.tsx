import React, { Suspense } from "react"
import Link from "next/link"

import { Button } from "~/components/ui/button"

import CompleteName from "./CompleteName"

export default function ResidentProfile({
  params,
}: {
  params: { id: string }
}) {
  return (
    <main className="container my-16">
      <section>
        <h1 className="typography-page-title">Resident Profile</h1>
        <p className="typography-page-description">
          Please make sure to keep these information up-to-date. This is
          important for the community&apos;s record keeping.
        </p>
      </section>
      <section className="mt-8">
        <Button variant={"link"} className="mr-8" asChild>
          <Link href="/resident/profile">&lt;- Resident Profiles</Link>
        </Button>
        <Button asChild>
          <Link href={`/resident/identity/${params.id}`}>Identity Cards</Link>
        </Button>
      </section>
      <section className="mt-8 space-y-16 divide-y border-t">
        <Suspense fallback={<div>Loading...</div>}>
          <CompleteName />
        </Suspense>
      </section>
    </main>
  )
}
