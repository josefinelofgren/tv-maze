"use client";

import { useState, useEffect } from "react";
import Card from "../card/card";
import {
  EpisodeType,
  ExtendedShowDetailsType,
  ShowType,
  ShowDetailsType,
} from "@/types/types";
import OverlayCard from "../card/overlay/overlayCard";
import { getSelectedShowDetails } from "@/utils/shows/getShows";
import { getSelectedShowEpisodes } from "@/utils/episodes/getEpisodes";

interface ShowsProps {
  shows: ShowDetailsType[];
}

const Shows = ({ shows }: ShowsProps) => {
  const [selectedShowEpisodes, setSelectedShowEpisodes] = useState<
    EpisodeType[] | null
  >(null);
  const [selectedShowDetails, setSelectedShowDetails] =
    useState<ShowType | null>(null);
  const [selectedShow, setSelectedShow] =
    useState<ExtendedShowDetailsType | null>(null);
  const [error, setError] = useState(false);

  const handleCardClick = (showId: number) => {
    getSelectedShowEpisodes(showId, setSelectedShowEpisodes, setError);
    getSelectedShowDetails(showId, setSelectedShowDetails, setError);
  };

  useEffect(() => {
    if (selectedShowDetails && selectedShowEpisodes) {
      setSelectedShow({
        show: selectedShowDetails,
        episodes: selectedShowEpisodes,
      });
    }
  }, [selectedShowDetails, selectedShowEpisodes]);

  useEffect(() => {
    if (selectedShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedShow]);

  return (
    <>
      {selectedShow && selectedShow.show && selectedShow.episodes && (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="max-w-[900px] max-h-[700px] mx-auto z-10 !important overflow-y-auto">
            <OverlayCard
              selectedShow={selectedShow}
              setSelectedShow={setSelectedShow}
              setSelectedShowEpisodes={setSelectedShowEpisodes}
              setSelectedShowDetails={setSelectedShowDetails}
            />
          </div>
        </div>
      )}
      {shows &&
        shows.map((show: any, index: number) => (
          <div key={index}>
            <Card item={show} onClick={() => handleCardClick(show.id)} />
          </div>
        ))}
    </>
  );
};

export default Shows;
