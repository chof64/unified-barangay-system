"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { MoreHorizontal } from "lucide-react"
import { useForm } from "react-hook-form"
import { type z } from "zod"

import { api } from "~/trpc/react"
import { residentProfileSearchSchema } from "~/schema/residentProfile"

import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"

export default function ResidentTable() {
  const router = useRouter()

  const form = useForm<z.infer<typeof residentProfileSearchSchema>>({
    resolver: zodResolver(residentProfileSearchSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      middleName: "",
      extensionName: "",
    },
  })

  const getAllResidentProfile =
    api.residentProfile.getAllResidentProfile.useQuery({
      firstName: form.getValues().firstName,
      lastName: form.getValues().lastName,
      middleName: form.getValues().middleName,
      extensionName: form.getValues().extensionName,
    })

  return (
    <section className="mt-16">
      <div className="mb-8">
        <div className="flex gap-16">
          <Form {...form}>
            <form className="flex w-full gap-4">
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
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
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Extension" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                onClick={() => getAllResidentProfile.refetch()}
              >
                Search
              </Button>
              <Button variant={"ghost"} onClick={() => form.reset()}>
                Clear
              </Button>
            </form>
          </Form>
          <Button variant={"outline"} asChild>
            <Link href={`/resident/profile/new`}>New Resident</Link>
          </Button>
        </div>
        <p className="typography-muted mt-2">
          Search for a resident profile by entering any combination of last
          name, first name, or middle name. You can also search for a partial
          name.
        </p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Last Name</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>Middle Name</TableHead>
            <TableHead>Extension</TableHead>
            <TableHead>
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {getAllResidentProfile.data?.map((resident) => (
            <TableRow
              className="cursor-pointer"
              key={resident.id}
              onClick={() => router.push(`/resident/profile/${resident.id}`)}
            >
              <TableCell>{resident.lastName}</TableCell>
              <TableCell>{resident.firstName}</TableCell>
              <TableCell>{resident.middleName}</TableCell>
              <TableCell>
                {resident.extensionName === "N/A" ? (
                  <span className="text-neutral-500">
                    {resident.extensionName}
                  </span>
                ) : (
                  resident.extensionName
                )}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                      onClick={() =>
                        router.push(`/resident/profile/${resident.id}`)
                      }
                    >
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  )
}
