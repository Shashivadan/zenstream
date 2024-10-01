import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/audio.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";

import { fetchDramaStreamingLinks } from "@/data-access";
import { Card } from "@/components/ui/card";
import EpisodesList from "../drama-details/episodes-list";

export default async function DramaVideoPlayer({
  id,
  eposideId,
}: {
  id: string;
  eposideId: string;
}) {
  const data = await fetchDramaStreamingLinks(eposideId , id);

  if (!data) {
    return <div>None Found</div>;
  }

  return (
    <div className="grid gap-3 md:grid-cols-6">
      <MediaPlayer
        autoPlay
        src={data?.sources[0]?.url}
        className="col-span-4 aspect-video"
      >
        <MediaProvider></MediaProvider>
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>

      <Card className="w-full border p-3 shadow-2xl dark:border-none dark:shadow-none md:col-span-2">
        <EpisodesList id={id} style="grid" />
      </Card>
    </div>
  );
}
