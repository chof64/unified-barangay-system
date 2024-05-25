import React from "react";

import Header from "~/components/header/Header";

export default function SegmentPrivate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
