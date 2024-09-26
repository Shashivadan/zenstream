"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { IDramaResult } from "@/types";
import Autoplay from "embla-carousel-autoplay";
import DramaCarouselCard from "./drama-carousel-card";


export default function DramaCarouselSlider({
  data,
  route,
}: {
  data: IDramaResult[];
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
          {data.map((item: IDramaResult) => (
            <CarouselItem key={item.id}>
              <DramaCarouselCard route={route} show={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
