import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Gogoanime from "@consumet/extensions/dist/providers/anime/gogoanime";
import Anilist from "@consumet/extensions/dist/providers/meta/anilist";
import type { ISearch } from "@consumet/extensions/dist/models";
import AnimeCarouselCard from "./anime-carousel-card";
import type { AnimeDataResponse, IAnimeInfo } from "@/types";
import Autoplay from "embla-carousel-autoplay";
import CarouselSlider from "./carousel-slider";

export default async function AnimeSlider() {
  const anilist = new Anilist(new Gogoanime());
  const data: AnimeDataResponse | ISearch<IAnimeInfo> =
    await anilist.fetchPopularAnime(1, 20);

  if (!data) {
    return <div>None Found</div>;
  }

  return <CarouselSlider data={data} />;
}
