import { z } from "zod";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

const requesterIdSchema = z.object({
  idNumber: z.string(),
  idType: z.string(),
  idPictureFront: z.unknown(),
  idPictureBack: z.unknown(),
});

export default function RequesterId() {
  const form = useForm<z.infer<typeof requesterIdSchema>>({
    resolver: zodResolver(requesterIdSchema),
    defaultValues: {
      idNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof requesterIdSchema>) {
    console.log(values);
  }

  return (
    <section className="my-16 border-t pt-16">
      <div className="flex flex-col gap-16 lg:flex-row lg:gap-8">
        <div className="lg:w-1/2">
          <div className="max-w-md">
            <h1 className="typography-h5">Requester&apos;s ID</h1>
            <p className="typography-small mt-3 text-neutral-500">
              Please provide your ID to verify your identity. Providing a
              registered ID will help us process your request faster.
            </p>
            <Button className="mt-6" variant={"secondary"} size={"sm"} asChild>
              <Link href="#registered-ids" target="_blank">
                Learn more about registered IDs.
              </Link>
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="idNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ID Number</FormLabel>
                    <FormControl>
                      <Input
                        className="shadow-none"
                        placeholder="ID Number"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Numero ng ID / ID Number</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="idType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ID Type</FormLabel>
                    <FormControl>
                      <Input
                        className="shadow-none"
                        placeholder="ID Type"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Uri ng ID / ID Type</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
