import type { IDetailedTVShow } from "@/types";
import React from "react";
import { Calendar,   LayoutGridIcon,  Star, Timer } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";


export default function SubContainer({ data }: { data: IDetailedTVShow }) {
  return (
    <div className="h-fit rounded-lg shadow-lg p-5 dark:border-zinc-800       dark:bg-zinc-900/50 md:w-full">
      <div className="">
        <div className="mb-3 grid grid-cols-2 gap-4">
          <div className="">
            <div className="flex items-center text-sm dark:text-zinc-400">
              <Calendar className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Released On
            </div>
            <p className="mt-1 text-sm font-bold">
              {format(new Date(data.first_air_date), "PPP", {})}
            </p>
          </div>
          <div>
            <div className="flex items-center text-sm dark:text-zinc-400">
              <Timer className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
              Episode Duration
            </div>
            <p className="mt-1 text-sm font-bold">
              {Number(data.episode_run_time) % 60}m

            </p>
          </div>
          <div>
            <div className="flex items-center text-sm dark:text-zinc-400">
              <Star className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
              Rating
            </div>
            <p className="mt-1 text-sm font-bold">
              {Math.round(data.vote_average * 10) / 10}
            </p>
          </div>

          <div>
            <div className="flex items-center text-sm dark:text-zinc-400">
              <Calendar className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Status
            </div>
            <div>
              <p className="mt-1 text-sm font-bold">{data.status}</p>
            </div>
          </div>
          <div>
            <div className="flex items-center text-sm dark:text-zinc-400">
              <Calendar className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> languages
            </div>
            <div>
              <p className="mt-1 text-ellipsis text-sm font-bold">
                {data.spoken_languages
                  .map((lang) => lang.english_name)
                  .join(", ")}
              </p>
            </div>
          </div>


        </div>
        <div>
          <div className="flex items-center text-sm dark:text-zinc-400">
            <LayoutGridIcon className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Gernes
          </div>
          <div className="mt-2 flex flex-wrap gap-2 text-sm font-bold">
            {data.genres.map((genre) => (
              <Badge
                key={genre.id}
                className="rounded-sm border-none bg-zinc-900 text-zinc-300"
                variant={"outline"}
              >
                {genre.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
