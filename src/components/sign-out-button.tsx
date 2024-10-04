"use client";



import React from 'react';
import { signOut } from 'next-auth/react';
import { Button } from './ui/button';

const SignOutButton = () => {

  return (
    <Button
      variant="outline"
      size="sm"
      className=' w-full'
      onClick={() => signOut({ callbackUrl: "/", redirect: true })}
    >
      Log out

    </Button>
  );
};

export default SignOutButton;