"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountrySelector from "../country-selector/countrySelector";
import InputField from "../input-field/inputField";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

export interface Props {
  countryCode: string;
  setCountryCode: Dispatch<SetStateAction<string>>;
}

const Header = ({ countryCode, setCountryCode }: Props) => {
  const [searchActive, setSearchActive] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(0);

  const onClickSearch = () => {
    setSearchActive(!searchActive);
  };

  return (
    <header id="header" className={"header bg-gray-800 text-white p-4"}>
      <div className="header__container flex items-center justify-between">
        <div className="flex items-center space-x-10">
          <h6>TV Maze</h6>
          <Link href="/">
            <p className="text-sm">All shows</p>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {searchActive ? (
            <InputField placeholder="search" id="search" icon={"faSearch"} />
          ) : (
            <FontAwesomeIcon
              onClick={onClickSearch}
              icon={faSearch}
              className="text-white-500 cursor-pointer text-xl"
            />
          )}
          <div className="relative">
            <Link href="/favorites">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-white-500 cursor-pointer text-xl"
              />
            </Link>
            {favoritesCount > 0 && (
              <div className="absolute top-0 right-4 -mt-1 -mr-1 bg-red-500 bg-opacity-85 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {favoritesCount}
              </div>
            )}
          </div>
          <div className="w-48">
            <CountrySelector
              countryCode={countryCode}
              setCountryCode={setCountryCode}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
