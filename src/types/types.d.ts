export interface Card {
  id: number;
  image: { medium: string | null; originial: string | null } | null;
  title: string;
  genres: [];
  length: number;
}

export interface Show {
  id: number;
  name: string;
  image: Object | null;
  length: number;
  genres: [];
}
