import { redirect } from "next/navigation";
import { type NextRequest } from "next/server";
import { customAlphabet } from "nanoid";

import { db } from "~/server/db";

export async function GET(_request: NextRequest) {
  const nanoid = customAlphabet(
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    8
  );

  const transactionId = nanoid(8);

  const responseDb = await db.transactionDocument.create({
    data: {
      transactionId,
      status: "CREATED",
    },
  });

  return redirect(`/request/${responseDb.id}?transactionId=${transactionId}`);
}
