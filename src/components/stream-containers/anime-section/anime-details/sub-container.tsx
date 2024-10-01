import { MediaStatus, type IAnimeInfo } from "@/types";
import React from "react";
import { Calendar, LayoutGridIcon , Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const statusBadges: {
  [key in MediaStatus]: { text: string; color: string; textcolor: string };
} = {
  [MediaStatus.ONGOING]: {
    text: "Ongoing",
    color: "bg-blue-600",
    textcolor: "text-blue-500",
  },
  [MediaStatus.COMPLETED]: {
    text: "Completed",
    color: "bg-green-600",
    textcolor: "text-green-500",
  },
  [MediaStatus.HIATUS]: {
    text: "Hiatus",
    color: "bg-yellow-600",
    textcolor: "text-yellow-500",
  },
  [MediaStatus.CANCELLED]: {
    text: "Cancelled",
    color: "bg-red-600",
    textcolor: "text-red-500",
  },
  [MediaStatus.NOT_YET_AIRED]: {
    text: "Not yet aired",
    color: "bg-gray-600",
    textcolor: "text-gray-500",
  },
  [MediaStatus.UNKNOWN]: {
    text: "Unknown",
    color: "bg-gray-600",
    textcolor: "text-gray-500",
  },
};

export default function SubContainer({ data }: { data: IAnimeInfo }) {
  const status = data.status
  return (
    <div className="h-fit rounded-lg p-5 shadow-xl dark:border-zinc-800 dark:bg-zinc-900/50 md:w-full">
      <div className="">
        <div className="mb-3 grid grid-cols-2 gap-4 dark:text-zinc-400">
          <div className="">
            <div className="flex items-center text-sm">
              <Calendar className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Released Year
            </div>
            <p className="mt-1 text-sm font-bold">{data.releaseDate}</p>
          </div>
          <div>
            {data.nextAiringEpisode && (
              <div>
                <div className="flex items-center text-sm">
                  <Play className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                  Next Episode
                </div>
                <p className="mt-1 text-sm font-bold">
                  {new Date(
                    data.nextAiringEpisode.airingTime * 1000,
                  ).toLocaleDateString()}
                </p>
              </div>
            )}
          </div>

          <div className="dark:text-zinc-400">
            <div className="flex items-center text-sm">
              <Calendar className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Status
            </div>
            <div>
              {status in statusBadges && (
                <Badge
                  variant={"outline"}
                  className={`mt-1 rounded-sm ${statusBadges[status].color} border border-none`}
                >
                  {statusBadges[status].text}
                </Badge>
              )}
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
                key={genre}
                className="rounded-sm dark:bg-zinc-900"
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
