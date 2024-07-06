"use client";

import React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { api } from "~/trpc/react";

import { Button } from "~/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

import SearchBar from "./SearchBar";

export default function Registry() {
  const router = useRouter();

  const residents = api.resident.listResidents.useQuery({
    lastName: useSearchParams().get("ln") ?? undefined,
    firstName: useSearchParams().get("fn") ?? undefined,
    middleName: useSearchParams().get("mn") ?? undefined,
  });

  return (
    <main className="container my-16">
      <section>
        <h1 className="typography-h3">Resident Registry</h1>
        <p className="typography-small mt-3 font-medium text-neutral-500">
          View the list of residents registered in the application.
        </p>
      </section>
      <div className="mt-8 flex gap-16">
        <SearchBar />
        <Button variant={"secondary"} asChild>
          <Link href="/resident/new">Add Resident</Link>
        </Button>
      </div>
      <section className="mt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Last Name</TableHead>
              <TableHead>First Name</TableHead>
              <TableHead>Middle Name</TableHead>
              <TableHead>Suffix</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {residents.data?.map((resident) => (
              <TableRow
                className="cursor-pointer"
                key={resident.id}
                onClick={() => router.push(`/resident/${resident.id}`)}
              >
                <TableCell>{resident.lastName}</TableCell>
                <TableCell>{resident.firstName}</TableCell>
                <TableCell>{resident.middleName}</TableCell>
                <TableCell>{resident.suffixName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </main>
  );
}
