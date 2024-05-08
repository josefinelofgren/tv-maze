export interface IContext {
  countryCode: string;
  countFavorites: number;
  setCountryCode: React.Dispatch<React.SetStateAction<string>>;
  setCountFavorites: React.Dispatch<React.SetStateAction<number>>;
}
