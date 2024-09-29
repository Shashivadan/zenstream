import DramaContent from "@/components/stream-containers/drama-section/drama-content/drama-content";
import DramaVideoPlayer from "@/components/stream-containers/drama-section/drama-video-player/drama-video-player";
import { decodeParam } from "@/lib/url-param-encoder";
import React from "react";

export default async function page({
  params,
}: {
  params: { id: string; eposideId: string };
}) {
  const id = decodeParam(params.id);
  const eposideId = params.eposideId;
  return (
    <div>
      <div className="">
          <DramaVideoPlayer id={id} eposideId={eposideId} />
      </div>
      <div className="mt-2">
        <DramaContent />
      </div>
    </div>
  );
}
