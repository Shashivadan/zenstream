import { type IMovieInfoType } from "@/types";
import React from "react";
import MovieCover from "./movie-cover";
import DescriptionSection from "@/components/stream-containers/shared-media-component/description";
import SubContainer from "./sub-container";
import Cast from "./cast";

export default function MovieDetails({ data }: { data: IMovieInfoType }) {


  return (
    <div>
      <div className="md:p-6">
        <MovieCover data={data} />

        <div className="grid gap-3 py-6 md:w-full md:grid-cols-3">
          <div className="flex flex-col gap-3 md:col-span-2">
            <DescriptionSection data={data.overview ?? "Nothing is here"} />
            <div className="md:hidden">
              <SubContainer data={data} />
            </div>
            {/* <EpisodesList id={data.id} /> */}
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
