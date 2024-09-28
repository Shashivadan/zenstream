"use client"
// import { useQuery } from "@tanstack/react-query";
// import { fetchAnilistInfoById } from "@/data-access";
import type { IAnimeInfo } from "@/types";
import DescriptionSection from "../../shared-media-component/description";
import Image from "next/image";
import {  Star } from "lucide-react";
import Link from "next/link";
import { encodeParam } from "@/lib/url-param-encoder";
export default function VideoMetadata({data} : {data: IAnimeInfo}) {


  return (
    <div className="grid gap-3 md:grid-cols-6">
      <div className="col-span-6">
        <DescriptionSection data={data.description} />
      </div>
      <div className="col-span-6 rounded-lg dark:bg-zinc-900/50">
        <div className="container mx-auto p-4">
          <h2 className="mb-4 text-2xl font-bold">Recommendations</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {data.recommendations.map((anime) => (
              <Link href={`/anime/${encodeParam(anime.id)}`} key={anime.id}>
                <div
                  key={anime.id}
                  className=" overflow-hidden rounded-lg bg-card shadow-md transition-transform hover:scale-105"
                >
                  <div className="relative h-48">
                    <img
                      src={anime.image}
                      alt={anime.title.english ?? anime.title.romaji ?? ""}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 line-clamp-2 text-sm font-semibold">
                      {anime.title.english ?? anime.title.romaji}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="mr-1 h-4 w-4 text-yellow-400" />
                        <span className="text-sm">{anime.rating / 10}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {anime.type} • {anime.episodes} eps
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
