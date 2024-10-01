import type { IMovieTvTypes } from "@/types";
import { format } from "date-fns";
import React from "react";

export default function ShardMobileViewCarousel({ show }: { show: IMovieTvTypes }) {
  return (
    <div className="relative flex h-[600px] md:hidden">
      <img
        alt=""
        className="inset-0 h-full w-full rounded-t-xl object-cover"
        src={`https://image.tmdb.org/t/p/original/${show.poster_path}`}
      />
      <div className="absolute bottom-0 top-1/2 flex w-full flex-col justify-between text-white  border-white bg-gradient-to-t from-black to-transparent">
        <div></div>
        <div className="flex flex-col items-center mb-10">
          <div className="flex w-9/12 items-center justify-center text-pretty text-center text-3xl font-bold">
            {show.title || show.name}
          </div>
          <div className="flex w-9/12 items-center justify-center text-xs text-zinc-300">
            {
              format(new Date(show.release_date || show.first_air_date), "PPP")}
          </div>
          <div className="w-1/2 overflow-hidden text-ellipsis whitespace-nowrap text-center text-xs normal-case opacity-50">
            {show.tagline || show.overview}
          </div>
        </div>
      </div>
    </div>
  );
}
