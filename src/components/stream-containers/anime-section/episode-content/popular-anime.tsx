"use client";


import { useQuery } from "@tanstack/react-query";
import type { AnimeDataResponse, IAnimeInfo } from "@/types";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AnimeCard from "./anime-card";
import { fetchPopularAnime } from "@/ data-access/animeApis/anilist-api";

export async function getPopularAnime() {
  const data : AnimeDataResponse = await fetchPopularAnime(1, 20);
  return data;
}

export default function PopularAnime() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-popular-anime"],
    queryFn: getPopularAnime,
  });

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
        {data?.results.map((item: IAnimeInfo) => (
          <CarouselItem key={item.id} className="basis-2/3 md:basis-1/6">
            <div className="p-1">
              <AnimeCard anime={item} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
