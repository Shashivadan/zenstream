// Main response type
export  interface IDramaResponse {
  currentPage: string;
  totalPages: number;
  hasNextPage: boolean;
  results: IDramaResult[];
}

// Individual drama result type
 export interface IDramaResult {
  id: string;
  title: string;
  url: string;
  image: string;
}



export interface IDetailedDrama {
  id: string;
  title: string;
  status: string;
  genres: string[];
  otherNames: string[];
  image: string;
  description: string;
  releaseDate: string;
  contentRating: string;
  airsOn: string;
  director: string;
  originalNetwork: string;
  trailer: IDramaTrailer;
  characters: IDramaCharacter[];
  episodes: IDramaEpisode[];
}

export interface IDramaTrailer {
  id: string;
  url: string;
}

export interface IDramaCharacter {
  url: string;
  image: string;
  name: string;
}

export interface IDramaEpisode {
  id: string;
  title: string;
  episode: number;
  subType: string;
  releaseDate: string;
  url: string;
}
