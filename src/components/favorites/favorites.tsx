"use client";

import { Context } from "@/app/context/context";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Grid from "../grid/grid";
import Shows from "../shows/shows";

const Favorites = () => {
  const [shows, setShows] = useState([]);

  const { countFavorites, setCountFavorites } = useContext(Context);

  const updateDataFromStorage = () => {
    const favoritesData = localStorage.getItem("favorites");
    if (favoritesData) {
      setShows(JSON.parse(favoritesData));
    }
  };

  useEffect(() => {
    updateDataFromStorage();
  }, [countFavorites]);

  return (
    <>
      {shows.length === 0 ? (
        <>
          <div className="mt-4">
            <h1 className="text-center text-2xl text-gray-800 mt-8 font-bold">
              No favorites added
            </h1>
            <Link href="/">
              <p className="mt-4 text-center text-sm hover:underline text-blue-500 hover:underline cursor-pointer">
                Back to all shows
              </p>
            </Link>
          </div>
        </>
      ) : (
        <Grid>
          <Shows shows={shows} />
        </Grid>
      )}
    </>
  );
};

export default Favorites;
