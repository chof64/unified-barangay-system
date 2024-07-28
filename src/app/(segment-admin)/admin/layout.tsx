import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeftIcon } from "lucide-react"

import { Button } from "~/components/ui/button"

export const metadata = {
  title: {
    template: "%s - Admin | Unified Barangay System",
    default: "Dashboard",
  },
}

export default function LayoutAdmin({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
