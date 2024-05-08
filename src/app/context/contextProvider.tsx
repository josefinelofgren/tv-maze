import { useState } from "react";
import { Context, defaultValue } from "./context";

export interface Props {
  children: string | JSX.Element | JSX.Element[];
}

const ContextProvider = ({ children }: Props) => {
  const [countryCode, setCountryCode] = useState(defaultValue.countryCode);
  const [countFavorites, setCountFavorites] = useState(
    defaultValue.countFavorites
  );

  return (
    <Context.Provider
      value={{
        countryCode,
        countFavorites,
        setCountryCode,
        setCountFavorites,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
