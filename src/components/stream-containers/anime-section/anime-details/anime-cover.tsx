"use client";

import React from "react";
import {  Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { IAnimeInfo } from "@/types";


export default function AnimeCover({ data }: { data: IAnimeInfo }) {
  const anime = data;



  return (
    <div className="group relative h-[500px] overflow-hidden rounded-xl sm:h-64 md:h-[300px]">
      <img
        src={anime.cover}
        alt={anime.title.english}
        className="hidden h-full w-full object-cover object-center brightness-50 md:block"
      />
      <img
        src={anime.image}
        alt={anime.title.english}
        className="h-full w-full object-cover object-center brightness-50 md:hidden rounded-md"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <Button
          variant="secondary"
          size="icon"
          className="h-12 w-12 rounded-full bg-primary/80 text-primary-foreground opacity-0 transition-all duration-300 hover:bg-primary/90 group-hover:opacity-100 sm:h-16 sm:w-16"
        >
          <Play className="h-6 w-6 sm:h-8 sm:w-8" />
          <span className="sr-only">Play</span>
        </Button>
      </div>
      <div className="absolute bottom-4 left-4 flex items-end">
        <img
          src={anime.image}
          alt={anime.title.english}
          width={190}
          height={180}
          className="hidden rounded-lg object-cover shadow-lg md:block"
        />
        <div className="ml-0 text-white sm:ml-4">
          <h1 className="text-xl font-bold sm:text-3xl">
            {anime.title.english ?? anime.title.romaji}
          </h1>
          <p className="text-sm sm:text-lg">{anime.title.native}</p>
        </div>
      </div>
    </div>
  );
}
