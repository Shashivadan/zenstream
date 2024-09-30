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
import { fetchRecentAnime } from "@/data-access/index";
import AnimeSkeletonLoader from "./anime-skeleton-loader";

async function getRecentAnime() {
  const data: AnimeDataResponse = await fetchRecentAnime(1, 20);
  return data;
}

export default function RecentAnime() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-recent-anime"],
    queryFn: getRecentAnime,
  });

  if (isError) {
    return null
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
        {isLoading ? (
         <AnimeSkeletonLoader/>
        ) : (
          <>
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
          </>
        )}
      </CarouselContent>
    </Carousel>
  );
}
