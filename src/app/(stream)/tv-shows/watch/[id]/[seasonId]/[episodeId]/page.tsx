import { SeasonsEpisodes } from "@/components/stream-containers/tv-shows-section/seasons-episodes";
import TvShowRecommendations from "@/components/stream-containers/tv-shows-section/tv-shows-contents/tv-show-recommendations";
import TvShowsVideoPlayer from "@/components/stream-containers/tv-shows-section/tv-shows-video-player/tv-shows-video-player";
import React from "react";

export default function page({
  params,
}: {
  params: { id: string; episodeId: string; seasonId: string };
}) {
  const { id, episodeId, seasonId } = params;
  return (
    <div>
      <div>
        <TvShowsVideoPlayer id={id} eposideId={episodeId} seasonId={seasonId} />
      </div>
      <div className="mt-3 grid grid-cols-6 gap-3">
        <div className="col-span-6 rounded-lg bg-zinc-300 px-3 dark:bg-zinc-900/50">
          <SeasonsEpisodes id={id} />
        </div>
        <div className="col-span-6 rounded-lg ">
          <TvShowRecommendations id={id} />
        </div>
      </div>
    </div>
  );
}
