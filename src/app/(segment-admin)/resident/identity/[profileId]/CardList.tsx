"use client"

import { useParams, useRouter } from "next/navigation"
import { MoreHorizontal } from "lucide-react"

import { api } from "~/trpc/react"

import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"

export default function CardList() {
  const params = useParams<{ profileId: string }>()
  const router = useRouter()

  const getAllIdentityCards = api.residentIdentity.getAllIdentityCards.useQuery(
    {
      profileId: params.profileId,
    }
  )

  return (
    <section className="mt-16">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID Type</TableHead>
            <TableHead>ID Number</TableHead>
            {/* <TableHead>Verified</TableHead> */}
            <TableHead>
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {getAllIdentityCards.data?.map((identityCard) => (
            <TableRow
              className="cursor-pointer"
              key={identityCard.id}
              onClick={() =>
                router.push(
                  `/resident/identity/${params.profileId}/${identityCard.id}`
                )
              }
            >
              <TableCell>{identityCard.cardType}</TableCell>
              <TableCell>{identityCard.cardNumber}</TableCell>
              {/* <TableCell>{resident.middleName}</TableCell> */}
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
                        router.push(
                          `/resident/identity/${params.profileId}/${identityCard.id}`
                        )
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
          <TableRow>
            <TableCell
              className="h-16 cursor-pointer"
              align="center"
              colSpan={4}
              onClick={() =>
                router.push(`/resident/identity/${params.profileId}/add`)
              }
            >
              Add a new Identity Card
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  )
}
