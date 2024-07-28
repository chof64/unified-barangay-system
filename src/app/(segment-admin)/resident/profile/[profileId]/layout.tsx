import React from "react"

import ProfileHeader from "~/components/ProfileHeader"

export default function LayoutResidentProfile({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ProfileHeader />
      {children}
    </>
  )
}
