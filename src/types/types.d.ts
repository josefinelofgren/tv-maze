export interface ShowDetails {
  id: number;
  name: string;
  image: { medium: string | null; original: string | null } | null;
  length: number;
  genres: [];
}

export interface ExtendedShowDetails {
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
