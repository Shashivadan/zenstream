"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { Loader2Icon } from "lucide-react";
import { motion } from "framer-motion";
import { RainbowButton } from "./ui/rainbow-button";
import GoogleIcon from "public/icons/google-icon";
export default function LoginButton() {
  const [loading, setLoading] = React.useState(false);
  const path = useSearchParams()?.get("redirect") ?? "/";
  return (
    <div>
      <motion.div whileHover={{ y: -3 }} className="group relative">
        <RainbowButton
          onClick={async () => {
            setLoading(true);
            await signIn("google", { callbackUrl: path, redirect: false });
            setLoading(false);
          }}
          disabled={loading}
        >
          {" "}
          {loading ? (
            <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <div className=" mr-2">
              <GoogleIcon />
            </div>
          )}
          Sign in with Google
        </RainbowButton>
        {/* <Button
          disabled={loading}

          className="isolate aspect-video w-1/2 rounded bg-purple-700 shadow-lg  ring-black/5 hover:bg-white/10 dark:bg-purple-600 dark:ring-white/10 dark:text-white text-black"
        >

        </Button> */}
      </motion.div>
    </div>
  );
}
