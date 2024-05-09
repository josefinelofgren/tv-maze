"use client";

import { useContext, useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountrySelector from "../country-selector/countrySelector";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { Context } from "@/app/context/context";
import Search from "../search/search";

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);
  const searchRef = useRef(null);

  const { countFavorites, countryCode, setCountFavorites, setCountryCode } =
    useContext(Context);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setCountFavorites(favorites.length);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !(searchRef.current as unknown as HTMLElement).contains(
          event.target as Node
        )
      ) {
        setSearchActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setCountFavorites]);

  const onClickSearch = () => {
    setSearchActive(!searchActive);
  };

  return (
    <header
      id="header"
      className={"header bg-black text-white p-4 border-b border-black-700"}
    >
      <div className="header__container flex items-center justify-between">
        <div className="flex items-center space-x-10">
          <p className="font-bold">TV Maze</p>
          <Link href="/">
            <p className="text-xs">All shows</p>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="search" ref={searchRef}>
            {searchActive ? (
              <Search />
            ) : (
              <FontAwesomeIcon
                onClick={onClickSearch}
                icon={faSearch}
                className="text-white-100 cursor-pointer text-xl"
              />
            )}
          </div>
          <div className="relative">
            <Link href="/favorites">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-white-100 cursor-pointer text-xl"
              />
            </Link>
            {countFavorites > 0 && (
              <div className="absolute top-0 right-4 -mt-1 -mr-1 bg-red-500 bg-opacity-85 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {countFavorites}
              </div>
            )}
          </div>
          <div className="w-48">
            <CountrySelector />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
