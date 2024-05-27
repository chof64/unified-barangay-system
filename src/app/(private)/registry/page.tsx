"use client";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import React from "react";
import Link from "next/link";

import { api } from "~/trpc/react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

import { columns } from "./columns";

export default function Registry() {
  const registryList = api.registry.getRegistryList.useQuery();
  const data =
    registryList.data?.map((registry) => ({
      id: registry.id,
      fullName: [
        registry.firstName,
        registry.middleName,
        registry.lastName,
        registry.suffixName,
      ]
        .filter(Boolean)
        .join(" "),
      address: [
        registry.streetAddress,
        registry.barangayAddress,
        registry.municipalityAddress,
        registry.provinceAddress,
      ]
        .filter(Boolean)
        .join(", "),
      age:
        new Date().getFullYear() - new Date(registry.birthDate).getFullYear(),
      sex: registry.sex,
    })) ?? [];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <main className="container my-16">
      <section>
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Registry
        </h1>
        <p className="mt-4 max-w-md text-sm text-neutral-500">
          Barangay registry of residents.
        </p>
      </section>
      <section className="mt-16 flex items-center gap-4">
        <Input placeholder="Search" />
        <Button asChild>
          <Link href="/registry/create">New Profile</Link>
        </Button>
      </section>
      <section className="mt-4 rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>
    </main>
  );
}
