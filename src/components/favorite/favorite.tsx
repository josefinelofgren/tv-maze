import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { handleToggleFavorite } from "@/utils/favorites/favorites";
import { ShowType, ShowDetailsType } from "@/types/types";
import { Context } from "@/app/context/context";

interface Props {
  show: ShowType;
}

const Favorite = ({ show }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { setCountFavorites } = useContext(Context);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const isAlreadyFavorite = favorites.some(
      (favorite: ShowDetailsType) => favorite.id === show.id
    );

    setIsFavorite(isAlreadyFavorite);
  }, [show.id]);

  return (
    <div className="text-red-500 mb-2">
      <FontAwesomeIcon
        onClick={() =>
          handleToggleFavorite(
            show,
            isFavorite,
            setIsFavorite,
            setCountFavorites
          )
        }
        icon={isFavorite ? solidHeart : regularHeart}
        className="text-2xl cursor-pointer"
      />
    </div>
  );
};

export default Favorite;
