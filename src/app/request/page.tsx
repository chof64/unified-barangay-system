import React from "react"

import LoginForm from "./LoginForm"

export default function RequestPage() {
  return (
    <main className="container my-16">
      <section>
        <h1 className="typography-page-title text-center">Request</h1>
        <p className="typography-page-description mx-auto text-center">
          Confirm your identity to start your request for a document. Please
          double check that the information you provide is accurate to prevent
          any delays in processing your request.
        </p>
        <p className="typography-page-description mx-auto mt-6 text-center font-normal">
          Enter the Card ID that was provided to upon registration. Or Card ID
          of your registered ID card.
        </p>
      </section>
      <section className="mx-auto mt-32 max-w-sm">
        <LoginForm />
      </section>
    </main>
  )
}
