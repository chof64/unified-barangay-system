"use client"

import React, { useEffect } from "react"
import { useParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { type z } from "zod"

import { api } from "~/trpc/react"
import { cardInformationSchema } from "~/schema/residentIdentity"

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

export default function CardInformation() {
  const params = useParams<{ id: string; profileId: string }>()

  const getCardInformation = api.residentIdentity.getCardInformation.useQuery(
    {
      id: params.id,
    },
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retryOnMount: false,
    }
  )

  const upsertCardInformation =
    api.residentIdentity.upsertCardInformation.useMutation({
      onSuccess: () => {
        toast.success("Card Information Updated Successfully", {
          description:
            "The card information of the resident has been updated successfully.",
        })
      },
      onError: (error) => {
        toast.error("Failed to Update Card Information", {
          description: `An error occurred while updating the card information of the resident. (${error.message})`,
        })
      },
    })

  const form = useForm<z.infer<typeof cardInformationSchema>>({
    resolver: zodResolver(cardInformationSchema),
    defaultValues: {
      id: params.id,
      profileId: params.profileId,
      cardType: "",
      cardNumber: "",
    },
  })

  useEffect(() => {
    if (getCardInformation.data?.cardType) {
      form.setValue("cardType", getCardInformation.data.cardType)
    }
    if (getCardInformation.data?.cardNumber) {
      form.setValue("cardNumber", getCardInformation.data.cardNumber)
    }
  }, [form, getCardInformation.data])

  return (
    <TwoColumn
      className="pt-16"
      left={
        <div className="two-column-heading">
          <h2>Card Information</h2>
          <p>
            Please provide complete information about the Identification Card to
            be added in the system. Please keep these information accurate.
          </p>
        </div>
      }
      right={
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) =>
              upsertCardInformation.mutate(data)
            )}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="cardType"
              disabled={getCardInformation.isFetching}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Type</FormLabel>
                  <FormControl>
                    {/* // TODO: convert to drop down menu */}
                    <Input placeholder="Card Type" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cardNumber"
              disabled={getCardInformation.isFetching}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Card Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={getCardInformation.isFetching} type="submit">
              Submit
            </Button>
          </form>
        </Form>
      }
    />
  )
}
