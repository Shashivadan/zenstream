import { env } from "@/env";
export const API_KEY = "c252dde529d0b4d39533949ed198e5d9";
export const PROXY = "https://sup-proxy.zephex0-f6c.workers.dev/api-json?url=";
export const API_ANILIST_URL = env.CONSUMET_API_ANILIST_URL;
export const RUST_ANIME_API = env.CONSUMET_API_URL;

export const animeURL = {
  popular: "https://animetize-api.vercel.app/popular",
  topAiring: "https://animetize-api.vercel.app/top-airing",
  info: "https://animetize-api.vercel.app/info/",
  episodeLink: "https://animetize-api.vercel.app/watch/",
  movies: "https://animetize-api.vercel.app/movies",
  recentEpisodes: "https://animetize-api.vercel.app/recent-episodes",
  animeList: "https://animetize-api.vercel.app/anime-list",
  search: "https://animetize-api.vercel.app/",
  genre: "https://animetize-api.vercel.app/genre",
};

export const aniListURL = {
  popular: `${PROXY}${API_ANILIST_URL}/popular`,
  trending: `${PROXY}${API_ANILIST_URL}/trending`,
  recentEpisodes: `${PROXY}${API_ANILIST_URL}/recent-episodes`,
  animeInfo: (id: string) => `${PROXY}${API_ANILIST_URL}/info/${id}`,
  episodeSources: (id: string) =>
    `${PROXY}${RUST_ANIME_API}/anime/gogoanime/watch/${id}`,
};

export const tvURL = {
  onTheAir: `${PROXY}https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}`,
  nowPlaying: `${PROXY}https://api.themoviedb.org/3/tv/now_playing?api_key=${API_KEY}`,
  topRated: `${PROXY}https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`,
  airingToday: `${PROXY}https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}`,
  popular: `${PROXY}https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`,
  search: `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=`,
  tvInfo: (tvId: string | number) =>
    `${PROXY}https://api.themoviedb.org/3/tv/${tvId}?api_key=${API_KEY}`,
  fetchSeasonEpisode: (id: string, seasonNumber: string): string =>
    `${PROXY}https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}?api_key=${API_KEY}`,
  fetchShowRecommendations: (id: string, page = 1): string =>
    `${PROXY}https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${API_KEY}&page=${page}`,
};

export const movieURL = {
  search: `${PROXY}https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`,
  movieInfo: (movieId: string | number) =>
    `${PROXY}https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`,
  popular: `${PROXY}https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  topRated: `${PROXY}https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
  upcoming: `${PROXY}https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
  nowPlaying: `${PROXY}https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
  onTheAir: `${PROXY}https://api.themoviedb.org/3/movie/on_the_air?api_key=${API_KEY}`,
  triending: `${PROXY}https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
  trending: `${PROXY}https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
  movieRecommendation: (id: string) =>
    `${PROXY}https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`,
};

export const getCastInfoURL = (movieId: string | number) =>
  `${PROXY}https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;

export const dramaURL = {
  popular: (page: number | string) =>
    `https://api-consumet-org-rust.vercel.app/movies/dramacool/popular?page=${page}`,
  dramaInfo: (id: string) =>
    `https://api-consumet-org-rust.vercel.app/movies/dramacool/info?id=${id}`,
  streamLinks: (
    episodeId: string,
    mediaId: string,
    server?: "asianload" | "mixdrop" | "streamtape" | "streamsb",
  ): string =>
    `https://api-consumet-org-rust.vercel.app/movies/dramacool/watch?episodeId=${episodeId}&mediaId=${mediaId}&server=${server}`,
};
