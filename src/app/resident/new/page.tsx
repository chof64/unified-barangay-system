"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { type z } from "zod";

import { api } from "~/trpc/react";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

import { residentCreateSchema } from "../formSchema";

export default function ResidentCreate() {
  const router = useRouter();
  const createResident = api.resident.createResident.useMutation({
    onSuccess(data) {
      toast.success("Resident profile created successfully");
      router.push(`/resident/${data.id}`);
    },
    onError(err) {
      toast.error(" Error creating resident profile", {
        description: err.message,
      });
    },
  });

  const form = useForm<z.infer<typeof residentCreateSchema>>({
    resolver: zodResolver(residentCreateSchema),
    defaultValues: {
      lastName: "",
      firstName: "",
      middleName: "",
      suffixName: "",
    },
  });

  return (
    <main className="container my-16">
      <div className="flex flex-col gap-16 lg:flex-row lg:gap-8">
        <div className="lg:w-1/2">
          <div className="max-w-md">
            <h1 className="typography-h5">Create Resident Profile</h1>
            <p className="typography-small mt-3 text-neutral-500">
              Fill out the form to create a resident profile.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((values) =>
                createResident.mutate(values)
              )}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-4">
                <FormField
                  control={form.control}
                  name="middleName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Middle Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Middle Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="suffixName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Suffix</FormLabel>
                      <FormControl>
                        <Input placeholder="Suffix (Optional)" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-x-3">
                <Button type="submit">Submit</Button>
                <Button variant={"secondary"} asChild>
                  <Link href="/resident">Cancel</Link>
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
}
