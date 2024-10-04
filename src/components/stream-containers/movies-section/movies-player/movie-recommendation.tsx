"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchMovieRecommendationById } from "@/data-access";

import type {IRecommendedMovie}from "@/types/index"
import { ImageIcon } from "lucide-react";

export default function MovieRecommendation({ id } : { id: string }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["movie-recommendation", id],
    queryFn: () => fetchMovieRecommendationById(id),
  });

  if (isError) return <div>Error loading recommendations</div>;

  const movieData = data?.results ?? [];

  return (
    <div>
      <h2 className="text-2xl font-bold">Recommendations</h2>
      <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isLoading
          ? Array.from({ length: 20 }, (_, index) => (
              <MovieSkeleton key={`skeleton-${index}`} />
            ))
          : movieData.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
      </div>
    </div>
  );
}

function MovieSkeleton() {
  return (
    <Card className="relative mx-auto aspect-[16/9] w-full max-w-md overflow-hidden border dark:border-zinc-950">
      <Skeleton className="absolute inset-0" />
      <CardContent className="absolute bottom-0 left-0 w-full p-4">
        <Skeleton className="mb-2 h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </CardContent>
    </Card>
  );
}

function MovieCard({ movie } : { movie: IRecommendedMovie }) {
  return (
    <Link href={`/movies/${movie.id}`}>
      <Card className="group relative mx-auto aspect-[16/9] w-full max-w-md overflow-hidden border dark:border-zinc-950">
        <div className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:scale-110">
          {movie.poster_path ? (
            <img
              className="h-full w-full object-cover"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              sizes="100%"
            />
          ) : (
            <div className="flex items-center justify-center">
              <ImageIcon size={50} className="text-muted" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        <CardContent className="absolute bottom-0 left-0 z-10 p-4 text-white">
          <h2 className="text-[12px] font-bold md:mb-1 md:text-2xl">
            {movie.title}
          </h2>
          <p className="text-[10px] opacity-80 md:text-sm">
            {new Date(movie.release_date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
