import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function DramaCardSkeleton() {
  return (
    <>
      {Array.from({ length: 24 }).map((_, index) => (
        <div key={index} className="block w-full">
          <div className="relative aspect-[2/3] w-full overflow-hidden rounded-md border border-none bg-background/50 shadow">
            <Skeleton className="absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-2 left-2 right-2">
              <Skeleton className="h-4 w-3/4 md:h-5" />
              <Skeleton className="mt-1 h-4 w-1/2 md:h-5" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
