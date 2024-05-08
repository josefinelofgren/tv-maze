"use client";

import { Context } from "@/app/context/context";
import { useContext, useEffect, useState } from "react";
import Card from "../card/card";
import Link from "next/link";
import Grid from "../grid/grid";

const Favorites = () => {
  const [data, setData] = useState([]);

  const { countFavorites, setCountFavorites } = useContext(Context);

  const updateDataFromStorage = () => {
    const favoritesData = localStorage.getItem("favorites");
    if (favoritesData) {
      setData(JSON.parse(favoritesData));
    }
  };

  useEffect(() => {
    updateDataFromStorage();

    console.log(countFavorites);
  }, [countFavorites]);

  return (
    <>
      {data.length === 0 ? (
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
          {data &&
            data.map((item: any, index: number) => (
              <div key={index} className="relative">
                <Card
                  id={item.id}
                  title={item.name}
                  image={item.image}
                  genres={item.genres}
                  length={item.length}
                />
              </div>
            ))}
        </Grid>
      )}
    </>
  );
};

export default Favorites;
