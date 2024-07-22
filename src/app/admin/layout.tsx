import React from "react";

export const metadata = {
  title: {
    template: "%s - Admin | Unified Barangay System",
    default: "Dashboard",
  },
};

export default function LayoutAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
