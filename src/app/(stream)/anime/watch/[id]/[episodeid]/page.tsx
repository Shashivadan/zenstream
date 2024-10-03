import React from "react";

import { fetchAnilistInfoById, fetchEpisodeSources } from "@/data-access";
import { Card } from "@/components/ui/card";
import EpisodesList from "@/components/stream-containers/anime-section/anime-details/episodes-list";
import VideoPlayer from "@/components/stream-containers/anime-section/anime-video-player/video-player";
import VideoMetadata from "@/components/stream-containers/anime-section/anime-video-player/video-metadata";
import { formatTitle } from "@/lib/format-title";


export default async function page({
  params,
}: {
  params: { id: string; episodeid: string };
}) {
  const { id, episodeid } = params;
  const data = await fetchEpisodeSources(episodeid);
  const animeData = await fetchAnilistInfoById(id);

  if(!data || !animeData) {
    return <div>None Found</div>;
  }

  const videoSrc = data.sources.find((source) => source.quality === "default")?.url
  return (
    <div>
      <div className="grid gap-3 md:grid-cols-6">
        <div className="flex flex-col gap-2 md:col-span-4">
          <VideoPlayer src={videoSrc ?? ""} />
          <h2 className="truncate text-ellipsis tracking-wide dark:bg-zinc-900/50 p-2 rounded-lg text-white md:text-xl">
            {formatTitle(episodeid)}
          </h2>
        </div>
        <Card className="w-full border shadow-2xl dark:border-none dark:shadow-none md:col-span-2">
          <EpisodesList id={id} style="list" />
        </Card>
      </div>
      <div className="mt-2">{data && <VideoMetadata data={animeData} />}</div>
    </div>
  );
}
