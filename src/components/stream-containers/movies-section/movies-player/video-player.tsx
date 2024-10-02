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
    <div className="w-screen-2xl grid gap-3 md:grid-cols-6">
      <iframe
        src={movieSrc[selectedServer](id)}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="col-span-4 aspect-[1.85/1] rounded-lg"
      ></iframe>
      <div className="col-span-2 rounded-lg shadow-xl dark:bg-zinc-900/50 p-4">
        <h3 className="mb-2 text-lg font-semibold">Select Server</h3>
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
        <div className="mt-3 flex flex-col gap-2">
          <Button asChild className="font-semibold">
            <a href={movieSrc.vidSrcVip(id)} target="_blank">
              Download
            </a>
          </Button>
          <div>
            {isLoading && <MovieDetailsSkeleton />}
            {isError && <p>Error</p>}
            {data && <SubContainer data={data} />}
          </div>
        </div>
      </div>
    </div>
  );
}
