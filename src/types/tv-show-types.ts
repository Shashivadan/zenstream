export interface ITvShowResultsType {
  page: number;
  results: ITVShowTypes[];
}

export type ITVShowTypes = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
};

interface IGenre {
  id: number;
  name: string;
}

interface IEpisodeToAir {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number | null;
  season_number: number;
  show_id: number;
  still_path: string;
}

interface INetwork {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface IProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface ITvShowSeasons {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
}

interface ISpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface ICreator {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  gender: number;
  profile_path: string | null;
}

// interface IDetailedTVShow {
//   adult: boolean;
//   backdrop_path: string;
//   created_by: ICreator[]; // Updated to use the new ICreator interface
//   episode_run_time: number[];
//   first_air_date: string;
//   genres: IGenre[];
//   homepage: string;
//   id: number;
//   in_production: boolean;
//   languages: string[];
//   last_air_date: string;
//   last_episode_to_air: IEpisode;
//   name: string;
//   next_episode_to_air: IEpisode | null;
//   networks: INetwork[];
//   number_of_episodes: number;
//   number_of_seasons: number;
//   origin_country: string[];
//   original_language: string;
//   original_name: string;
//   overview: string;
//   popularity: number;
//   poster_path: string;
//   production_companies: IProductionCompany[];
//   production_countries: IProductionCountry[];
//   seasons: ISeason[];
//   spoken_languages: ISpokenLanguage[];
//   status: string;
//   tagline: string;
//   type: string;
//   vote_average: number;
//   vote_count: number;
// }

export interface IDetailedTVShow {
  adult: boolean;
  backdrop_path: string;
  created_by: ICreator[]; // You might want to define a more specific interface if there's usually data here
  episode_run_time: number[];
  first_air_date: string;
  genres: IGenre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: IEpisodeToAir;
  name: string;
  next_episode_to_air: IEpisodeToAir | null;
  networks: INetwork[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IProductionCompany[];
  production_countries: IProductionCountry[];
  seasons: ITvShowSeasons[];
  spoken_languages: ISpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

/// esposides

export interface ITVShowSeasonEpisodes {
  _id: string;
  air_date: string;
  episodes: ITvShowEpisode[];
  name: string;
  overview: string;
  id: number;
  poster_path: string | null;
  season_number: number;
  vote_average: number;
}

export interface ITvShowEpisode {
  air_date: string;
  episode_number: number;
  episode_type: string;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number | null;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
  crew: ITvShowCrew[]; // This is empty in the provided JSON, so we'll leave it as any[]
  guest_stars: IGuestStar[];
}

interface IGuestStar {
  character: string;
  credit_id: string;
  order: number;
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
}




interface ITvShowCrew {
  job: string;
  department: string;
  credit_id: string;
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
}




export interface ITvShowRecommendations {
  page: number;
  results: ITvShowRecommendationsEntry[];
  total_pages: number;
  total_results: number;
}

// Type for individual TV show entries
export interface ITvShowRecommendationsEntry {
  backdrop_path: string | null;
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string | null;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}
