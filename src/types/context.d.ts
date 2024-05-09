export interface IContext {
  locale: string;
  countFavorites: number;
  setLocale: React.Dispatch<React.SetStateAction<string>>;
  setCountFavorites: React.Dispatch<React.SetStateAction<number>>;
}
