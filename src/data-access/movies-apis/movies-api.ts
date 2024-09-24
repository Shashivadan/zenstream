"use server";
import { env } from "@/env";
import { API_KEY, getCastInfoURL, getMovieInfoURL, PROXY } from "../api-contents";
import type {
  TvShowType,
  TvShowResultsType,
  IMovieTypes,
  IMovieResponseType,
  IMovieInfoType,
  IMovieCast,
  ICastMember,
} from "@/types/index";

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

export async function fetchMoviesCarousalData(type: string) {
  try {
    const url = new URL(
      `${PROXY}https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
    );
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 },
    });
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = (await response.json()) as IMovieResponseType;
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchPopularMovies() {
  try {
    const url = new URL(
      `${PROXY}https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    );
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 },
    });
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = (await response.json()) as IMovieResponseType;
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchUpcomingMovies() {
  try {
    const url = new URL(
      `${PROXY}https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
    );
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 },
    });
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = (await response.json()) as IMovieResponseType;
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchTopRatedMovies() {
  try {
    const url = new URL(
      `${PROXY}https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
    );
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 },
    });
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = (await response.json()) as IMovieResponseType;
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchNowPlayingMovies() {
  try {
    const url = new URL(
      `${PROXY}https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
    );
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 },
    });
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = (await response.json()) as IMovieResponseType;
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieInfoById(
  id: string | number,
): Promise<IMovieInfoType | string> {
  try {
    const url = new URL(getMovieInfoURL(id));
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 },
    });
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = (await response.json()) as IMovieInfoType;
    return data;
  } catch (error) {
    return (error as Error).message;
  }
}

export async function fetchCastInfoById(
  id: string | number,
): Promise<ICastMember[] | string> {
  try {
    const url = new URL(getCastInfoURL(id));
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 },
    });
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = (await response.json()) as IMovieCast;
    return data.cast;
  } catch (error) {
    return (error as Error).message;
  }
}