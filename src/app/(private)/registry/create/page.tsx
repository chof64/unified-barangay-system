"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { addYears, format } from "date-fns";
import { useForm } from "react-hook-form";
import { type z } from "zod";
import { toast } from "sonner";

import { CalendarIcon } from "lucide-react";
import React from "react";

import { cn } from "~/lib/utils";
import { api } from "~/trpc/react";

import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

import { registrySchema } from "./formSchema";

export default function RegistryCreate() {
  const createRegistryProfile = api.registry.createRegistryProfile.useMutation({
    onSuccess() {
      toast.success("Profile created successfully!");
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const form = useForm<z.infer<typeof registrySchema>>({
    resolver: zodResolver(registrySchema),
  });

  return (
    <main className="container my-16">
      <section>
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Create New Profile
        </h1>
        <p className="mt-4 max-w-md text-sm text-neutral-500">
          Please fill out the form below to create a new profile. Make sure all
          information is accurate.
        </p>
      </section>
      <section className="mt-16">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((value) =>
              createRegistryProfile.mutate(value),
            )}
            className="space-y-8"
          >
            <div>
              <div className="flex w-full gap-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Juan" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="middleName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Middle Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Reyes" {...field} />
                      </FormControl>
                      <FormDescription>
                        Leave blank if not applicable.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="dela Cruz" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="suffixName"
                  render={({ field }) => (
                    <FormItem className="w-[32rem]">
                      <FormLabel>Suffix</FormLabel>
                      <FormControl>
                        <Input placeholder="Jr., II, III" {...field} />
                      </FormControl>
                      <FormDescription>
                        Leave blank if not applicable.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div>
              <h2 className="text-sm text-neutral-500">Residence Address</h2>
              <div className="mt-2 flex w-full gap-2">
                <FormField
                  control={form.control}
                  name="streetAddress"
                  render={({ field }) => (
                    <FormItem className="w-[144rem]">
                      <FormLabel>Street</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="House No./Street/Purok"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="barangayAddress"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Barangay</FormLabel>
                      <FormControl>
                        <Input placeholder="Catungan IV" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="municipalityAddress"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Municipality/City</FormLabel>
                      <FormControl>
                        <Input placeholder="Sibalom" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="provinceAddress"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Province</FormLabel>
                      <FormControl>
                        <Input placeholder="Antique" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div>
              <div className="flex w-full items-start gap-2">
                <FormField
                  control={form.control}
                  name="birthDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date of birth</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <div className="p-2">
                            <Select
                              onValueChange={(value) =>
                                field.onChange(
                                  new Date(
                                    field.value
                                      ? field.value.setFullYear(Number(value))
                                      : new Date().setFullYear(Number(value)),
                                  ),
                                )
                              }
                              defaultValue={
                                field.value?.getFullYear().toString() ??
                                new Date().getFullYear().toString()
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select a sex" />
                              </SelectTrigger>
                              <SelectContent>
                                {Array.from(
                                  {
                                    length:
                                      addYears(new Date(), 1).getFullYear() -
                                      1900,
                                  },
                                  (_, i) => 1900 + i,
                                ).map((year) => (
                                  <SelectItem key={year} value={String(year)}>
                                    {year}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <Calendar
                            mode="single"
                            month={field.value}
                            onMonthChange={field.onChange}
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="birthPlace"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Birth Place</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Barangay, Municipality, Province"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sex"
                  render={({ field }) => (
                    <FormItem className="min-w-56">
                      <FormLabel>Sex</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a sex" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="civilStatus"
                  render={({ field }) => (
                    <FormItem className="min-w-56">
                      <FormLabel>Civil Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a civil status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="single">Single</SelectItem>
                          <SelectItem value="married">Married</SelectItem>
                          <SelectItem value="widowed">Widowed</SelectItem>
                          <SelectItem value="separated">Separated</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </section>
    </main>
  );
}
