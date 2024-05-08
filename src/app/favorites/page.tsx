"use client";

import Grid from "@/components/grid/grid";
import Shows from "@/components/shows/shows";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/context";
import { updateFavoritesDataFromStorage } from "@/utils/favorites/favorites";
import { ShowDetailsType, UpcomingEpisodesType } from "@/types/types";
import { getUpcomingEpisodes } from "@/utils/episodes/getEpisodes";
import Card from "@/components/card/card";
import SmallCard from "@/components/card/smallCard";

export default function Page() {
  const [shows, setShows] = useState<ShowDetailsType[] | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [upcomingEpisodes, setUpcomingEpisodes] = useState<
    UpcomingEpisodesType[][] | null
  >(null);
  const { countFavorites } = useContext(Context);

  useEffect(() => {
    updateFavoritesDataFromStorage(setShows);
  }, [countFavorites]);

  useEffect(() => {
    {
      shows && getUpcomingEpisodes(shows, setUpcomingEpisodes, setError);
    }
  }, [shows]);

  useEffect(() => {
    console.log(upcomingEpisodes);
  }, [upcomingEpisodes]);

  return (
    <>
      {shows ? (
        <>
          <div>
            <p className="font-bold text-md mb-2">Favorited shows</p>
            <Grid>
              <Shows shows={shows} />
            </Grid>
          </div>
          <div className="mt-12">
            {upcomingEpisodes &&
              upcomingEpisodes.map(
                (episodes: UpcomingEpisodesType[], index: number) => {
                  return (
                    <div key={index}>
                      <p className="font-bold text-md mb-2 mt-12">
                        Upcoming episodes for "{shows[index].name}"
                      </p>
                      <Grid>
                        {episodes.map((episode, episodeIndex) => {
                          return (
                            <div key={episodeIndex}>
                              <SmallCard item={episode} />
                            </div>
                          );
                        })}
                      </Grid>
                    </div>
                  );
                }
              )}
          </div>
        </>
      ) : (
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
      )}
    </>
  );
}
