import React from "react"

import Footer from "./Footer"
import Header from "./Header"

export default function SegmentInformation({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  )
}
