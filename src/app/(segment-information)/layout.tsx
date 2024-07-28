import React from "react"

import Header from "./Header"

export default function SegmentInformation({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
