"use client";

import { ThemeProvider } from "@/components/landing-page/theme-provider";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import NextTopLoader from "nextjs-toploader";
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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
            color="#bf37ff"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
          />
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
