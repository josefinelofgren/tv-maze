"use client";

import Grid from "@/components/grid/grid";
import Shows from "@/components/shows/shows";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/context";
import { updateFavoritesDataFromStorage } from "@/utils/favorites/favorites";
import { ShowDetailsType, UpcomingEpisodesType } from "@/types/types";
import { getUpcomingEpisodes } from "@/utils/episodes/getEpisodes";
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

  return (
    <>
      {shows && shows.length > 0 ? (
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
                        Upcoming episodes for: {shows[index].name}
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
          <div className="mt-4 flex min-h-screen flex-col items-center">
            <h2 className="text-center text-2xl mt-8 font-bold">
              No favorites added
            </h2>
            <Link href="/">
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-600">
                Back to homepage
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
