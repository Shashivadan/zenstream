"use server";

import { getCurrentUser } from "@/server/auth";
import { db } from "@/server/db";
import { revalidatePath } from "next/cache";
export async function deleteAccount() {
  const user = await getCurrentUser();
  if (!user) {
    return;
  }
  revalidatePath("/profile");
  try {
    await db.user.delete({
      where: {
        id: user.id,
      },
    });
    return true;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete account");
  }
}
