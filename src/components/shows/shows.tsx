"use client";

import { useState, useEffect } from "react";
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
      {selectedShow && (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="max-w-[900px] max-h-[700px] mx-auto z-10 !important overflow-y-auto">
            <OverlayCard
              selectedShow={selectedShow}
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
