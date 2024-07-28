"use client"

import React from "react"

import RequestDocuments from "./RequestDocuments"
import RequesterId from "./RequesterId"
import RequesterInformation from "./RequesterInformation"

export default function Request() {
  return (
    <main className="container my-16">
      <section>
        <h1 className="typography-h3">Request a document</h1>
        <p className="typography-small mt-3 font-medium text-neutral-500">
          Fill out the form below start your request for a document. Please
          double check that the information you provide is accurate to prevent
          any delays in processing your request.
        </p>
      </section>
      <RequesterId />
      <RequesterInformation />
      <RequestDocuments />
    </main>
  )
}
