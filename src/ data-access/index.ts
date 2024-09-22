"use server";
import { env } from "@/env";
import { getInfoURL, API_KEY, PROXY } from "./apiConstants";
import type { TvShowType, TvShowResultsType, MovieTypes, MovieResponseType } from "@/types/index";

const BASE_URL = "https://api.themoviedb.org/3";
const TRENDING_TV_ENDPOINT = "/trending/tv/day";
export async function fetchTvCarousalData(): Promise<TvShowType[]> {
  const url = new URL(`${PROXY}${BASE_URL}${TRENDING_TV_ENDPOINT}`);
  url.searchParams.append("api_key", API_KEY);

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 }, // 7 days
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as TvShowResultsType;
    return data.results;
  } catch (error) {
    console.error("Failed to fetch TV carousel data:", error);
    throw error;
  }
}



export async function fetchMoviesCarousalData(): Promise<MovieTypes[]> {
  const url = new URL(`${PROXY}${BASE_URL}/3/trending/movie/day`);
  url.searchParams.append("api_key", API_KEY);

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 }, // 7 days
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as MovieResponseType;
    return data.results;
  } catch (error) {
    console.error("Failed to fetch TV carousel data:", error);
    throw error;
  }
}
