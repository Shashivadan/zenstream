import { CarouselItem } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
export const LoadingSkeleton = () => (
  <>
    {[...Array(Number(4))].map((_, index) => (
      <CarouselItem key={index} className="basis-2/3 sm:basis-1/3 lg:basis-1/4">
        <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg border border-none bg-background/50 shadow">
          <Skeleton className="h-full w-full" />
          <div className="absolute bottom-2 left-2 right-4 space-y-2">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </CarouselItem>
    ))}
  </>
);
