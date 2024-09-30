"use client";

import { fetchNowPlayingMovies } from "@/data-access";
import React from "react";
import MoviesCard from "./movies-card";
import { useQuery } from "@tanstack/react-query";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { IMovieTvTypes as IMovieTypes } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { LoadingSkeleton } from "@/components/stream-containers/shared-media-component/skeleton-loader";

export default function NowPlayingMovies() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["get-now-playing-movies"],
    queryFn: async () => await fetchNowPlayingMovies(),
  });

  if (isError) {
    return null;
  }

  return (
    <Carousel
      opts={{
        align: "start",
        dragFree: true,
      }}
      className=""
    >
      <CarouselContent className="">
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <>
            {data?.results.map((item: IMovieTypes) => (
              <CarouselItem
                key={item.id}
                className="basis-2/3 sm:basis-1/3 lg:basis-1/4"
              >
                <div className="p-1">
                  <MoviesCard data={item} />
                </div>
              </CarouselItem>
            ))}
          </>
        )}
      </CarouselContent>
    </Carousel>
  );
}
