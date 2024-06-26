"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { XIcon } from "lucide-react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

const documentItem = z.object({
  id: z.string(),
  type: z.string(),
  quantity: z.number(),
});

const requestDocumentsSchema = z.object({
  requested: z
    .array(documentItem)
    .min(1, "Please select at least one document."),
});

export default function RequestDocuments() {
  const form = useForm<z.infer<typeof requestDocumentsSchema>>({
    resolver: zodResolver(requestDocumentsSchema),
    defaultValues: {
      requested: [],
    },
  });

  function onSubmit(values: z.infer<typeof requestDocumentsSchema>) {
    console.log(values);
  }

  return (
    <section className="my-16 border-t pt-16">
      <div className="flex flex-col gap-16 lg:flex-row lg:gap-8">
        <div className="lg:w-1/2">
          <div className="max-w-md">
            <h1 className="typography-h5">Documents Requested</h1>
            <p className="typography-small mt-3 text-neutral-500">
              Please select the necessary documents you need to request.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <FormField
                  control={form.control}
                  name="requested"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="space-y-2">
                          {field.value.map((item, index) => (
                            <div key={item.id}>
                              <div className="flex gap-2">
                                <Input
                                  className="shadow-none"
                                  placeholder="Document Type"
                                  value={item.type}
                                  onChange={(e) => {
                                    const updated = [...field.value];
                                    updated[index]!.type = e.target.value;
                                    field.onChange(updated);
                                  }}
                                />
                                <Input
                                  className="shadow-none"
                                  placeholder="Document Quantity"
                                  value={item.quantity}
                                  onChange={(e) => {
                                    const updated = [...field.value];
                                    updated[index]!.quantity = Number(
                                      e.target.value
                                    );
                                    field.onChange(updated);
                                  }}
                                />
                                <Button
                                  className="shrink-0"
                                  size={"icon"}
                                  onClick={() => {
                                    const updated = [...field.value];
                                    updated.splice(index, 1);
                                    field.onChange(updated);
                                  }}
                                >
                                  <XIcon className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </FormControl>
                      <FormMessage />
                      <Button
                        className="w-full rounded-md border shadow-none"
                        variant={"secondary"}
                        onClick={() =>
                          field.onChange([
                            ...field.value,
                            {
                              id: nanoid(8),
                              type: "ID",
                              quantity: 6,
                            },
                          ])
                        }
                      >
                        Add Document
                      </Button>
                      <FormDescription>
                        Please double check the documents you have selected.
                      </FormDescription>
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
