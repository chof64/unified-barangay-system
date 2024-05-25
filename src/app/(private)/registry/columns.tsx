"use client";

import { type ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type RegistryTable = {
  id: string;
  fullName: string;
  address: string;
  sex: string;
  age: number;
};

export const columns: ColumnDef<RegistryTable>[] = [
  { accessorKey: "fullName", header: "Full Name" },
  { accessorKey: "age", header: "Age" },
  { accessorKey: "sex", header: "Sex" },
  { accessorKey: "address", header: "Address" },
];
