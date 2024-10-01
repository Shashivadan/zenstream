"use client";

import { useState } from "react";
import {
  AlertCircle,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  MailIcon,
  TriangleAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface GlobalErrorProps {
  title?: string;
  message: string;
  technicalDetails?: string;
  onRetry?: () => void;
}

export default function GlobalError(
  {
    title = "Oops! Something went wrong",
    message,
    technicalDetails,
    onRetry,
  }: GlobalErrorProps = {
    message: "An unexpected error occurred. Please try again.",
  },
) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <html>
      <body>
        <div className="flex min-h-screen items-center justify-center bg-purple-50 p-4 dark:bg-zinc-900">
          <div className="w-full max-w-2xl rounded-lg bg-white px-8 py-10 shadow-xl dark:bg-zinc-800/50">
            <div className="flex flex-col items-center text-center">
              <AlertCircle className="mb-4 h-12 w-12 text-purple-600" />
              <h1 className="mb-2 text-3xl font-bold text-purple-800">
                {title}
              </h1>
              <p className="mb-6 max-w-md text-purple-600">{message}</p>
              <div className="mb-8 flex flex-wrap justify-center gap-4">
                {onRetry && (
                  <Button
                    onClick={onRetry}
                    className="focus:shadow-outline flex items-center rounded bg-purple-600 px-4 py-2 font-bold text-white transition duration-150 ease-in-out hover:bg-purple-700 focus:outline-none"
                  >
                    <RefreshCw className="mr-2 h-4 w-4" /> Try Again
                  </Button>
                )}
                <Button
                  onClick={() =>
                    (window.location.href = "mailto:shashivadan99@gmail.com")
                  }
                  className="focus:shadow-outline flex items-center rounded bg-purple-100 px-4 py-2 font-bold text-purple-700 transition duration-150 ease-in-out hover:bg-purple-200 focus:outline-none"
                >
                  <MailIcon className="mr-2 h-4 w-4" /> Contact Support
                </Button>
              </div>
              {technicalDetails && (
                <div className="w-full max-w-md">
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex w-full items-center justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-700 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50"
                  >
                    <span>Technical Details</span>
                    {showDetails ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                  {showDetails && (
                    <div className="mt-2 rounded-lg bg-purple-50 p-4">
                      <pre className="whitespace-pre-wrap text-sm text-purple-800">
                        {technicalDetails}
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

function ErrorIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 900 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="rgba(224, 231, 255, .2)" d="M0 0h900v600H0z" />
      <circle cx="450.609" cy="300" r="251.279" fill="url(#a)" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M597.848 289.5 525.42 217.02l72.428-72.48 24.146 24.161-48.282 48.319 48.282 48.319-24.146 24.161zm-295.696 0 72.428-72.48-72.428-72.48-24.147 24.161 48.282 48.319-48.282 48.319 24.147 24.161z"
        fill="#fff"
      />
      <circle cx="450" cy="300" r="64" fill="#6366f1" />
      <path
        d="M450 282.667v34.666"
        stroke="#fff"
        stroke-width="14"
        stroke-linecap="round"
      />
      <circle cx="450" cy="360" r="8" fill="#fff" />
      <defs>
        <radialGradient
          id="a"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 75.304 375.304) scale(251.279)"
        >
          <stop stop-color="#7c3aed" />
          <stop offset="1" stop-color="#3730a3" stop-opacity=".01" />
        </radialGradient>
      </defs>
    </svg>
  );
}
