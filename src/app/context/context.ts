import { IContext } from "@/types/context";
import { createContext } from "react";

export const defaultValue: IContext = {
  locale: "global",
  countFavorites: 0,
  setLocale: () => {},
  setCountFavorites: () => {},
};

export const Context = createContext<IContext>(defaultValue);
