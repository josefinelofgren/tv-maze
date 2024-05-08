import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faTimes,
  faHeart as solidHeart,
  faStar as solidStar,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { saveAsFavorite, removeAsFavorite } from "@/utils/favorites";
import { ExtendedShowDetails } from "@/types/types";
import { Context } from "@/app/context/context";

interface CardProps {
  show: ExtendedShowDetails;
  setSelectedShow: Dispatch<SetStateAction<ExtendedShowDetails | null>>;
}

const OverlayCard = ({ show, setSelectedShow }: CardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { setCountFavorites } = useContext(Context);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const isAlreadyFavorite = favorites.some(
      (item: ExtendedShowDetails) => item.id === show.id
    );

    setIsFavorite(isAlreadyFavorite);
  }, [show.id]);

  const handleToggleFavorite = () => {
    const showObject = show;

    if (!isFavorite) {
      saveAsFavorite(showObject);
      setIsFavorite(true);
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      setCountFavorites(favorites.length);
    } else {
      removeAsFavorite(showObject);
      setIsFavorite(false);
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      setCountFavorites(favorites.length);
    }
  };

  const handleClose = () => {
    setSelectedShow(null);
  };

  const defaultImage = "./../../assets/no-image.png";

  return (
    <div className="top-0 left-0 bg-white rounded">
      <div className="w-auto flex items-center justify-center">
        <div>
          <img
            className="w-400"
            src={show.image && show.image.original ? show.image.original : ""}
            alt={show.name}
          />
        </div>
        <div className="p-12 h-auto w-200">
          <div className="absolute top-6 right-6">
            <FontAwesomeIcon
              icon={faTimes}
              className="text-gray-700 text-2xl cursor-pointer"
              onClick={handleClose}
            />
          </div>
          <div className="text-red-500 mb-2">
            <FontAwesomeIcon
              onClick={handleToggleFavorite}
              icon={isFavorite ? solidHeart : regularHeart}
              className="text-2xl cursor-pointer"
            />
          </div>
          <p className="font-bold text-2xl mb-4">{show.name}</p>{" "}
          <p className="text-gray-500 text-sm mb-2">{show.length} min</p>
          {show.genres && (
            <p className="text-gray-500 text-sm font-bold">
              {show.genres.join(" \u2022 ")}
            </p>
          )}
          {show.summary && (
            <p
              className="mt-6 text-gray-700 text-sm"
              dangerouslySetInnerHTML={{ __html: show.summary }}
            />
          )}
          {show.rating && (
            <>
              <p className="text-sm mt-6">({show.rating} out of 5)</p>
              {Array.from({ length: 5 }, (_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={
                    index < Math.floor(show.rating) ? solidStar : regularStar
                  }
                  className={
                    index < Math.floor(show.rating)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }
                />
              ))}
            </>
          )}
        </div>
      </div>
      <div className="h-200 p-12">
        <h6>Episodes</h6>
      </div>
    </div>
  );
};

export default OverlayCard;
