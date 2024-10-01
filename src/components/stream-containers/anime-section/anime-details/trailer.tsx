import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/audio.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import {
  MediaPlayer,
  MediaProvider,
} from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";

export default function Trailer({ src }: { src: string }) {


  return (
    <div className=" shadow-lg dark:bg-zinc-900/50 rounded-lg p-2">
      <div>
        <h1 className="md:text-4x font-mono text-2xl font-bold leading-tight tracking-tighter">
          Trailer
        </h1>
        <div className="mt-4" />
      </div>
      <div>
        <MediaPlayer className=" rounded-lg" autoPlay muted src={src}>
          <MediaProvider></MediaProvider>
          <DefaultVideoLayout icons={defaultLayoutIcons} />
        </MediaPlayer>
      </div>
    </div>
  );
}
