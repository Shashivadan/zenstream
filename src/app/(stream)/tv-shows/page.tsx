import TvShowsCarousel from "@/components/stream-containers/tv-shows-section/tv-shows-carousel/tv-shows-carousel";
import AiringToday from "@/components/stream-containers/tv-shows-section/tv-shows-contents/airing-today";
import OnTheAir from "@/components/stream-containers/tv-shows-section/tv-shows-contents/on-the-air";
import PopularTvShows from "@/components/stream-containers/tv-shows-section/tv-shows-contents/popular-tv-shows";
import TopRated from "@/components/stream-containers/tv-shows-section/tv-shows-contents/top-rated";
import React from "react";


export const dynamic = "force-static";
export default async function page() {
  return (
    <section className="">
      <TvShowsCarousel />
      <div className="mt-2 p-4">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="md:text-4x font-mono text-2xl font-bold leading-tight tracking-tighter">
              Popular
            </h1>
            <div className="mt-4" />

            <PopularTvShows />
          </div>

          <div>
            <h1 className="md:text-4x font-mono text-2xl font-bold leading-tight tracking-tighter">
              On The Air
            </h1>
            <div className="mt-4" />
            <OnTheAir />
          </div>
          <div>
            <h1 className="md:text-4x font-mono text-2xl font-bold leading-tight tracking-tighter">
              Top Rated
            </h1>
            <div className="mt-4" />
            <TopRated />
          </div>
          <div>
            <h1 className="md:text-4x font-mono text-2xl font-bold leading-tight tracking-tighter">
              Airing Today
            </h1>
            <div className="mt-4" />
            <AiringToday />
          </div>
        </div>
      </div>
    </section>
  );
}
