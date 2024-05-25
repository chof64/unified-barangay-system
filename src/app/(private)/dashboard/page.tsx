import React from "react";
import Link from "next/link";

import { Button } from "~/components/ui/button";

export default function Dashboard() {
  return (
    <main className="container my-16">
      <section>
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Dashboard
        </h1>
        <p className="mt-4 max-w-md text-sm text-neutral-500">
          Welcome to the Unified Barangay System. Select a function to get
          started. Or read the{" "}
          <Link
            className="font-semibold underline underline-offset-4"
            href="/getting-started"
            target="_blank"
          >
            Getting Started
          </Link>{" "}
          guide.
        </p>
      </section>
      <section className="mt-16">
        <h2 className="text-xl font-medium">Quick Links</h2>
        <div className="mt-6">
          <Button asChild>
            <Link href="/registry">Registry</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
