import React, { Suspense } from "react"

import CardList from "./CardList"

export default function ResidentIdentity({
  params,
}: {
  params: { profileId: string }
}) {
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
