"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { fetchMovieInfoById } from "@/data-access/movies-apis/movies-api";
import SubContainer from "../movies-details/sub-container";
import { movieSrc } from "@/lib/movies-stream-urls";
import MovieDetailsSkeleton from "../movies-details/movie-details-skeleton";

export default function VideoPlayer({ id }: { id: string }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["movie-info-id", id],
    queryFn: async () => await fetchMovieInfoById(id),
  });

  const [selectedServer, setSelectedServer] =
    useState<keyof typeof movieSrc>("vidsrcPro");

  const handleServerChange = (value: string) => {
    setSelectedServer(value as keyof typeof movieSrc);
  };

  return (
    <div className="">
      <div className="grid gap-3 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <iframe
              src={movieSrc[selectedServer](id)}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full object-cover"
            ></iframe>
          </div>
          <div className="mt-4 text-xl font-semibold dark:bg-zinc-900/50 p-3 rounded-lg shadow-xl">{data?.title}</div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-xl dark:bg-zinc-900/50">
          <h3 className="mb-4 text-lg font-semibold">Select Server</h3>
          <Select
            onValueChange={handleServerChange}
            defaultValue={selectedServer}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a server" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(movieSrc).map((server) => (
                <SelectItem key={server} value={server}>
                  {server}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="mt-6 flex flex-col gap-4">
            <Button asChild className="w-full font-semibold">
              <a href={movieSrc.vidSrcVip(id)} target="_blank">
                Download
              </a>
            </Button>
            <div>
              {isLoading && <MovieDetailsSkeleton />}
              {isError && <p>Error loading movie details</p>}
              {data && <SubContainer data={data} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
