"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchMovieRecommendationById } from "@/data-access";

import type {IRecommendedMovie}from "@/types/index"

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
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
      <Card className="relative mx-auto aspect-[16/9] w-full max-w-md overflow-hidden border dark:border-zinc-950">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <CardContent className="absolute bottom-0 left-0 p-4 text-white">
          <h2 className="mb-1 text-2xl font-bold">{movie.title}</h2>
          <p className="text-sm opacity-80">
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
