"use client";

import React from "react";

import { motion } from "framer-motion";

export default function layout({ children }: React.PropsWithChildren) {
  return (
    <div className="relative">
      <motion.div
        animate={{ rotate: [0, 360]  , borderRadius : 50 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="hidden md:block absolute left-[80%] top-[80%] -z-20 h-80 w-60 translate-x-[-50%] translate-y-[-50%] bg-gradient-to-r from-purple-800 to-purple-900 opacity-60 blur-[150px]"
      ></motion.div>
      <div className="mx-auto">{children}</div>
    </div>
  );
}
