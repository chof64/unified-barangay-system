import React from "react";

import { cn } from "~/lib/utils";

export default function HeaderRoot({
  children,
  isOverlay,
  isTransparent,
}: {
  children: React.ReactNode;
  isOverlay?: boolean;
  isTransparent?: boolean;
}) {
  return (
    <header
      className={cn(
        "inset-x-0 top-0 z-50",
        isOverlay ? "fixed" : "sticky",
        isTransparent
          ? "bg-gradient-to-b from-black/30 via-black/10"
          : "border-b border-neutral-200 bg-white shadow-sm",
      )}
    >
      <div className="container flex h-14 w-full max-w-none items-center justify-between">
        {children}
      </div>
    </header>
  );
}
