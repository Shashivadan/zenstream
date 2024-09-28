"use client";

import { useQuery } from "@tanstack/react-query";
import type {  IAnimeInfo } from "@/types";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AnimeCard from "./anime-card";
import { fetchTrendingAnime } from "@/data-access/index";

async function getTrendingAnime() {
 try {
   const data = await fetchTrendingAnime(1, 20);
   return data;
 } catch (error) {
  console.log("error" , error);
 }
}

export default function AnimeTrending() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-trending-anime"],
    queryFn: getTrendingAnime,
  });


  if (isError){
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
          <CarouselItem
            key={item.id}
            className="basis-2/3 sm:basis-1/3 lg:basis-1/6"
          >
            <div className="p-1">
              <AnimeCard anime={item} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
