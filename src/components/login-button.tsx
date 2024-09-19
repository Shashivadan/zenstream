"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { Loader2Icon, LogInIcon } from "lucide-react";
import { motion } from "framer-motion";
export default function LoginButton() {
  const [loading, setLoading] = React.useState(false);
  const path = useSearchParams()?.get("redirect") ?? "/";
  return (
    <div>
      <motion.div whileHover={{ y: -3  , color: "black"}} className="group relative">
        <Button
          disabled={loading}
          onClick={async () => {
            setLoading(true);
            await signIn("google", { callbackUrl: path, redirect: false });
            setLoading(false);
          }}
          className="isolate aspect-video w-96 rounded bg-purple-700 shadow-lg  ring-black/5 hover:bg-white/10 dark:bg-purple-600 dark:ring-white/10 dark:text-white text-black"
        >
          {loading ? (
            <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <LogInIcon className="mr-2 h-4 w-4" />
          )}
          Sign in with Google
        </Button>
      </motion.div>
    </div>
  );
}
