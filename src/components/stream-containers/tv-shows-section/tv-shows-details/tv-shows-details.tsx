import type { IDetailedTVShow } from "@/types";
import React from "react";
import TvShowCover from "./tv-shows-cover";
import DescriptionSection from "@/components/stream-containers/shared-media-component/description";
import SubContainer from "./sub-container";
import Cast from "./cast";
import { SeasonsEpisodes } from "@/components/stream-containers/tv-shows-section/seasons-episodes/index";

export default function TvShowDetails({ data }: { data: IDetailedTVShow }) {
  return (
    <div>
      <div className="md:p-6">
        <TvShowCover data={data} />
        <div className="grid gap-3 py-6 md:w-full md:grid-cols-3">
          <div className="flex flex-col gap-3 md:col-span-2">
            <DescriptionSection data={data.overview ?? "Nothing is here"} />
            <div className="md:hidden">
              <SubContainer data={data} />
            </div>
            <div className="rounded-lg bg-zinc-900/50 px-3">
              <SeasonsEpisodes id={data.id} />
            </div>
            <Cast id={data.id} />
            {/* <Characters data={data.characters ?? []} /> */}
          </div>
          <div className="hidden md:block">
            <SubContainer data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
