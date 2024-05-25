"use client";

import React from "react";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

import { cn } from "~/lib/utils";
// import { api } from "~/trpc/react";

import type { NavigationRoute } from "~/types/header";

import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "~/components/ui/sheet";

export default function HeaderSidebar({
  routes,
  isTransparent,
}: {
  routes: NavigationRoute[];
  isTransparent?: boolean;
}) {
  // const session = api.auth.session.useQuery();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className={cn(isTransparent ? "text-white" : "")}
          variant={"link"}
          size={"icon"}
        >
          <MenuIcon className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        {/* {session.data ? (
          <div className="mt-4">
            <HeaderSidebarProfile />
            <div className="mt-4">
              <SheetClose asChild>
                <Button className="w-full" size={"sm"} asChild>
                  <Link href="/">Dashboard</Link>
                </Button>
              </SheetClose>
            </div>
          </div>
        ) : (
          <div className="mt-8">
            <SheetClose asChild>
              <Button className="w-full" size={"sm"} asChild>
                <Link href="/login">Login</Link>
              </Button>
            </SheetClose>
          </div>
        )} */}
        <nav className="mt-8 flex flex-col gap-2">
          {routes.map((route) =>
            route.href === "##DIV##" ? (
              <div className="mt-4 flex items-center gap-2" key={route.href}>
                <p className="shrink-0 text-xs">{route.name}</p>
                <div className="h-0.5 w-full rounded-full bg-gray-100" />
              </div>
            ) : (
              <SheetClose key={route.href} asChild>
                <Button
                  className="justify-start"
                  variant={"link"}
                  size={"lg"}
                  asChild
                >
                  <Link href={route.href}>{route.name}</Link>
                </Button>
              </SheetClose>
            ),
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
