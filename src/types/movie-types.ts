export interface IMovieResponseType {
  page: number;
  results: IMovieTypes[];
}

export interface IMovieTypes {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  original_name: string;
  name: string;
  genres: {
    id: number;
    name: string[];
  }[];
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
