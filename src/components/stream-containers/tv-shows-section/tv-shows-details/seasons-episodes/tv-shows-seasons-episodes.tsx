"use client";

import { fetchTvShowSeasonsEpisodes } from "@/data-access";
import type { ITvShowSeasons } from "@/types";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default function TvShowSeasonsEpisodes({
  season,
  id,
}: {
  season: ITvShowSeasons;
  id: string;
}) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-episodes", id, season.season_number],
    queryFn: async () =>
      await fetchTvShowSeasonsEpisodes(id, season.season_number.toString()),
  });

  const skeletonCount = 13

  return (
    <div className="w-full">
      <div className="grid grid-cols-5 gap-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12">
        {isLoading &&
          Array.from({ length: skeletonCount }).map((_, index) => (
            <Skeleton
              key={index}
              className="aspect-square w-full rounded-lg bg-zinc-800"
            />
          ))}
        {data?.episodes.map((episode) => (
          <Link key={episode.id} href={`/tv-shows/watch/${id}/${episode.season_number}/${episode.episode_number}`}>
            <div key={episode.id} className="w-full">
              <div className="duration-50 flex aspect-square items-center justify-center rounded-lg bg-zinc-800 p-3 transition-all ease-linear hover:scale-105 hover:bg-purple-800 hover:shadow-lg hover:ease-linear">
                {episode.episode_number}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
