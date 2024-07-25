import React, { Suspense } from "react"
import Link from "next/link"

import { Button } from "~/components/ui/button"

import CardList from "./CardList"

export default function ResidentIdentity({
  params,
}: {
  params: { profileId: string }
}) {
  return (
    <main className="container my-16">
      <section>
        <h1 className="typography-page-title">Resident Identity</h1>
        <p className="typography-page-description">
          List of verified identity cards of the resident. These are the
          Identity cards that they can use to verify their identity when
          requesting services.
        </p>
      </section>
      <section className="mt-8">
        <Button variant={"link"} className="mr-8" asChild>
          <Link href="/resident/profile">&lt;- Resident Profiles</Link>
        </Button>
        <Button asChild>
          <Link href={`/resident/profile/${params.profileId}`}>
            Profile Information
          </Link>
        </Button>
      </section>
      <section className="mt-8">
        <Suspense fallback={<div>Loading...</div>}>
          <CardList />
        </Suspense>
      </section>
    </main>
  )
}
