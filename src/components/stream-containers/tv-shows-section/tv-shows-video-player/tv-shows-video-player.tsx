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

import SubContainer from "../tv-shows-details/sub-container";
import { tvShowsStreamUrls } from "@/lib/tv-shows-stream-urls";
import { fetchTvShowInfoById } from "@/data-access";
import { TriangleAlert } from "lucide-react";
import ShearedSubContainer from "../../shared-media-component/shared-sub-container";

export default function TvShowsVideoPlayer({
  id,
  seasonId,
  eposideId,
}: {
  id: string;
  eposideId: string;
  seasonId: string;
}) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["fetch-tv-show-info-by-id", id],
    queryFn: async () => await fetchTvShowInfoById(id),
  });

  const [selectedServer, setSelectedServer] =
    useState<keyof typeof tvShowsStreamUrls>("movieeTv");

  const handleServerChange = (value: string) => {
    setSelectedServer(value as keyof typeof tvShowsStreamUrls);
  };
  return (
    <div className="w-screen-2xl gap-3 md:grid md:grid-cols-6">
      <div className="col-span-4">
        <iframe
          src={tvShowsStreamUrls[selectedServer](id, seasonId, eposideId)}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="col-span-4 aspect-[1.85/1] rounded-lg"
        ></iframe>
      </div>
      <div className="col-span-1 mt-3 rounded-lg p-4 dark:bg-zinc-900/50 md:col-span-2 md:mt-0">
        <h3 className="mb-2 text-lg font-semibold">Select Server</h3>

        <div className="mb-3 flex rounded-lg bg-yellow-500/15 p-2 text-xs font-semibold text-yellow-500">
          <TriangleAlert className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Can&apos;t
          see the video? A quick server change might do the trick.
        </div>
        <Select
          onValueChange={handleServerChange}
          defaultValue={selectedServer}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a server" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(tvShowsStreamUrls).map((server) => (
              <SelectItem key={server} value={server}>
                {server}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="mt-3 flex flex-col gap-2">
          <Button asChild className="font-semibold">
            <a
              href={tvShowsStreamUrls.vidSrcVip(id, seasonId, eposideId)}
              target="_blank"
            >
              Download
            </a>
          </Button>
          <div className="flex items-center gap-3 rounded-lg p-3 text-sm font-medium dark:text-zinc-200 shadow-xl dark:bg-zinc-900/50">
            <div className="rounded   px-2 py-1 shadow-lg dark:bg-zinc-800/50">
              Season {seasonId}
            </div>
            <div className="rounded dark:bg-zinc-800/50 px-2 py-1 shadow-lg">
              Episode {eposideId}
            </div>
          </div>

          <div>
            {isLoading && <ShearedSubContainer/>}
            {isError && <p>Error</p>}
            {data && <SubContainer data={data} />}
          </div>
        </div>
      </div>
    </div>
  );
}
