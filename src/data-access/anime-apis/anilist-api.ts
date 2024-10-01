"use server";

import type { AnimeDataResponse, IAnimeSearchResults, IEpisodeSource } from "@/types";
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
): Promise<IAnimeInfo | null  > {
  const url = new URL(aniListURL.animeInfo(id));
  url.searchParams.append("provider", provider);

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 }, // 1 day
    });

    if (!response.ok) {
      return null
    }

    const data = (await response.json()) as IAnimeInfo;
    return data;
  } catch (error) {
    console.error("Failed to fetch trending anime data:", error);
    throw error;
  }
}

export async function fetchEpisodeSources(
  episodeId: string,
): Promise<IEpisodeSource | null> {
  const url = new URL(aniListURL.episodeSources(episodeId));
  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 }, // 1 day
    });
    if (!response.ok) {
     return null
    }
    const data = (await response.json()) as IEpisodeSource;
    return data;
  } catch (error) {
    console.error("Failed to fetch trending anime data:", error);
    throw error;
  }
}

export async function fetchSearchAnime(search: string): Promise<IAnimeSearchResults> {
  const url = new URL(aniListURL.searchAnime(search));
  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 }, // 1 day
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json()) as IAnimeSearchResults;
    return data;
  } catch (error) {
    console.error("Failed to fetch trending anime data:", error);
    throw error;
  }
}