"use server";

import { API_KEY, PROXY, tvURL } from "../api-contents";
import type {
  IMovieTVResponseType as TvShowResponseType,
  IMovieTvTypes as ITvShowTypes,
} from "@/types/index";

const BASE_URL = "https://api.themoviedb.org/3";
const TRENDING_TV_ENDPOINT = "/trending/tv/day";

//api.themoviedb.org/3/trending/movie/day

export async function fetchTvCarousalData(): Promise<ITvShowTypes[]> {
  const url = new URL(tvURL.popular);

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 }, // 7 days
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as TvShowResponseType;
    return data.results;
  } catch (error) {
    console.error("Failed to fetch TV carousel data:", error);
    throw error;
  }
}

export async function fetchPopularTvShows(): Promise<ITvShowTypes[]> {
  const url = new URL(`${PROXY}${BASE_URL}/tv/popular?api_key=${API_KEY}`);

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 }, // 7 days
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as TvShowResponseType;
    return data.results;
  } catch (error) {
    console.error("Failed to fetch TV carousel data:", error);
    throw error;
  }
}

export async function fetchAiringTodayTvShows(): Promise<ITvShowTypes[]> {
  const url = new URL(tvURL.airingToday);

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 }, // 7 days
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as TvShowResponseType;
    return data.results;
  } catch (error) {
    console.error("Failed to fetch TV carousel data:", error);
    throw error;
  }
}
export async function fetchOnTheAirTvShows(): Promise<ITvShowTypes[]> {
  const url = new URL(tvURL.onTheAir);

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 }, // 7 days
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as TvShowResponseType;
    return data.results;
  } catch (error) {
    console.error("Failed to fetch TV carousel data:", error);
    throw error;
  }
}

export async function fetchTopRatedTvShows(): Promise<ITvShowTypes[]> {
  const url = new URL(tvURL.topRated);

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 }, // 7 days
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as TvShowResponseType;
    return data.results;
  } catch (error) {
    console.error("Failed to fetch TV carousel data:", error);
    throw error;
  }
}