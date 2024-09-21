"use client";

import { ThemeProvider } from "@/components/landing-page/theme-provider";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import React from "react";

const queryClient = new QueryClient();
export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
