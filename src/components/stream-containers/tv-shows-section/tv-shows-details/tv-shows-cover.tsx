import React from "react";
import type { IDetailedTVShow } from "@/types";
import { ImageIcon } from "lucide-react";

export default function TvShowCover({ data }: { data: IDetailedTVShow }) {
  return (
    <div className="rounded-3xl bg-black text-white">
      <div className="relative rounded-3xl">
        {data.backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
            alt={data.name ?? "my tv show"}
            className="h-[500px] w-full rounded-3xl object-cover object-center md:h-[700px]"
          />
        ) : (
          <>
            <ImageIcon className="h-6 w-6 text-zinc-900" />
          </>
        )}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/80 to-transparent">
          <div className="absolute bottom-4 left-4 flex w-full flex-col items-center text-center md:p-6">
            <h1 className="mb-2 font-bold md:text-3xl">{data.name}</h1>
            <p className="w-1/2 overflow-hidden text-ellipsis whitespace-nowrap text-xs normal-case opacity-50 md:text-center">
              {data.tagline ? data.tagline : data.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
