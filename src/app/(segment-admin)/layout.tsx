import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeftIcon } from "lucide-react"

import { Button } from "~/components/ui/button"

import AuthCard from "./AuthCard"
import VerticalNavigation from "./VerticalNavigation"

export default function SegmentAdmin({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex divide-x">
      <div className="sticky top-0 flex h-screen w-72 flex-col divide-y">
        <header className="relative flex h-14 items-center justify-between p-2">
          <Button className="z-10" variant={"ghost"} size={"icon"}>
            <ArrowLeftIcon className="h-5 w-5" />
          </Button>
          <div className="absolute inset-0 flex h-full w-full items-center justify-center">
            <Link href="/admin">
              <div className="flex items-center gap-2">
                <Image
                  src="/logos/sibalom.png"
                  width={36}
                  height={36}
                  alt="Logo of the Municipality of Sibalom"
                />
                <div className="font-semibold">Catungan IV</div>
              </div>
            </Link>
          </div>
        </header>
        <VerticalNavigation />
        <AuthCard />
      </div>
      <div className="h-full min-h-screen w-full">{children}</div>
    </div>
  )
}
