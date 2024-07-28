import React from "react"
import Link from "next/link"

import { Button } from "~/components/ui/button"

const items = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/admin" },
  { label: "Resident Profile", href: "/resident/profile" },
  { label: "Resident Identity", href: "/resident/identity" },
  { label: "Resident Transactions", href: "#transactions" },
] as const

export default function VerticalNavigation() {
  return (
    <div className="h-full">
      {items.map((item) => (
        <Button
          className="w-full justify-start rounded-none"
          variant={"ghost"}
          size={"lg"}
          key={item.href}
          asChild
        >
          <Link href={item.href}>{item.label}</Link>
        </Button>
      ))}
    </div>
  )
}
