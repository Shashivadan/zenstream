"use server";
import { env } from "@/env";
// import { getInfoURL, API_KEY, PROXY } from "../apiConstants";
import type { AnimeDataResponse } from "@/types";
import type { IAnimeInfo } from "@/types";

//https://api-consumet-org-rust.vercel.app/meta/anilist
const ANIME_URL = env.CONSUMET_API_ANILIST_URL;

export async function fetchTrendingAnime(
  page = 1,
  perPage = 10,
): Promise<AnimeDataResponse> {
  const url = new URL(`${ANIME_URL}/trending`);
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
  const url = new URL(`${ANIME_URL}/popular`);
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
  perPage = 10,
): Promise<AnimeDataResponse> {
  const url = new URL(`${ANIME_URL}/recent-episodes`);
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

export async function fetchAnilistInfoById(
  id: string,
  provider = "gogoanime",
): Promise<IAnimeInfo | string> {
  const url = new URL(`${ANIME_URL}/info/${id}`);
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
