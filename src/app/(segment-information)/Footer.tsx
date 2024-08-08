import React from "react"
import Link from "next/link"

import { Button } from "~/components/ui/button"

export default function Footer() {
  return (
    <footer className="container">
      <div className="flex w-full justify-center py-8">
        <Button variant={"link"} asChild>
          <Link href="/">Home</Link>
        </Button>
        <Button variant={"link"} asChild>
          <Link href="#about">About</Link>
        </Button>
        <Button variant={"link"} asChild>
          <Link href="#contact">Contact</Link>
        </Button>
        <Button variant={"link"} asChild>
          <Link href="/admin">Admin</Link>
        </Button>
      </div>
      <div className="flex h-14 items-center">
        <p className="text-sm text-muted-foreground">
          Made with ❤️ by{" "}
          <Link href="https://chadfernandez.me" target="_blank">
            Chad Fernandez
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}
