import { IMovieTypes } from '@/types';
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
            {show.title || show.name}
          </div>
          {/* <div className="opacity-50">
              {show.genres?.name?.join(",") || "Comedy"}{" "}
              {" • " + (show.release_date || show.first_air_date).split("-")[0]}
            </div> */}

          {/* {show.genres?.map((genre: { id: number; name: string }) => {
              return (
                <Badge
                  key={genre.id}
                  variant="outline"
                  className="whitespace-nowrap"
                >
                  {genre.name}
                </Badge>
              );
            })} */}
        </div>
      </div>
    </div>
  );
}
