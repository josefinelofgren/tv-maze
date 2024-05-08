import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { saveAsFavorite, removeAsFavorite } from "@/utils/favorites";
import { ShowDetails } from "@/types/types";
import { Context } from "@/app/context/context";

interface CardProps {
  show: ShowDetails;
  onClick: () => void;
}

const Card = ({ show, onClick }: CardProps) => {
  const defaultImage = "./../../assets/no-image.png";

  return (
    <div
      onClick={onClick}
      className="max-w-xs rounded overflow-hidden shadow-lg h-full cursor-pointer"
    >
      <img
        className="w-full h-auto aspect-w-3 aspect-h-2 object-cover h-100"
        src={show.image && show.image.original ? show.image.original : ""}
        alt={show.name}
      />
      <div className="px-6 py-4 h-full flex flex-col justify-between">
        <div>
          <div className="font-bold text-xl mb-2">{show.name}</div>
          <p className="text-gray-700 text-sm">{show.length} min</p>
          {show.genres && (
            <p className="text-gray-500 text-sm">
              {show.genres.join(" \u2022 ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
