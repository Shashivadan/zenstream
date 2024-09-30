"use server";

import { tvURL } from "../api-contents";
import type {
  IMovieTVResponseType as TvShowResponseType,
  IMovieTvTypes as ITvShowTypes,
  IDetailedTVShow,
  ITVShowSeasonEpisodes,
  ITvShowRecommendations,
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

export async function fetchPopularTvShows(): Promise<TvShowResponseType> {
  const url = new URL(tvURL.popular);

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 }, // 7 days
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json()) ;
    return data;
  } catch (error) {
    console.error("Failed to fetch TV carousel data:", error);
    throw error;
  }
}

export async function fetchAiringTodayTvShows(): Promise<TvShowResponseType> {
  const url = new URL(tvURL.airingToday);

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 }, // 7 days
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as TvShowResponseType;
    return data;
  } catch (error) {
    console.error("Failed to fetch TV carousel data:", error);
    throw error;
  }
}
export async function fetchOnTheAirTvShows(): Promise<TvShowResponseType> {
  const url = new URL(tvURL.onTheAir);

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 }, // 7 days
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as TvShowResponseType;
    return data
  } catch (error) {
    console.error("Failed to fetchOnTheAirTvShows data:", error);
    throw error;
  }
}

export async function fetchTopRatedTvShows(): Promise<TvShowResponseType> {
  const url = new URL(tvURL.topRated);

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 }, // 7 days
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) ;
    return data
  } catch (error) {
    console.error("Failed to fetchTopRatedTvShows data:", error);
    throw error;
  }
}

export async function fetchTvShowInfoById(
  id: string,
): Promise<IDetailedTVShow> {
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
    console.error("Failed to         fetchTvShowInfoById data:", error);
    throw error;
  }
}

export async function fetchTvShowSeasonsEpisodes(
  id: string,
  seasonNumber: string,
): Promise<ITVShowSeasonEpisodes> {
  const url = new URL(tvURL.fetchSeasonEpisode(id, seasonNumber));

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 }, // 7 days
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as ITVShowSeasonEpisodes;

    return data;
  } catch (error) {
    console.error("Failed to fetchTvShowBySeason data:", error);
    throw error;
  }
}

export async function fetchTvShowRecommendations(
  id: string,
  page?: number,
): Promise<ITvShowRecommendations> {
  const url = new URL(tvURL.fetchShowRecommendations(id, page));

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 }, // 7 days
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as ITvShowRecommendations;

    return data;
  } catch (error) {
    console.error("Failed to fetchTvShowBySeason data:", error);
    throw error;
  }
}
