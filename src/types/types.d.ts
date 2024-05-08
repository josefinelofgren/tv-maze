export interface ShowDetailsType {
  id: number;
  name: string;
  image: { medium: string | null; original: string | null } | null;
  genres: [];
}

export interface ShowType {
  id: number;
  name: string;
  image: { medium: string | null; original: string | null } | null;
  language: string;
  rating: number;
  length: number;
  genres: [];
  summary: string;
  premiered: string;
}

export interface EpisodeType {
  id: number;
  name: string;
  image: { medium: string | null; original: string | null } | null;
  season: number;
  number: number;
  runtime: number;
}

export interface UpcomingEpisodesType {
  id: number;
  name: string;
  image: { medium: string | null; original: string | null } | null;
  number: number;
  airdate: string;
  airtime: string;
}

export interface ExtendedShowDetailsType {
  show: Show | null;
  episodes: Episode[] | null;
}
