import { type IMovieInfoType } from "@/types";
import React from "react";
import MovieCover from "./movie-cover";

export default function MovieDetails({ data }: { data: IMovieInfoType }) {
  return (
    <div>
      <MovieCover data={data} />
    </div>
  );
}

{
  /* <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-zinc-900/20 dark:text-gray-100">
  <div className="relative h-[50vh] w-full">
    <img
      src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
      alt=""
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50" />
  </div>
  <div className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="overflow-hidden rounded-lg bg-white shadow-xl backdrop-blur-sm dark:bg-zinc-900/30">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-full w-full object-cover md:max-w-[300px]"
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title}
          />
        </div>
        <div className="w-full p-8">
          <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500 dark:text-indigo-400">
            {data.genres.map((genre) => genre.name).join(" • ")}
          </div>
          <h1 className="mt-1 text-4xl font-bold leading-tight text-gray-900 dark:text-white">
            {data.title}
          </h1>
          <p className="mt-2 italic text-gray-500 dark:text-gray-400">
            {data.tagline}
          </p>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            {data.overview}
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <Calendar className="mr-2 h-5 w-5" />
              <span>{new Date(data.release_date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <Clock className="mr-2 h-5 w-5" />
              <span>{data.runtime} minutes</span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <Star className="mr-2 h-5 w-5 text-yellow-400" />
              <span>
                {data.vote_average.toFixed(1)} ({data.vote_count} votes)
              </span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <DollarSign className="mr-2 h-5 w-5" />
              <span>Budget: ${data.budget.toLocaleString()}</span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <Film className="mr-2 h-5 w-5" />
              <span>Revenue: ${data.revenue.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>; */
}
