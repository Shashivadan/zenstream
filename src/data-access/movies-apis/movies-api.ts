"use server";

import { getCastInfoURL, movieURL } from "../api-contents";
import type {
  IMovieTVResponseType as IMovieResponseType,
  IMovieInfoType,
  IMovieCast,
  ICastMember,
} from "@/types/index";

export async function fetchMoviesCarousalData() {
  try {
    const url = new URL(movieURL.triending);
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
    const url = new URL(movieURL.popular);
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
    const url = new URL(movieURL.upcoming);
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
    const url = new URL(movieURL.topRated);
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
    const url = new URL(movieURL.nowPlaying);
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
    const url = new URL(movieURL.movieInfo(id));
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
): Promise<ICastMember[]> {
  try {
    const url = new URL(getCastInfoURL(id));
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 },
    });
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = (await response.json()) as IMovieCast;
    return data.cast;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
