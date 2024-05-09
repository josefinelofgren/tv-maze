import { IContext } from "@/types/context";
import { getLocaleFromPathname } from "@/utils/locale/getLocale";
import { createContext } from "react";

const initialLocale = getLocaleFromPathname(window.location.pathname);

export const defaultValue: IContext = {
  locale: initialLocale,
  countFavorites: 0,
  setLocale: () => {},
  setCountFavorites: () => {},
};

export const Context = createContext<IContext>(defaultValue);
