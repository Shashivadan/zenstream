"use client";

import { fetchPopularMovies } from "@/data-access";
import React from "react";
import MoviesCard from "./movies-card";
import { useQuery } from "@tanstack/react-query";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import type { IMovieTvTypes as IMovieTypes } from "@/types";








export default  function PopularMovies() {
  const { data  , isError , isLoading} = useQuery({
    queryKey: ["get-popular-movies"],
    queryFn: async () =>  await fetchPopularMovies(),
  })

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
        {data.map((item: IMovieTypes) => (
          <CarouselItem
            key={item.id}
            className="basis-2/3 sm:basis-1/3 lg:basis-1/4"
          >
            <div className="p-1">
              <MoviesCard  data={item} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
