export interface Card {
  id: number;
  image: { medium: string | null; originial: string | null } | null;
  title: string;
  genres: [];
  length: number;
}
