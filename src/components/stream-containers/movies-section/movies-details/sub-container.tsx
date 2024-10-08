import type { IMovieInfoType } from "@/types";
import React from "react";
import { Calendar, CircleDollarSign,  LayoutGridIcon,  Star, Timer } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { formatCurrency } from "@/lib/format-currency";

export default function SubContainer({ data }: { data: IMovieInfoType }) {
  return (
    <div className="h-fit p-5 md:w-full">
      <div className="">
        <div className="mb-3 grid grid-cols-2 gap-4">
          <div className="dark:text-zinc-400">
            <div className="flex items-center text-sm">
              <Calendar className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Released On
            </div>
            {data.release_date && (
              <>
                <p className="mt-1 text-sm font-bold">
                  {format(new Date(data.release_date), "PPP", {})}
                </p>
              </>
            )}
          </div>
          <div>
            <div className="flex items-center text-sm ">
              <Timer className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
              duration
            </div>
            <p className="mt-1 text-sm font-bold">
              {Math.floor(data.runtime / 60)}h {data.runtime % 60}m
            </p>
          </div>
          <div>
            <div className="flex items-center text-sm ">
              <Star className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
              Rating
            </div>
            <p className="mt-1 text-sm font-bold">
              {Math.round(data.vote_average * 10) / 10}
            </p>
          </div>

          <div className=" dark:text-zinc-400">
            <div className="flex items-center text-sm ">
              <Calendar className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Status
            </div>
            <div>
              <p className="mt-1 text-sm font-bold">{data.status}</p>
            </div>
          </div>
          <div>
            <div className="flex items-center text-sm ">
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

          {data.budget > 0 && (
            <div>
              <div className="flex items-center text-sm dark:text-zinc-400">
                <CircleDollarSign className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                Budget
              </div>
              <p className="mt-1 text-sm font-bold">
                {formatCurrency(data.budget)}
              </p>
            </div>
          )}
        </div>
        <div>
          <div className="flex items-center text-sm dark:text-zinc-400">
            <LayoutGridIcon className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Gernes
          </div>
          <div className="mt-2 flex flex-wrap gap-2 text-sm font-bold">
            {data.genres.map((genre) => (
              <Badge
                key={genre.id}
                className="rounded-sm  dark:bg-zinc-900 dark:text-zinc-300"
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
