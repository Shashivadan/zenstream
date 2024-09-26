"use server";


import type { AnimeDataResponse } from "@/types";
import type { IAnimeInfo } from "@/types";
import { aniListURL } from "../api-contents";

//https://api-consumet-org-rust.vercel.app/meta/anilist


export async function fetchTrendingAnime(
  page = 1,
  perPage = 10,
): Promise<AnimeDataResponse> {
  const url = new URL(aniListURL.trending);
  url.searchParams.append("page", page.toString());
  url.searchParams.append("perPage", perPage.toString());

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 }, // 1 day
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json()) as AnimeDataResponse;
    return data;
  } catch (error) {
    console.error("Failed to fetch trending anime data:", error);
    throw error;
  }
}

export async function fetchPopularAnime(
  page = 1,
  perPage = 10,
): Promise<AnimeDataResponse> {
  const url = new URL(aniListURL.popular);
  url.searchParams.append("page", page.toString());
  url.searchParams.append("perPage", perPage.toString());

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 }, // 1 day
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as AnimeDataResponse;
    return data;
  } catch (error) {
    console.error("Failed to fetch trending anime data:", error);
    throw error;
  }
}

export async function fetchRecentAnime(
  page = 1,
  type = 3,
): Promise<AnimeDataResponse> {
  const url = new URL(aniListURL.recentEpisodes);
  url.searchParams.append("page", page.toString());
  url.searchParams.append("type", type.toString());

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 }, // 1 day
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as AnimeDataResponse;
    return data;
  } catch (error) {
    console.error("Failed to fetch trending anime data:", error);
    throw error;
  }
}

export async function fetchAnilistInfoById(
  id: string,
  provider = "gogoanime",
): Promise<IAnimeInfo | string> {
  const url = new URL(aniListURL.animeInfo(id));
  url.searchParams.append("provider", provider);

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 }, // 1 day
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as IAnimeInfo;
    return data;
  } catch (error) {
    console.error("Failed to fetch trending anime data:", error);
    return (error as Error).message;
  }
}
