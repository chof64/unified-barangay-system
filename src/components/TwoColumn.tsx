import React from "react"

import { cn } from "~/lib/utils"

export default function TwoColumn({
  className,
  left,
  right,
}: {
  className?: string
  left: React.ReactNode
  right: React.ReactNode
}) {
  return (
    <section className={cn(className)}>
      <div className="flex flex-col gap-16 lg:flex-row lg:gap-8">
        <div className="lg:w-1/2">{left}</div>
        <div className="lg:w-1/2">{right}</div>
      </div>
    </section>
  )
}
