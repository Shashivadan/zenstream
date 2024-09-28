import React from "react";

import { fetchAnilistInfoById, fetchEpisodeSources } from "@/data-access";
import { Card } from "@/components/ui/card";
import EpisodesList from "@/components/stream-containers/anime-section/anime-details/episodes-list";
import VideoPlayer from "@/components/stream-containers/anime-section/anime-video-player/video-player";
import VideoMetadata from "@/components/stream-containers/anime-section/anime-video-player/video-metadata";


export default async function page({
  params,
}: {
  params: { id: string; episodeid: string };
}) {
  const { id, episodeid } = params;
  const data = await fetchEpisodeSources(episodeid);
  const animeData = await fetchAnilistInfoById(id);
  const videoSrc = data.sources.find((source) => source.quality === "default")?.url
  return (
    <div>
      <div className="grid gap-3 md:grid-cols-6">
        <div className="md:col-span-4">
          <VideoPlayer src={videoSrc ?? ""} />
        </div>
        <Card className="w-full border shadow-2xl dark:border-none dark:shadow-none md:col-span-2">
          <EpisodesList id={id} style="list" />
        </Card>
      </div>
      <div className=" mt-2 ">
        <VideoMetadata  data={animeData} />
      </div>
    </div>
  );
}
