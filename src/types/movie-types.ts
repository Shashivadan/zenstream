export interface IMovieTVResponseType {
  page: number;
  results: IMovieTvTypes[];
}

export interface IMovieTvTypes {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  original_name: string;
  name: string;
  genres: string[];
  tagline: string;
  media_type: string;
  overview: string;
  popularity: number;
  first_air_date: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  origin_country?: string[];
  status?: string;
  last_air_date?: string;
  number_of_seasons?: number;
  number_of_episodes?: number;
  runtime?: number;
  budget?: number;
  revenue?: number;
  spoken_languages: string[];
}

export interface IMovieInfoType {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Array<{
    id: number;
    name: string;
  }>;
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<{
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }>;
  production_countries: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ICastMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface IMovieCast {
  id: number;
  cast: ICastMember[];
}

export interface IMovieRecommendationResponse {
  page: number;
  results: IRecommendedMovie[];
  total_pages: number;
  total_results: number;
}

export interface IRecommendedMovie {
  backdrop_path: string | null;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  recommendation_score?: number; // Added field for recommendation context
  user_rating?: number; // Added field for user's personal rating
}