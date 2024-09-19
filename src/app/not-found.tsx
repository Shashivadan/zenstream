import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Film, Tv } from "lucide-react";

export const dynamic = "force-static";

export default function NotFound() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-4 text-center"
      style={{ marginTop: "-4.5rem" }}
    >
      <div className="max-w-2xl space-y-6">
        <h1 className="text-6xl font-bold text-black dark:text-white">
          4<span className="text-purple-500">0</span>4
        </h1>
        <h2 className="text-3xl font-semibold text-black dark:text-white">
          Oops! This scene is missing
        </h2>
        <p className="text-xl dark:text-gray-400">
          Looks like this episode got lost in the stream. Don&apos;t worry,
          there are plenty more to watch!
        </p>
        <div className="flex justify-center space-x-4">
          <Film className="h-12 w-12 animate-bounce text-purple-500" />
          <Tv className="h-12 w-12 animate-bounce text-purple-500 delay-100" />
        </div>
        <div className="pt-6">
          <Link href="/" passHref>
            <Button className="transform rounded-full bg-purple-600 px-4 py-2 font-bold text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-purple-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
