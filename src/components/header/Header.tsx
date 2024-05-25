import React from "react";

import { type NavigationRoute } from "~/types/header";

import HeaderRoot from "./HeaderRoot";
import HeaderIdent from "./HeaderIdent";
import HeaderSidebar from "./HeaderSidebar";

export default function Header() {
  const mockAuthenticated = true;

  return (
    <HeaderRoot>
      <div className="inline-flex items-center gap-4">
        <HeaderSidebar
          routes={
            mockAuthenticated
              ? [
                  ...privateRoutes,
                  { name: "", href: "##DIV##" },
                  ...publicRoutes,
                ]
              : publicRoutes
          }
        />
        <HeaderIdent />
      </div>
    </HeaderRoot>
  );
}

const privateRoutes: NavigationRoute[] = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Registry", href: "/registry" },
];

const publicRoutes: NavigationRoute[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];
