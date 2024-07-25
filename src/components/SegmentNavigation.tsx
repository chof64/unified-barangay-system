"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ArrowLeftIcon } from "lucide-react"

import { metadataBreadcrumbs } from "~/config/metadataBreadcrumbs"
import { generatePathSegments } from "~/lib/generatePathSegments"

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb"
import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"

export default function SegmentNavigation({
  baseSegment,
}: {
  baseSegment: string
}) {
  const path = usePathname()
  const router = useRouter()

  const [open, setOpen] = useState(false)

  const pathSegments = generatePathSegments(path)

  const getMetadata = (path: string) => {
    return metadataBreadcrumbs.find((metadata) => {
      if (metadata.path instanceof RegExp) {
        return metadata.path.test(path)
      }
      return metadata.path === path
    })
  }

  return (
    <div className="container my-2 mt-4 flex items-center gap-8">
      <Button variant={"ghost"} size={"icon"} onClick={() => router.back()}>
        <ArrowLeftIcon className="h-4 w-4" />
      </Button>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={baseSegment}>
              {getMetadata(baseSegment)?.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
          {pathSegments.length > 2 && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <DropdownMenu open={open} onOpenChange={setOpen}>
                  <DropdownMenuTrigger
                    className="flex items-center gap-1"
                    aria-label="Toggle menu"
                  >
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {pathSegments.slice(0, -2).map((item, index) => (
                      <DropdownMenuItem key={index}>
                        <Link href={item} onClick={() => setOpen(false)}>
                          {getMetadata(item)?.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
            </>
          )}
          {pathSegments.slice(-2).map((path) => (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={path}>
                  {getMetadata(path)?.title}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
