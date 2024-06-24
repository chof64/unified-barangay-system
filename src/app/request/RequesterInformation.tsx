import { z } from "zod";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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

const requesterSchema = z.object({
  lastName: z.string(),
  firstName: z.string(),
  middleName: z.string(),
});

export default function RequesterInformation() {
  const form = useForm<z.infer<typeof requesterSchema>>({
    resolver: zodResolver(requesterSchema),
    defaultValues: {
      lastName: "",
      firstName: "",
      middleName: "",
    },
  });

  function onSubmit(values: z.infer<typeof requesterSchema>) {
    console.log(values);
  }

  return (
    <section className="my-16 border-t pt-16">
      <div className="flex flex-col gap-16 lg:flex-row lg:gap-8">
        <div className="lg:w-1/2">
          <div className="max-w-md">
            <h1 className="typography-h5">Requester&apos;s Information</h1>
            <p className="typography-small mt-3 text-neutral-500">
              Tell use who you are. This will be used to verify your identity
              and request.
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
                    <FormDescription>Apelyido / Last Name</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        className="shadow-none"
                        placeholder="Given Names"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Mga Pangalan / Given Names
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="middleName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Middle Name</FormLabel>
                    <FormControl>
                      <Input
                        className="shadow-none"
                        placeholder="Middle Name"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Gitnang Apelyido / Middle Names
                    </FormDescription>
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
