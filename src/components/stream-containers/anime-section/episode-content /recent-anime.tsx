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

async function getRecentAnime() {
  const anilist = new Anilist(new Gogoanime());
  const anime: AnimeDataResponse | ISearch<IAnimeInfo> =
    await anilist.fetchRecentEpisodes( "gogoanime",1, 20);
  return anime;
}

export default function RecentAnime() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-recent-anime"],
    queryFn: getRecentAnime,
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
