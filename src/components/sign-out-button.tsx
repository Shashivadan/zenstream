"use client";



import React from 'react';
import { signOut } from 'next-auth/react';
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

const SignOutButton = () => {

  return (
    <DropdownMenuItem
      onClick={() => signOut({ callbackUrl: "/", redirect: true })}
    >
      Log out

    </DropdownMenuItem>
  );
};

export default SignOutButton;