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
    <div className="">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <iframe
              src={tvShowsStreamUrls[selectedServer](id, seasonId, eposideId)}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full object-cover"
            ></iframe>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3 rounded-lg p-3 text-sm font-medium shadow-xl dark:bg-zinc-800/50 dark:text-zinc-200">
            <div className="rounded px-2 py-1 shadow-lg dark:bg-zinc-700/50">
              Season {seasonId}
            </div>
            <div className="rounded px-2 py-1 shadow-lg dark:bg-zinc-700/50">
              Episode {eposideId}
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-xl dark:bg-zinc-900/50">
          <h3 className="mb-4 text-lg font-semibold">Select Server</h3>

          <div className="mb-4 flex items-center rounded-lg bg-yellow-500/15 p-3 text-xs font-semibold text-yellow-500">
            <TriangleAlert className="mr-2 h-4 w-4 flex-shrink-0" />
            <span>
              Can&apos;t see the video? A quick server change might do the trick.
            </span>
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

          <div className="mt-6 flex flex-col gap-4">
            <Button asChild className="w-full font-semibold">
              <a
                href={tvShowsStreamUrls.vidSrcVip(id, seasonId, eposideId)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </Button>

            <div>
              {isLoading && <ShearedSubContainer />}
              {isError && (
                <p className="text-red-500">
                  Error loading TV show information
                </p>
              )}
              {data && <SubContainer data={data} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
