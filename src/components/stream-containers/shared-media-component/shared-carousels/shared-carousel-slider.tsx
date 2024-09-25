"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { IMovieTvTypes } from "@/types";
import Autoplay from "embla-carousel-autoplay";
import SharedCarouselCard from "./shared-carousel-card";
// import MovieCarouselCard from "./movie-carousel-card";

export default function ShardCarouselSlider({
  data,
  route,
}: {
  data: IMovieTvTypes[];
  route: "movies" | "tv-shows" | "drama";
}) {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="mx-auto flex w-full">
          {data.map((item: IMovieTvTypes) => (
            <CarouselItem key={item.id}>
              <SharedCarouselCard route={route} show={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
