"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountrySelector from "../country-selector/countrySelector";
import Heading from "../heading/heading";
import InputField from "../input-field/inputField";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { getCountryCode } from "@/utils/getCountryCode";

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);

  // useEffect(() => {
  //   getCountryCode();
  // }, []);

  const onClickSearch = () => {
    setSearchActive(!searchActive);
  };

  return (
    <header id="header" className={"header bg-gray-800 text-white p-4"}>
      <div className="header__container flex items-center justify-between">
        <Heading element={"h6"} text={"TV Maze"} />
        <div className="flex items-center space-x-4">
          {searchActive ? (
            <InputField placeholder="search" id="search" icon={"faSearch"} />
          ) : (
            <FontAwesomeIcon
              onClick={onClickSearch}
              icon={faSearch}
              className="text-white-500 cursor-pointer"
            />
          )}
          <FontAwesomeIcon
            icon={faHeart}
            className="text-white-500 cursor-pointer"
          />
          <div className="w-48">
            <CountrySelector />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
