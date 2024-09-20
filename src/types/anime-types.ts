import type {
  ISearch,
  MediaStatus,
  MediaFormat,
  ITitle,
  FuzzyDate,
  Trailer,
} from "@consumet/extensions/dist/models";



export interface AnimeDataResponse extends ISearch<IAnimeInfo> {
  currentPage: number;
  hasNextPage: boolean;
}

export interface IAnimeInfo extends IAnimeResult {
  title: ITitle | string;
  malId?: number | string;
  genres?: string[];
  description?: string;
  status?: MediaStatus;
  totalEpisodes?: number;
  subOrDub?: SubOrSub;
  hasSub?: boolean;
  hasDub?: boolean;
  synonyms?: string[];
  countryOfOrigin?: string;
  isAdult?: boolean;
  isLicensed?: boolean;
  season?: string;
  studios?: string[];
  color?: string;
  cover?: string;
  trailer?: Trailer;
  episodes?: IAnimeEpisode[];
  startDate?: FuzzyDate;
  endDate?: FuzzyDate;
  recommendations?: IAnimeResult[];
  relations?: IAnimeResult[];
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
