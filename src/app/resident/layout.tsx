import React from "react"

import SegmentNavigation from "~/components/SegmentNavigation"

export default function LayoutResident({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SegmentNavigation baseSegment="/admin" />
      {children}
    </>
  )
}
