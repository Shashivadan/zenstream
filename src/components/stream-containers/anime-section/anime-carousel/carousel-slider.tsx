"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { ISearch } from "@consumet/extensions/dist/models/types";
import AnimeCarouselCard from "./anime-carousel-card";
import type { AnimeDataResponse, IAnimeInfo } from "@/types";
import Autoplay from "embla-carousel-autoplay";

export default function CarouselSlider({
  data,
}: {
  data: AnimeDataResponse | ISearch<IAnimeInfo>;
}) {


  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="mx-auto flex w-full">
          {data.results?.map((item: IAnimeInfo) => (
            <CarouselItem key={item.id}>
              {" "}
              <AnimeCarouselCard show={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
