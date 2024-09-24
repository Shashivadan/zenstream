import React from "react";
import type { IAnimeInfo } from "@/types";

import Link from "next/link";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { encodeParam } from "@/lib/url-param-encoder";

export default function AnimeCard({ anime }: { anime: IAnimeInfo }) {
  return (
    <Link href={`/anime/${encodeParam(anime.id)}`} className="  border  border-none">
      <div className="relative flex aspect-video h-[300px] w-full items-center justify-center overflow-hidden rounded-md border border-none bg-background/50 shadow">
        {anime.image ? (
          <>
            <Image
              fill
              className="h-full w-full object-cover"
              src={anime.image}
              alt={anime.title.english ?? ""}
              sizes="100%"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-2 left-2 right-4 text-white">
              <h2 className="font-bold">
                {anime.title.english ?? anime.title.romaji}
              </h2>
              {anime.releaseDate && (
                <p className="text-sm opacity-80">{anime.releaseDate}</p>
              )}
            </div>
          </>
        ) : (
          <ImageIcon className="text-muted" />
        )}
      </div>
    </Link>
  );
}
