import React from "react";
import {
  Calendar,
  Timer,
  Star,
  CircleDollarSign,
  LayoutGrid,
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

const MovieDetailsSkeleton = () => {
  return (
    <div className="h-fit p-5 md:w-full">
      <div className="">
        <div className="mb-3 grid grid-cols-2 gap-4">
          {[
            { icon: Calendar, label: "Released On" },
            { icon: Timer, label: "Duration" },
            { icon: Star, label: "Rating" },
            { icon: Calendar, label: "Status" },
            { icon: Calendar, label: "Languages" },
            { icon: CircleDollarSign, label: "Budget" },
          ].map((item, index) => (
            <div key={index} className="dark:text-zinc-400">
              <div className="flex items-center text-sm">
                <item.icon className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />{" "}
                {item.label}
              </div>
              <Skeleton className="mt-1 h-4 w-20" />
            </div>
          ))}
        </div>
        <div>
          <div className="flex items-center text-sm dark:text-zinc-400">
            <LayoutGrid className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Genres
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {[1, 2, 3].map((_, index) => (
              <Badge
                key={index}
                className="rounded-sm dark:bg-zinc-900 dark:text-zinc-300"
                variant="outline"
              >
                <Skeleton className="h-4 w-16" />
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsSkeleton;
