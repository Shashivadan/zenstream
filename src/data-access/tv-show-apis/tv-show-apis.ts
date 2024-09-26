"use server";

import {  tvURL } from "../api-contents";
import type {
  IMovieTVResponseType as TvShowResponseType,
  IMovieTvTypes as ITvShowTypes,
  IDetailedTVShow,
} from "@/types/index";


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

export async function fetchTvShowInfoById(id: string): Promise<IDetailedTVShow> {
  const url = new URL(tvURL.tvInfo(id));

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 }, // 7 days
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as IDetailedTVShow;

    return data;
  } catch (error) {
    console.error("Failed to fetch TV carousel data:", error);
    throw error;
  }
}