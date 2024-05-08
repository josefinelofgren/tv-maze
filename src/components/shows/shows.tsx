"use client";

import Card from "../card/card";
import { Show } from "@/types/types";

interface ShowsProps {
  shows: Show[];
}

const Shows = ({ shows }: ShowsProps) => {
  return (
    <>
      {shows &&
        shows.map((show: any, index: number) => (
          <div key={index} className="relative">
            <Card
              id={show.id}
              title={show.name}
              image={show.image}
              genres={show.genres}
              length={show.length}
            />
          </div>
        ))}
    </>
  );
};

export default Shows;
