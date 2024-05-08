"use client";

import { useState } from "react";
import Card from "../card/card";
import { ExtendedShowDetails, ShowDetails } from "@/types/types";
import OverlayCard from "../card/overlayCard";

interface ShowsProps {
  shows: ShowDetails[];
}

const Shows = ({ shows }: ShowsProps) => {
  const [selectedShow, setSelectedShow] = useState<ExtendedShowDetails | null>(
    null
  );
  const [error, setError] = useState(false);

  const fetchData = async (id: number) => {
    try {
      const response = await fetch(`/api/show/?id=${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const responseData = await response.json();
      setSelectedShow(responseData);
    } catch (error) {
      setError(true);
    }
  };

  const handleCardClick = (showId: number) => {
    fetchData(showId);
  };

  return (
    <>
      {selectedShow && (
        <div className="fixed top-0 left-0 z-2 w-full h-full flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="fixed z-2">
            <OverlayCard
              show={selectedShow}
              setSelectedShow={setSelectedShow}
            />
          </div>
        </div>
      )}
      {shows &&
        shows.map((show: any, index: number) => (
          <div key={index}>
            <Card show={show} onClick={() => handleCardClick(show.id)} />
          </div>
        ))}
    </>
  );
};

export default Shows;
