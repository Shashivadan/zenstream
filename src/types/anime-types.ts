import type {
  ISearch,
  MediaStatus,
  MediaFormat,
  FuzzyDate,
  
} from "@consumet/extensions/dist/models/types";


export interface AnimeDataResponse extends ISearch<IAnimeInfo> {
  currentPage: number;
  hasNextPage: boolean;
}


export interface ITitle {
  romaji?: string;
  english?: string;
  native?: string;
  userPreferred?: string;
}

export interface Trailer {
  id: string;
  site?: string;
  thumbnail?: string;
  thumbnailHash?: string | null;
}



export interface IAnimeInfo {
  id: string;
  title: ITitle;
  malId: number;
  trailer: Trailer;
  image: string;
  popularity: number;
  color: string;
  description: string;
  status: string;
  releaseDate: number;
  startDate: {
    year: number;
    month: number;
    day: number;
  };
  endDate: {
    year: number;
    month: number;
    day: number;
  };
  rating: number;
  genres: string[];
  season: string;
  studios: string[];
  type: string;
  recommendations: {
    id: string;
    malId: string;
    title: string[];
    status: string;
    episodes: number;
    image: string;
    cover: string;
    rating: number;
    type: string;
  };
  characters: ICharacter[];
  relations: {
    id: number;
    relationType: string;
    malId: number;
    title: string[];
    status: string;
    episodes: number;
    image: string;
    color: string;
    type: string;
    cover: string;
    rating: number;
  };
  episodes: {
    id: string;
    title: string;
    episode: string;
  };
}


 interface ICharacterName {
  first: string;
  last: string;
  full: string;
  userPreferred: string;
  native: string;
}
export interface ICharacter {
  id: string;
  role: string;
  name: ICharacterName;
  image: string;
  voiceActors: {
    id: string;
    name: ICharacterName;
    language: string;
    image: string;
  };
}













export interface IAnimeResult {
  id: string;
  title: ITitle | string;
  image?: string;
  imageHash?: string;
  cover?: string;
  coverHash?: string;
  status?: MediaStatus;
  rating?: number;
  type?: MediaFormat;
  releaseDate?: string | number;
  [x: string]: unknown;
}

export interface IAnimeEpisode {
  id: string;
  number: number;
  title?: string;
  description?: string;
  isFiller?: boolean;
  url?: string;
  image?: string;
  imageHash?: string;
  releaseDate?: string;
  [x: string]: unknown;
}

export enum SubOrSub {
  SUB = "sub",
  DUB = "dub",
  BOTH = "both",
}
