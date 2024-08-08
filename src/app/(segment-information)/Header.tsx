import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "~/components/ui/button"

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b bg-white">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/logos/sibalom.png"
              width={36}
              height={36}
              alt="Logo of the Municipality of Sibalom"
            />
            <p className="font-semibold">Catungan IV</p>
          </div>
        </Link>
        <div>
          <Button size={"sm"} asChild>
            <Link href="/request">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
