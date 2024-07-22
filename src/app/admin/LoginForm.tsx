"use client";

import Image from "next/image";
import Link from "next/link";

import { type z } from "zod";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";

import { adminRegisterSchema } from "~/schema/adminRegister";

export default function LoginForm() {
  const form = useForm<z.infer<typeof adminRegisterSchema>>({
    resolver: zodResolver(adminRegisterSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <main className="min-h-[calc(100vh-3.5rem)] w-full px-6 md:px-0 lg:grid lg:grid-cols-2">
      <section className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="typography-page-title">Login</h1>
            <p className="text-balance text-muted-foreground">
              Login to your Barangay Admin account to access the dashboard.
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(
                (data) =>
                  void signIn("admin-barangay", {
                    email: data.email,
                    password: data.password,
                  }),
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
                      <Input type="password" {...field} />
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
          <div className="mt-4 text-center text-sm">
            Having trouble? Send an email to{" "}
            <Link
              href="mailto:contact@chadfernandez.me"
              className="underline"
              target="_blank"
            >
              contact@chadfernandez.me
            </Link>
          </div>
        </div>
      </section>
      <section className="hidden bg-muted lg:block">
        <div className="relative h-full w-full">
          <Image
            src="/image/login-image.jpg"
            alt="Image"
            // width="1920"
            // height="1080"
            fill
            className="object-cover object-center dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </section>
    </main>
  );
}
