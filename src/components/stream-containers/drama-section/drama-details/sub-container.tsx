import React from 'react'

import type { IDetailedDrama } from "@/types";

import { Calendar, LayoutGridIcon, Play, VideoOff } from "lucide-react";
import { Badge } from "@/components/ui/badge";


export default function SubContainer({ data }: { data: IDetailedDrama }) {
  return (
    <div className="h-fit rounded-lg bg-zinc-300 p-5 dark:border-zinc-800 dark:bg-zinc-900/50 md:w-full">
      <div className="">
        <div className="mb-3 grid grid-cols-2 gap-4">
          <div className="">
            <div className="flex items-center text-sm text-zinc-400">
              <Calendar className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Released Year
            </div>
            <p className="mt-1 text-sm font-bold">{data.releaseDate}</p>
          </div>
          <div>
            {data.airsOn && (
              <div>
                <div className="flex items-center text-sm text-zinc-400">
                  <Play className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                  On Air
                </div>
                <p className="mt-1 text-sm font-bold">{data.airsOn}</p>
              </div>
            )}
          </div>

          <div>
            <div className="flex items-center text-sm text-zinc-400">
              <Calendar className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Status
            </div>
            <p className="mt-1 text-sm font-bold">{data.status}</p>
          </div>
          {data.contentRating && (
            <div>
              <div className="flex items-center text-sm text-zinc-400">
                <VideoOff className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Content
                Rating
              </div>
              <p className="mt-1 text-sm font-bold">{data.contentRating}</p>
            </div>
          )}
        </div>
        <div>
          <div className="flex items-center text-sm text-zinc-400">
            <LayoutGridIcon className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Gernes
          </div>
          <div className="mt-2 flex flex-wrap gap-2 text-sm font-bold">
            {data.genres.map((genre) => (
              <Badge
                key={genre}
                className="rounded-sm border-none bg-zinc-900"
                variant={"outline"}
              >
                {genre}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
