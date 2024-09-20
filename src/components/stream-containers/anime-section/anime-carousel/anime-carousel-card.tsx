"use client";

import React from "react";
import type { IAnimeInfo } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import Image from "next/image";
import { BsFillBadgeCcFill } from "react-icons/bs";
import {  Md18UpRating } from "react-icons/md";

export default function AnimeCarouselCard({ show }: { show: IAnimeInfo }) {
  return (
    <Card className="h-[600px] w-full border-solid dark:border-zinc-900 md:h-[400px]">
      <CardContent
        className="relative h-full w-full overflow-hidden rounded-md bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${show.image})` }}
      >
        <div className="inset-0 bg-black bg-opacity-65 backdrop-blur-md backdrop-filter md:absolute" />
        <div className="absolute inset-0">
          <div className="flex h-full flex-col md:flex-row">
            <Image
              alt={show.title.english as string}
              className="inset-x-3 inset-y-4 hidden overflow-hidden rounded-lg object-contain md:absolute md:block"
              src={show.image ?? ""}
              width={260}
              height={300}
            />
            <div className="z-10 flex flex-1 flex-col justify-end rounded-md p-3 md:ml-[280px] md:p-6">
              <div className="w-full rounded-lg bg-black/80 p-3 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
                <h2 className="mb-2 line-clamp-2 text-3xl font-bold text-white">
                  {show.title.english || show.title.romaji}
                </h2>
                <div className="mb-2 flex items-center gap-2 text-sm text-gray-300">
                  <p className="">{show.releaseDate}</p>
                  <div className="text-center gap-2 flex">
                    {show.hasSub && <BsFillBadgeCcFill />}
                    {show.isAdult && <Md18UpRating/>}
                  </div>
                </div>
                <p
                  className="mb-4 line-clamp-3 text-sm text-white"
                  dangerouslySetInnerHTML={{ __html: show.description ?? "" }}
                ></p>
                <Button className="w-fit bg-purple-600 text-white hover:bg-purple-700">
                  <Play className="mr-2 h-4 w-4" /> PLAY NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
