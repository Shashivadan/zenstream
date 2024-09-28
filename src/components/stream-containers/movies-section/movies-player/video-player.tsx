"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const movieSrc = {
  vidsrcMe: (id: string): string => `https://vidsrc.xyz/embed/movie/${id}`,
  vidsrcRip: (id: string): string => `https://vidsrc.rip/embed/movie/${id}`,
  autoembedCc: (id: string): string =>
    `https://player.autoembed.cc/embed/movie/${id}`,
  sdspXyz: (id: string): string => `https://v1.sdsp.xyz/embed/movie/${id}`,
  smashystreamCom: (id: string): string =>
    `https://player.smashy.stream/movie/${id}`,
  superembedStream: (id: string): string =>
    `https://multiembed.mov/directstream.php?video_id=${id}`,
  embed2Cc: (id: string): string => `https://www.2embed.cc/embed/${id}`,
  vidlinkPro: (id: string): string => `https://vidlink.pro/movie/${id}`,
  vidsrcPro: (id: string): string => `https://vidsrc.pro/embed/movie/${id}`,
  vidsrcIcu: (id: string): string => `https://vidsrc.icu/embed/movie/${id}`,
  vidsrcCc: (id: string): string => `https://vidsrc.cc/v2/embed/movie/${id}`,
  moviesapiClub: (id: string): string => `https://moviesapi.club/movie/${id}`,
  movieeTv: (id: string): string => `https://moviee.tv/embed/movie/${id}`,
  gomoTo: (id: string): string => `https://gomo.to/movie/${id}`,
  vidbingeCom: (id: string): string =>
    `https://www.vidbinge.com/media/tmdb-movie-${id}`,
  vidSrcVip: (id: string): string => `https://dl.vidsrc.vip/movie/${id}`,
};

export default function VideoPlayer({ id }: { id: string }) {
  const [selectedServer, setSelectedServer] =
    useState<keyof typeof movieSrc>("vidsrcPro");

  const handleServerChange = (value: string) => {
    setSelectedServer(value as keyof typeof movieSrc);
  };

  return (
    <div className="w-screen-2xl grid gap-3 md:grid-cols-6">
      <iframe
        src={movieSrc[selectedServer](id)}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="col-span-4 aspect-[1.85/1] rounded-lg"
      ></iframe>
      <div className="col-span-2 rounded-lg bg-zinc-900/50 p-4">
        <h3 className="mb-2 text-lg font-semibold">Select Server</h3>
        <Select
          onValueChange={handleServerChange}
          defaultValue={selectedServer}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a server" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(movieSrc).map((server) => (
              <SelectItem key={server} value={server}>
                {server}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="mt-3 flex flex-col gap-2">
            <Button asChild className="font-semibold">
          <a href={movieSrc.vidSrcVip(id)} target="_blank">
              Download
          </a>
              </Button>
        </div>
      </div>
    </div>
  );
}