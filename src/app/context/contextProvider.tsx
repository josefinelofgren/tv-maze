import { useState } from "react";
import { Context, defaultValue } from "./context";
import { getLocaleFromPathname } from "@/utils/locale/getLocale";
import { usePathname } from "next/navigation";

export interface Props {
  children: string | JSX.Element | JSX.Element[];
}

const ContextProvider = ({ children }: Props) => {
  const initialLocale = getLocaleFromPathname(usePathname());

  const [locale, setLocale] = useState(initialLocale);
  const [countFavorites, setCountFavorites] = useState(
    defaultValue.countFavorites
  );

  return (
    <Context.Provider
      value={{
        locale,
        countFavorites,
        setLocale,
        setCountFavorites,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
