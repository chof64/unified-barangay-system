import React from "react";

import Header from "~/components/header/Header";

export default function SegmentPublic({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
    </div>
  );
}
