import { MediaStatus, type IAnimeInfo } from "@/types";
import React from "react";
import { Calendar, LayoutGridIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const statusBadges: {
  [key in MediaStatus]: { text: string; color: string; textcolor: string };
} = {
  [MediaStatus.ONGOING]: {
    text: "Ongoing",
    color: "blue",
    textcolor: "text-blue-500",
  },
  [MediaStatus.COMPLETED]: {
    text: "Completed",
    color: "green",
    textcolor: "text-green-500",
  },
  [MediaStatus.HIATUS]: {
    text: "Hiatus",
    color: "yellow",
    textcolor: "text-yellow-500",
  },
  // Add a default value for other MediaStatus values
  [MediaStatus.CANCELLED]: {
    text: "Cancelled",
    color: "red",
    textcolor: "text-red-500",
  },
  [MediaStatus.NOT_YET_AIRED]: {
    text: "Not yet aired",
    color: "gray",
    textcolor: "text-gray-500",
  },
  [MediaStatus.UNKNOWN]: {
    text: "Unknown",
    color: "gray",
    textcolor: "text-gray-500",
  },
};

export default function SubContainer({ data }: { data: IAnimeInfo }) {
  const status = data.status
  return (
    <div className="h-fit rounded-lg bg-zinc-300 p-5 dark:border-zinc-800 dark:bg-zinc-900/50 md:w-full">
      <div className="flex flex-col gap-4">
        <div>
          <div className="flex items-center text-sm text-zinc-400">
            <Calendar className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Released Year
          </div>
          <p className="mt-1 text-sm font-bold">{data.releaseDate}</p>
        </div>
        <div>
          <div className="flex items-center text-sm text-zinc-400">
            <Calendar className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Status
          </div>
          <div>
            {status in statusBadges && (
              <Badge
                variant={"outline"}
                className={`mt-1 rounded-sm bg-${statusBadges[status].color}-500 border-none text-${statusBadges[status].textcolor} dark:bg-${statusBadges[status].color}-700 dark:text-${statusBadges[status].textcolor}`}
              >
                {statusBadges[status].text}
              </Badge>
            )}
          </div>
        </div>
        <div>
          <div className="flex items-center text-sm text-zinc-400">
            <LayoutGridIcon className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Gernes
          </div>
          <div className="mt-2 flex flex-wrap gap-2 text-sm font-bold">
            {data.genres.map((genre) => (
              <Badge
                key={genre}
                className="rounded-sm bg-zinc-900"
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
