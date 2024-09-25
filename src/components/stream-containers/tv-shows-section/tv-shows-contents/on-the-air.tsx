"use client";

import { fetchOnTheAirTvShows } from "@/data-access";
import React from "react";
// import MoviesCard from "./movies-card";
import { useQuery } from "@tanstack/react-query";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { IMovieTvTypes as ITvTypes } from "@/types";
import TvShowsCard from "./tv-shows-card";

export default function OnTheAir() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["get-on-the-air-tv-shows"],
    queryFn: async () => await fetchOnTheAirTvShows(),
  });

  if (!data) {
    return <div>None Found</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
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
        {data.map((item: ITvTypes) => (
          <CarouselItem
            key={item.id}
            className="basis-2/3 sm:basis-1/3 lg:basis-1/4"
          >
            <div className="p-1">
              <TvShowsCard data={item} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
