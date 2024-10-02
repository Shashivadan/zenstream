"use client";
import React, { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-purple-900 p-4 text-white">
      <div className="w-full max-w-md space-y-8 text-center">
        <AlertTriangle className="mx-auto h-24 w-24 text-purple-300" />
        <h1 className="text-4xl font-bold text-purple-100">
          Oops! Something went wrong
        </h1>
        <p className="text-xl text-purple-200">
          We&apos;re sorry, but it seems there was an error while loading your
          content.
        </p>
        <div className="rounded-lg bg-purple-800 p-4 shadow-inner">
          <p className="mb-2 text-sm text-purple-300">Error details:</p>
          <p className="truncate font-mono text-sm text-purple-100">
            {error.message || "Unknown error"}
          </p>
        </div>
        <button
          onClick={() => reset()}
          className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-purple-100 px-8 py-3 text-base font-medium text-purple-900 transition duration-150 ease-in-out hover:bg-purple-200 md:px-10 md:py-4 md:text-lg"
        >
          <RefreshCw className="mr-2 h-5 w-5" />
          Try Again
        </button>
        <p className="mt-2 text-sm text-purple-400">
          If the problem persists, please contact our support team via X.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
