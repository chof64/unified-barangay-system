"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { adminRegisterSchema } from "~/schema/adminRegister"
import { api } from "~/trpc/react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
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

export default function RegisterForm() {
  const router = useRouter()

  const registerUser = api.adminAuth.register.useMutation({
    onSuccess: () => {
      toast.success("User registered successfully")
      void router.push("/admin")
    },
    onError: (error) => {
      toast.error("User registration failed", {
        description: error.message,
      })
    },
  })

  const form = useForm<z.infer<typeof adminRegisterSchema>>({
    resolver: zodResolver(adminRegisterSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) =>
          registerUser.mutate({
            email: data.email,
            password: data.password,
          })
        )}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="me@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
