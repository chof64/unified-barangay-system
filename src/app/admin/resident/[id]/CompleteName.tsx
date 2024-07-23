"use client"

import React from "react"
import { useParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { type z } from "zod"

import { Button } from "~/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import TwoColumn from "~/components/TwoColumn"
import { completeNameSchema } from "~/schema/residentProfile"

export default function CompleteName() {
  const params = useParams<{ id: string }>()

  const form = useForm<z.infer<typeof completeNameSchema>>({
    resolver: zodResolver(completeNameSchema),
    defaultValues: {
      id: params.id,
      firstName: "",
      lastName: "",
      middleName: "",
      extensionName: "",
    },
  })

  function onSubmit(values: z.infer<typeof completeNameSchema>) {
    console.log(values)
  }

  return (
    <TwoColumn
      className="pt-16"
      left={
        <div className="two-column-heading">
          <h2>Complete Name</h2>
          <p>
            Complete name of the resident. Please make sure to include the full
            middle name and extension name of the resident. Write{" "}
            <span className="font-bold">N/A</span> if the resident does not have
            an extension name.
          </p>
        </div>
      }
      right={
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
            <div className="flex gap-8">
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
                name="extensionName"
                render={({ field }) => (
                  <FormItem className="w-64">
                    <FormLabel>Extension</FormLabel>
                    <FormControl>
                      <Input placeholder="N/A, JR, I, II, III" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      }
    />
  )
}
