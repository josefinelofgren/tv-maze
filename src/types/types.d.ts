export interface ShowDetails {
  id: number;
  name: string;
  image: { medium: string | null; original: string | null } | null;
  length: number;
  genres: [];
}

export interface Show {
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

export interface Episode {
  id: number;
  name: string;
  image: { medium: string | null; original: string | null } | null;
  season: number;
  number: number;
  runtime: number;
}

export interface ExtendedShowDetails {
  show: Show;
  episodes: Episode[];
}

export interface ShowEpisodes {}
