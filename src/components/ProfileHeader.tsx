"use client"

import React from "react"
import Link from "next/link"
import { useParams } from "next/navigation"

import { api } from "~/trpc/react"
import { combineToFullName } from "~/lib/combineToFullName"

import { Button } from "~/components/ui/button"

export default function ProfileHeader() {
  const params = useParams<{ profileId: string }>()

  const getCompleteName = api.residentProfile.getCompleteName.useQuery({
    id: params.profileId,
  })

  return (
    <div className="container my-16">
      <div>
        <h3 className="typography-h3">
          {combineToFullName([
            getCompleteName.data?.firstName,
            getCompleteName.data?.middleName,
            getCompleteName.data?.lastName,
            getCompleteName.data?.extensionName,
          ])}
        </h3>
      </div>
      <div className="mt-8 flex gap-2">
        <Button variant={"link"} asChild>
          <Link href={`/resident/profile/${params.profileId}`}>Profile</Link>
        </Button>
        <Button variant={"link"} asChild>
          <Link href={`/resident/identity/${params.profileId}`}>
            Identity Cards
          </Link>
        </Button>
        <Button variant={"link"} asChild>
          <Link href={`/generate/${params.profileId}`}>Generate</Link>
        </Button>
      </div>
    </div>
  )
}
