
import type {  IMovieTvTypes as ITvTypes } from "@/types";
import { format } from "date-fns";
import { ImageIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function TvShowsCard({ data }: { data: ITvTypes  }) {



  return (
    <Link href={`/tv-shows/${data.id}`}>
      <div className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-md border border-none bg-background/50 shadow">
        {data.backdrop_path ? (
          <>
            <img
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              src={`https://sup-proxy.zephex0-f6c.workers.dev/api-content?url=https://image.tmdb.org/t/p/original${data.backdrop_path}`}
              alt={data.title || data.name}
              sizes="100%"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-2 left-2 right-4 text-white">
              <h2 className="font-bold md:text-xl">
                {data.title || data.name}
              </h2>
              {data.release_date && (
                <p className="text-xs opacity-80">
                  {format(new Date(data.release_date), "PPP")}
                </p>
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
