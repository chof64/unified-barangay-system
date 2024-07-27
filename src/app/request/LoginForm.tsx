"use client"

import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import { type z } from "zod"

import { residentIdentityLoginSchema } from "~/schema/resident-identity"

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

export default function LoginForm() {
  const form = useForm<z.infer<typeof residentIdentityLoginSchema>>({
    resolver: zodResolver(residentIdentityLoginSchema),
    defaultValues: {
      cardId: "",
    },
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(
          (data) =>
            void signIn("resident-identity", {
              cardId: data.cardId,
            })
        )}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="cardId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Card ID</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  )
}
