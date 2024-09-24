// apiConstants.ts

export const API_KEY = "c252dde529d0b4d39533949ed198e5d9";
export const PROXY = "https://sup-proxy.zephex0-f6c.workers.dev/api-json?url=";

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

export const tvURL = {
  onTheAir: `${PROXY}https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}`,
  nowPlaying: `${PROXY}https://api.themoviedb.org/3/tv/now_playing?api_key=${API_KEY}`,
  topRated: `${PROXY}https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`,
  airingToday: `${PROXY}https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}`,
  popular: `${PROXY}https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`,
  search: `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=`,
};

export const movieURL = {
  search: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`,
};

export const getMovieInfoURL = (movieId: string | number) =>
  `${PROXY}https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;

export const getTVInfoURL = (tvId: string | number) =>
  `${PROXY}https://api.themoviedb.org/3/tv/${tvId}?api_key=${API_KEY}`;
