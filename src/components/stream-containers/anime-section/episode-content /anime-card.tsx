import React from "react";
import type { IAnimeInfo } from "@/types";
import type { ITitle } from "@consumet/extensions/dist/models";
import { Card, CardContent } from "@/components/ui/card";
export default function AnimeCard({ anime }: { anime: IAnimeInfo }) {
  return (
    <div>
      <Card className="relative h-[300px]  overflow-hidden rounded-xl border-solid border-zinc-900">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent"></div>
        <img
          src={anime.image}
          alt="Anime cover"
          className="h-full w-full object-cover"
        />
        <CardContent className="absolute bottom-0 left-0 right-0 z-20 p-4">
          <h2 className="mb-1 text-base font-bold text-white ">
          {(anime.title as ITitle).english ?? (anime.title as ITitle).romaji}
          </h2>
          <p className="text-sm text-gray-300">{anime.releaseDate ?? "2024"}, {anime.genres?.map((genre) => genre).join(", ")}</p>
        </CardContent>
      </Card>
    </div>
  );
}
