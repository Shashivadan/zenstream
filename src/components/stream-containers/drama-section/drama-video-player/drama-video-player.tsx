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
import { formatTitle } from "@/lib/format-title";

export default async function DramaVideoPlayer({
  id,
  eposideId,
}: {
  id: string;
  eposideId: string;
}) {
  const data = await fetchDramaStreamingLinks(eposideId, id);

  if (!data) {
    return <div className="py-8 text-center">No streaming links found</div>;
  }

  return (
    <div className="">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <MediaPlayer
              autoPlay
              src={data?.sources[0]?.url}
              className="h-full w-full"
            >
              <MediaProvider />
              <DefaultVideoLayout icons={defaultLayoutIcons} />
            </MediaPlayer>
          </div>
          <div className="mt-4 text-lg dark:bg-zinc-900/50  p-3 rounded-lg shadow-xl font-semibold">
           {formatTitle(eposideId)}
          </div>
        </div>

        <Card className="h-full overflow-auto border p-4 shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:shadow-none">
          <h3 className="mb-4 text-xl font-semibold">Episodes</h3>
          <EpisodesList id={id} style="grid" />
        </Card>
      </div>
    </div>
  );
}
