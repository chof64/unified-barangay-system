"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";

import { api } from "~/trpc/react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { Button, buttonVariants } from "~/components/ui/button";

export default function Danger() {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const deleteResident = api.resident.deleteResident.useMutation({
    onSuccess: () => {
      toast.info("Resident deleted successfully");
      router.push("/resident");
    },
    onError: (error) => {
      toast.error("Opps! Something went wrong.", {
        description: error.message,
      });
    },
  });

  return (
    <section className="my-16 border-t pt-16">
      <div className="flex flex-col gap-16 lg:flex-row lg:gap-8">
        <div className="lg:w-1/2">
          <div className="max-w-md">
            <h1 className="typography-h5 text-red-700">Danger!</h1>
            <p className="typography-small mt-3 text-red-500">
              Please be careful when interacting with this section. These
              actions can have irreversible effects.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="rounded-md border border-red-200 bg-red-100/60 p-6">
            <p className="typography-p font-medium">
              Delete this resident record permanently
            </p>
            <p className="typography-p">
              This action is irreversible and will delete all the data related
              to this resident, including their profile, transactions,
              registered IDs, and more.
            </p>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant={"destructive"} className="mt-6">
                  Delete Resident
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    the resident record
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    className={buttonVariants({
                      variant: "destructive",
                    })}
                    onClick={() => {
                      deleteResident.mutate({ id: params.id });
                    }}
                  >
                    Confirm
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </section>
  );
}
