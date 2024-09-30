"use client";

import { fetchTopRatedTvShows } from "@/data-access";
import React from "react";

import { useQuery } from "@tanstack/react-query";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { IMovieTvTypes as ITvTypes } from "@/types";
import TvShowsCard from "./tv-shows-card";
import { LoadingSkeleton } from "../../shared-media-component/skeleton-loader";

export default function TopRated() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["get-top-rated-tv-shows"],
    queryFn: async () => await fetchTopRatedTvShows(),
  });

  if (isError) {
    return null
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
        {isLoading ? <LoadingSkeleton/> : (
          <>
            {" "}
            {data?.results.map((item: ITvTypes) => (
              <CarouselItem
                key={item.id}
                className="basis-2/3 sm:basis-1/3 lg:basis-1/4"
              >
                <div className="p-1">
                  <TvShowsCard data={item} />
                </div>
              </CarouselItem>
            ))}
          </>
        )}
      </CarouselContent>
    </Carousel>
  );
}
