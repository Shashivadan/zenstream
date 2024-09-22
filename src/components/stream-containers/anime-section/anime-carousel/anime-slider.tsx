

import React from "react";

import type { AnimeDataResponse, } from "@/types";
import CarouselSlider from "./carousel-slider";
import { fetchPopularAnime } from "@/ data-access/animeApis/anilist-api";

export default async function AnimeSlider() {

  const data: AnimeDataResponse = await fetchPopularAnime(1, 20);

  if (!data) {
    return <div>None Found</div>;
  }

  return <CarouselSlider data={data} />;
}
