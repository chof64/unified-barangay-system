"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

const requesterIdSchema = z.object({
  lastName: z.string(),
  firstName: z.string(),
  middleName: z.string(),
  suffixName: z.string().optional(),
});

export default function Profile() {
  const params = useParams<{ id: string }>();

  const profile = api.resident.getResident.useQuery({ id: params.id });

  const form = useForm<z.infer<typeof requesterIdSchema>>({
    resolver: zodResolver(requesterIdSchema),
    defaultValues: {
      lastName: "",
      firstName: "",
      middleName: "",
      suffixName: "",
    },
  });

  useEffect(() => {
    if (profile.data) {
      form.setValue("lastName", profile.data.lastName);
      form.setValue("firstName", profile.data.firstName);
      form.setValue("middleName", profile.data.middleName);
      form.setValue("suffixName", profile.data.suffixName ?? undefined);
    }
  }, [form, profile.data]);

  function onSubmit(values: z.infer<typeof requesterIdSchema>) {
    console.log(values);
  }

  return (
    <section className="my-16 border-t pt-16">
      <div className="flex flex-col gap-16 lg:flex-row lg:gap-8">
        <div className="lg:w-1/2">
          <div className="max-w-md">
            <h1 className="typography-h5">Profile</h1>
            <p className="typography-small mt-3 text-neutral-500">
              Information about the resident.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        className="shadow-none"
                        placeholder="Last Name"
                        {...field}
                      />
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
                      <Input
                        className="shadow-none"
                        placeholder="First Name"
                        {...field}
                      />
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
                        <Input
                          className="shadow-none"
                          placeholder="Middle Name"
                          {...field}
                        />
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
                        <Input
                          className="shadow-none"
                          placeholder="Suffix (Optional)"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button size={"sm"} type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
