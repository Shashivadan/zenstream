import React from "react";

import { fetchEpisodeSources } from "@/data-access";
import '@vidstack/react/player/styles/base.css';
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { Card } from "@/components/ui/card";
import EpisodesList from "@/components/stream-containers/anime-section/anime-details/episodes-list";


export default async function page({
  params,
}: {
  params: { id: string; episodeid: string };
}) {
  const { id, episodeid } = params;

  const data = await fetchEpisodeSources(episodeid);
  const videoSrc = data.sources.find((source) => source.quality === "default")?.url
  return (
    <div className="grid gap-3 md:grid-cols-6">
      <div className="md:col-span-4">
        <MediaPlayer src={videoSrc} autoplay={true}>
          <MediaProvider />
          <DefaultVideoLayout icons={defaultLayoutIcons} />
        </MediaPlayer>
      </div>
      <Card className=" md:col-span-2 w-full border shadow-2xl dark:border-none dark:shadow-none">
        <EpisodesList id={id} style="list" />
      </Card>
    </div>
  );
}
