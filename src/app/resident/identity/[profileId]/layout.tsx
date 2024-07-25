import React from "react"

import ProfileHeader from "~/components/ProfileHeader"

export default function LayoutResidentIdentity({
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
