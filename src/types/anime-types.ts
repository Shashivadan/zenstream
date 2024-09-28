import type {
  ISearch,
  MediaFormat,
} from "@consumet/extensions/dist/models/types";

export interface IEpisodeSource {
  headers: {
    Referer: string;
  };
  sources: Isources[];
}

export interface Isources {
  url: string;
  isM3u8: boolean;
  quality: string;
}

export enum MediaStatus {
  ONGOING = "Ongoing",
  COMPLETED = "Completed",
  HIATUS = "Hiatus",
  CANCELLED = "Cancelled",
  NOT_YET_AIRED = "Not yet aired",
  UNKNOWN = "Unknown",
}

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

export interface ITrailer {
  id: string;
  site?: string;
  thumbnail?: string;
  thumbnailHash?: string | null;
}

interface IDate {
  year: number | null;
  month: number | null;
  day: number | null;
}

export interface IAnimeInfo {
  id: string;
  title: ITitle;
  malId: number;
  synonyms: string[];
  isLicensed: boolean;
  isAdult: boolean;
  countryOfOrigin: string;
  trailer?: ITrailer;
  image: string;
  imageHash: string;
  popularity: number;
  color: string;
  cover: string;
  coverHash: string;
  description: string;
  status: MediaStatus;
  releaseDate: number;
  startDate: IDate;
  endDate: IDate;
  nextAiringEpisode: INextAiringEpisode;
  totalEpisodes: number;
  currentEpisode: number;
  rating: number;
  duration: number;
  genres: string[];
  season: string;
  studios: string[];
  subOrDub: string;
  type: string;
  recommendations: IAnimeRecommendation[];
  characters: ICharacter[];
  relations: IRelation[];
  mappings: IMapping[];
  artwork: IArtwork[];
  episodes: IEpisode[];
}

interface IMapping {
  id: string;
  providerId: string;
  similarity: number;
  providerType: string;
}

interface IArtwork {
  img: string;
  type: string;
  providerId: string;
}

export interface IEpisode {
  id: string;
  title: string;
  description: string | null;
  number: number;
  image: string;
  imageHash: string;
  airDate: string | null;
}

interface IRelation {
  id: number;
  relationType: string;
  malId: number;
  title: ITitle;
  status: MediaStatus;
  episodes: number | null;
  image: string;
  imageHash: string;
  color: string;
  type: string;
  cover: string;
  coverHash: string;
  rating: number;
}

interface INextAiringEpisode {
  airingTime: number;
  timeUntilAiring: number;
  episode: number;
}

type IAnimeRecommendation = {
  id: number;
  malId: number;
  title: ITitle;
  status: MediaStatus;
  episodes: number;
  image: string;
  imageHash: string;
  cover: string;
  coverHash: string;
  rating: number;
  type: string;
};

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
