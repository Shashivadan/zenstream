import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/audio.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import {
  MediaPlayer,
  MediaProvider,
  type MediaProviderAdapter,
  isYouTubeProvider,
} from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";

export default function Trailer({ src }: { src: string }) {
  function onProviderChange(provider: MediaProviderAdapter | null) {
    if (isYouTubeProvider(provider)) {
      provider.cookies = true;
    }
  }
  return (
    <MediaPlayer
      onProviderChange={onProviderChange}
      src={src}
      viewType="video"
      streamType="on-demand"
      logLevel="warn"
      crossOrigin
      playsInline
      title="Sprite Fight"
    >
      <MediaProvider></MediaProvider>
      <DefaultVideoLayout
        icons={defaultLayoutIcons}
      />
    </MediaPlayer>
  );
}
