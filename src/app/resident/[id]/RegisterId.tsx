"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type z } from "zod";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
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

import { registerIdSchema } from "../formSchema";

export default function RegisterId() {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof registerIdSchema>>({
    resolver: zodResolver(registerIdSchema),
    defaultValues: {
      idNumber: "",
      idType: "",
    },
  });

  function onSubmit(values: z.infer<typeof registerIdSchema>) {
    console.log(values);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Register Identification</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Register Identification</DialogTitle>
          <DialogDescription>
            Register and link identification cards for easy verification and
            transactions. Make sure it is valid and up-to-date.
          </DialogDescription>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="idType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ID Type</FormLabel>
                    <FormControl>
                      <Input
                        className="shadow-none"
                        placeholder="//TODO(polish): Make this a select dropdown"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                    <FormDescription>
                      Enter the ID number as it appears on the card. Make sure
                      to include the dashes and spaces, if any.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
