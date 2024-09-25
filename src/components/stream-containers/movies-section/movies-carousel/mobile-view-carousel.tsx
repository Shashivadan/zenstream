import type { IMovieTvTypes as IMovieTypes } from '@/types';
import { format } from 'date-fns';
import React from 'react'

export default function MobileViewCarousel({ show }: { show: IMovieTypes
 }) {
  return (
    <div className="relative flex h-[600px] md:hidden">
      <img
        alt=""
        className="inset-0 h-full w-full rounded-t-xl object-cover"
        src={`https://image.tmdb.org/t/p/original/${show.poster_path}`}
      />
      <div className="absolute bottom-0 top-1/2 flex w-full flex-col justify-between border-white bg-gradient-to-t from-background to-transparent">
        <div></div>
        <div className="flex flex-col items-center">
          <div className="flex w-9/12 items-center justify-center text-pretty text-center text-3xl font-bold">
            {show.title}
          </div>
          <div className="flex w-9/12 items-center justify-center text-xs text-zinc-300">
            {show.release_date
              ? format(new Date(show.release_date), "PPP")
              : "Unknown"}
          </div>
          <div className="overflow-hidden text-ellipsis whitespace-nowrap text-xs normal-case opacity-50 w-1/2 text-center">
            {show.overview}
          </div>
        </div>
      </div>
    </div>
  );
}
