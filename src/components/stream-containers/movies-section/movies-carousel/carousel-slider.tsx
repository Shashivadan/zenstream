"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { IMovieTypes } from "@/types";
import Autoplay from "embla-carousel-autoplay";
import MovieCarouselCard from "./movie-carousel-card";

export default function CarouselSlider({ data }: { data: IMovieTypes[] }) {

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
          {data.map((item: IMovieTypes) => (
            <CarouselItem key={item.id}>
              <MovieCarouselCard route="movies" show={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
