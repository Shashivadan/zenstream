import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { CarouselItem } from "@/components/ui/carousel";

export default function AnimeSkeletonLoader() {
  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => (
        <CarouselItem
          key={index}
          className="basis-2/3 sm:basis-1/3 lg:basis-1/6"
        >
          <div className="border border-none">
            <div className="relative flex aspect-video h-[300px] w-full items-center justify-center overflow-hidden rounded-md border border-none bg-background/50 shadow">
              <Skeleton className="h-full w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-2 left-2 right-4 space-y-2">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          </div>
        </CarouselItem>
      ))}
    </>
  );
}
