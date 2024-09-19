import LoginButton from "@/components/login-button";
import { getCurrentUser } from "@/server/auth";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export const dynamic = "force-static";

export default async function LoginPage() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center rounded-lg p-6">
      <h2 className="mb-6 text-center text-2xl font-bold dark:text-white">
        Welcome to ZenStream
      </h2>
      <LoginButton />
      <p className="mt-4 text-center text-sm dark:text-gray-400">
        By signing in, you agree to ZenStream&apos;s Terms of Service and
        Privacy Policy.
      </p>
    </div>
  );
}
