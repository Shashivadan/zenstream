import React from "react";
import { MediaPlayer, MediaProvider } from "@vidstack/react";

import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

type VideoPlayerProps = {
  video: string | undefined;
} & Omit<React.ComponentPropsWithoutRef<typeof MediaPlayer>, "src">;

export default function VideoPlayer({ video, ...props }: VideoPlayerProps) {
  return (
    <MediaPlayer src={video} {...props}>
      <MediaProvider />
      {/* <DefaultVideoLayout icons={defaultLayoutIcons} /> */}
    </MediaPlayer>
  );
}
