import { getCurrentUser } from "@/server/auth";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import DeleteAccount from "./delete-account";

export default async function Avater() {
  const user = await getCurrentUser();
  return (
    <div>
      <div className="mb-5 md:mb-10">
        <h1 className="text-2xl font-semibold">Profile</h1>
        <div className="text-sm">Manage your account Here</div>
      </div>
      <div className="flex flex-col gap-5 md:gap-5">
        <div className="flex items-center gap-5 rounded-lg bg-zinc-900/50 p-3 md:gap-10 md:p-6">
          <Avatar className="h-28 w-28">
            <AvatarImage
              src={user?.image ?? ""}
              alt={user?.name ?? "profile"}
            />
            <AvatarFallback>{user?.name}</AvatarFallback>
          </Avatar>
          <div>
            <div>
              <h1 className="text-2xl font-semibold md:text-4xl">
                {user?.name}
              </h1>
              <div className="text-sm">{user?.email}</div>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-red-700 bg-zinc-900/50">
          <div className="p-3 md:p-6">
            <div className="mb-4 text-2xl font-semibold">Delete my account</div>
            <div className="text-sm">
              This action will permanently remove all your posts, data, and
              personal information associated with your account. This action is
              irreversible and cannot be undone.
            </div>
          </div>
          <div className="bg-red-900/60 px-6 p-2">
          <Button className="" asChild variant="outline">
          <DeleteAccount/>
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
