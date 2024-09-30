"use client";

import {  fetchTopRatedMovies } from "@/data-access";
import React from "react";
import MoviesCard from "./movies-card";
import { useQuery } from "@tanstack/react-query";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { IMovieTvTypes as IMovieTypes } from "@/types";
import { LoadingSkeleton } from "@/components/stream-containers/shared-media-component/skeleton-loader";



export default function TopRatedMovies() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["get-top-rated-movies"],
    queryFn: async () =>  await fetchTopRatedMovies(),
  });


  if (isError) {
    return <div>Error</div>;
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
