"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
   <div  className=" cursor-pointer hover:bg-zinc-700/50 rounded-md p-2" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
    {theme === "light" ? <SunIcon /> : <MoonIcon />}
   </div>
  );
}
