import { getCurrentUser } from "@/server/auth";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import SignOutButton from "../sign-out-button";
import { UserRound } from "lucide-react";
export default async function AvaterMenu() {
  const user = await getCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-7 w-7 cursor-pointer">
          <AvatarImage src={user?.image ?? ""} alt="@shadcn" />
          <AvatarFallback><UserRound className=" w-5 h-5"  /></AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          {/* <DropdownMenuItem asChild>
            <Link href="/watchlist">Watchlist</Link>
          </DropdownMenuItem> */}
          {/* <DropdownMenuItem asChild>
            <Link href="/history">History</Link>
          </DropdownMenuItem> */}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <a target="_blank" href="https://github.com/Shashivadan/zenstream">
            GitHub
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a
            target="_blank"
            href="https://github.com/Shashivadan/zenstream/issues/new?assignees=&labels=&projects=&template=feature_request.md&title="
          >
            Suggest Feature
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a
            target="_blank"
            href="https://github.com/Shashivadan/zenstream/issues/new?assignees=&labels=&projects=&template=bug_report.md&title="
          >
            Report a bug
          </a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <SignOutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
