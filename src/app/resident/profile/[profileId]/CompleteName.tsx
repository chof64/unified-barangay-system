"use client"

import React, { useEffect } from "react"
import { useParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoaderCircleIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { type z } from "zod"

import { api } from "~/trpc/react"
import { completeNameSchema } from "~/schema/residentProfile"

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

export default function CompleteName() {
  const params = useParams<{ profileId: string }>()

  const getCompleteName = api.residentProfile.getCompleteName.useQuery(
    {
      id: params.profileId,
    },
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retryOnMount: false,
    }
  )

  const upsertCompleteName = api.residentProfile.upsertCompleteName.useMutation(
    {
      onSuccess: () => {
        toast.success("Complete Name Updated Successfully", {
          description:
            "The complete name of the resident has been updated successfully.",
        })
      },
      onError: (error) => {
        toast.error("Failed to Update Complete Name", {
          description: `An error occurred while updating the complete name of the resident. (${error.message})`,
        })
      },
    }
  )

  const form = useForm<z.infer<typeof completeNameSchema>>({
    resolver: zodResolver(completeNameSchema),
    defaultValues: {
      profileId: params.profileId,
      firstName: "",
      lastName: "",
      middleName: "",
      extensionName: "",
    },
  })

  useEffect(() => {
    if (getCompleteName.data?.firstName) {
      form.setValue("firstName", getCompleteName.data.firstName)
    }
    if (getCompleteName.data?.lastName) {
      form.setValue("lastName", getCompleteName.data.lastName)
    }
    if (getCompleteName.data?.middleName) {
      form.setValue("middleName", getCompleteName.data.middleName)
    }
    if (getCompleteName.data?.extensionName) {
      form.setValue("extensionName", getCompleteName.data.extensionName)
    }
  }, [form, getCompleteName.data])

  return (
    <TwoColumn
      className="pt-16"
      left={
        <div className="two-column-heading">
          <h2>Complete Name</h2>
          <p>
            Complete name of the resident. Please make sure to include the full
            middle name and extension name of the resident.
          </p>
          <p>Leave the name extension field blank if not applicable.</p>
        </div>
      }
      right={
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) =>
              upsertCompleteName.mutate(data)
            )}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="firstName"
              disabled={getCompleteName.isFetching}
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
              disabled={getCompleteName.isFetching}
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
                disabled={getCompleteName.isFetching}
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
                disabled={getCompleteName.isFetching}
                render={({ field }) => (
                  <FormItem className="w-64">
                    <FormLabel>Extension</FormLabel>
                    <FormControl>
                      <Input placeholder="JR, I, II, III" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-center gap-4">
              <Button
                disabled={
                  getCompleteName.isFetching || upsertCompleteName.isPending
                }
                type="submit"
              >
                Submit
              </Button>
              {(getCompleteName.isFetching || upsertCompleteName.isPending) && (
                <p className="inline-flex items-center text-neutral-500">
                  <LoaderCircleIcon className="spin mr-1 h-4 w-4 animate-spin" />
                  Loading
                </p>
              )}
            </div>
          </form>
        </Form>
      }
    />
  )
}
