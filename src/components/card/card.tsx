import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { saveAsFavorite, removeAsFavorite } from "@/utils/favorites";
import { Card as CardType } from "@/types/types";

const Card = ({ id, image, title, genres, length }: CardType) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const isAlreadyFavorite = favorites.some(
      (item: CardType) => item.id === id
    );

    setIsFavorite(isAlreadyFavorite);
  }, [id]);

  const handleToggleFavorite = () => {
    const showObject = { id, title, image, genres, length };

    if (!isFavorite) {
      saveAsFavorite(showObject);
      setIsFavorite(true);
    } else {
      removeAsFavorite(showObject);
      setIsFavorite(false);
    }
  };

  const defaultImage = "./../../assets/no-image.png";

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg h-full">
      <img
        className="w-full h-auto aspect-w-3 aspect-h-2 object-cover"
        src={image && image.medium ? image.medium : ""}
        alt={title}
      />
      <div className="px-6 py-4 h-full flex flex-col justify-between">
        <div>
          <div className="text-red-500">
            <FontAwesomeIcon
              onClick={handleToggleFavorite}
              icon={isFavorite ? solidHeart : regularHeart}
            />
          </div>
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-sm">{length} min</p>
          {genres && (
            <p className="text-gray-500 text-sm">{genres.join(" \u2022 ")}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
