import { useState } from "react";
import { Context, defaultValue } from "./context";

export interface Props {
  children: string | JSX.Element | JSX.Element[];
}

const ContextProvider = ({ children }: Props) => {
  const [locale, setLocale] = useState(defaultValue.locale);
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
