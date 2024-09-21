"use client";

import Gogoanime from "@consumet/extensions/dist/providers/anime/gogoanime";
import Anilist from "@consumet/extensions/dist/providers/meta/anilist";
import { useQuery } from "@tanstack/react-query";
import type { AnimeDataResponse, IAnimeInfo } from "@/types";
import React from "react";
import { type ISearch } from "@consumet/extensions/dist/models";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AnimeCard from "./anime-card";

async function getTrendingAnime() {
  const anilist = new Anilist(new Gogoanime());
  const data: AnimeDataResponse | ISearch<IAnimeInfo> =
    await anilist.fetchTrendingAnime(1, 20);
  return data;
}

export default function AnimeTrending() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-trending-anime"],
    queryFn: getTrendingAnime,
  });

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Carousel className="">
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
