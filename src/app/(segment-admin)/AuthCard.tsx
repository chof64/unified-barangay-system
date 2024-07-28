"use client"

import React from "react"
import { LoaderCircleIcon } from "lucide-react"
import { signOut } from "next-auth/react"

import { api } from "~/trpc/react"

import { Button } from "~/components/ui/button"

export default function AuthCard() {
  const session = api.authentication.getAuthSession.useQuery()

  if (session.isLoading) {
    return (
      <div className="flex h-32 w-full grow-0 items-center justify-center">
        <p className="inline-flex items-center gap-2 text-muted-foreground">
          <LoaderCircleIcon className="h-5 w-5 animate-spin" />
          Fetching status
        </p>
      </div>
    )
  }

  if (!session.data || Object.keys(session.data).length === 0) {
    return (
      <div className="flex h-32 grow-0 items-center justify-center p-2">
        <p className="text-center text-muted-foreground">
          You are not logged in. Please log in to continue.
        </p>
      </div>
    )
  }

  return (
    <div className="flex h-32 grow-0 flex-col justify-between">
      <div className="flex h-full items-center px-2">
        <div>
          <p className="text-sm text-muted-foreground">
            You&apos;re logged in as
          </p>
          <p className="line-clamp-1 font-medium">{session.data.user.email}</p>
        </div>
      </div>
      <Button
        className="w-full rounded-none"
        onClick={() =>
          signOut({
            callbackUrl: "/admin",
          })
        }
      >
        Sign out
      </Button>
    </div>
  )
}
