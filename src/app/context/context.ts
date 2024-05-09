import { IContext } from "@/types/context";
import { getCountryCodeFromPathname } from "@/utils/country-code/getCountryCode";
import { createContext } from "react";

const initialCountryCode = getCountryCodeFromPathname(window.location.pathname);

export const defaultValue: IContext = {
  countryCode: initialCountryCode,
  countFavorites: 0,
  setCountryCode: () => {},
  setCountFavorites: () => {},
};

export const Context = createContext<IContext>(defaultValue);
