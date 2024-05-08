import { IContext } from "@/types/context";
import { createContext } from "react";

export const defaultValue: IContext = {
  countryCode: "US",
  countFavorites: 0,
  setCountryCode: () => {},
  setCountFavorites: () => {},
};

export const Context = createContext<IContext>(defaultValue);
