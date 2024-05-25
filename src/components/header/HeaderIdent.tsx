import React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "~/lib/utils";

export default function HeaderIdent({
  isTransparent,
}: {
  isTransparent?: boolean;
}) {
  return (
    <Link
      className={cn(
        "inline-flex items-center gap-2 font-semibold",
        isTransparent ? "text-white" : "text-neutral-800",
      )}
      href="/"
    >
      <Image
        src="/logo-sibalom.png"
        width={40}
        height={40}
        alt="Municipality of Sibalom, Antique"
      />
      Catungan IV
    </Link>
  );
}
