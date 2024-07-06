import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MoveLeftIcon } from "lucide-react";

import { api } from "~/trpc/server";

import { Button } from "~/components/ui/button";

import Danger from "./Danger";
import Identification from "./Identification";
import Profile from "./Profile";

export default async function ResidentProfile({
  params,
}: {
  params: { id: string };
}) {
  const resident = await api.resident.getResident({ id: params.id });

  if (!resident) {
    return notFound();
  }

  return (
    <main className="container my-16">
      <section className="my-8">
        <Button variant={"ghost"} asChild>
          <Link href="/resident">
            <MoveLeftIcon className="mr-0.5 h-5 w-5" /> Resident Registry
          </Link>
        </Button>
      </section>
      <section>
        <h1 className="typography-h3">Resident Profile</h1>
        <p className="typography-small mt-3 font-medium text-neutral-500">
          View the resident&apos;s profile and make any necessary updates.
        </p>
      </section>
      <Profile />
      <Identification />
      <Danger />
    </main>
  );
}
