"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { cn } from "~/lib/utils";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function SearchBar({ className }: { className?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [lastName, setLastName] = useState(searchParams.get("ln") ?? undefined);
  const [firstName, setFirstName] = useState(
    searchParams.get("fn") ?? undefined
  );
  const [middleName, setMiddleName] = useState(
    searchParams.get("mn") ?? undefined
  );

  const updateSearchParams = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (lastName) {
      params.set("ln", lastName);
    } else {
      params.delete("ln");
    }

    if (firstName) {
      params.set("fn", firstName);
    } else {
      params.delete("fn");
    }

    if (middleName) {
      params.set("mn", middleName);
    } else {
      params.delete("mn");
    }

    router.replace(`?${params.toString()}`);
  };

  return (
    <div className={cn("flex w-full gap-4", className)}>
      <Input
        className="shadow-none"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />
      <Input
        className="shadow-none"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      <Input
        className="shadow-none"
        value={middleName}
        onChange={(e) => setMiddleName(e.target.value)}
        placeholder="Middle Name"
      />
      <Button onClick={() => updateSearchParams()}>Search</Button>
    </div>
  );
}
