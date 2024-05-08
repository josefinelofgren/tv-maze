import { createContext } from "react";

export interface IContext {
  countryCode: string;
  countFavorites: number;
  setCountryCode: React.Dispatch<React.SetStateAction<string>>;
  setCountFavorites: React.Dispatch<React.SetStateAction<number>>;
}

export const defaultValue: IContext = {
  countryCode: "US",
  countFavorites: 0,
  setCountryCode: () => {},
  setCountFavorites: () => {},
};

export const Context = createContext<IContext>(defaultValue);
