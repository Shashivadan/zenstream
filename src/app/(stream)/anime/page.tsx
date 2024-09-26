import AnimeSlider from "@/components/stream-containers/anime-section/anime-carousel/anime-slider";
import AnimeTrending from "@/components/stream-containers/anime-section/episode-content/anime-trending";
import PopularAnime from "@/components/stream-containers/anime-section/episode-content/popular-anime";
import RecentAnime from "@/components/stream-containers/anime-section/episode-content/recent-anime";
import React from "react";


export const dynamic = "force-static";


export default function page() {
  return (
    <div>
      <AnimeSlider />
      <div className="p-4">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="md:text-4x font-mono text-2xl font-bold leading-tight tracking-tighter">
              Trending Anime
            </h1>
            <div className="mt-4" />
            <AnimeTrending />
          </div>
          <div>
            <h1 className="md:text-4x font-mono text-2xl font-bold leading-tight tracking-tighter">
              Popular Anime
            </h1>
            <div className="mt-4" />
            <PopularAnime />
          </div>
          <div>
            <h1 className="md:text-4x font-mono text-2xl font-bold leading-tight tracking-tighter">
              Recent Anime
            </h1>
            <div className="mt-4" />
            <RecentAnime />
          </div>
        </div>
      </div>
    </div>
  );
}
