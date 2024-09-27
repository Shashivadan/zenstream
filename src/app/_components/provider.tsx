"use client";

import { ThemeProvider } from "@/components/landing-page/theme-provider";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import React from "react";


// added for caching data for 5 minutes in react query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});
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
