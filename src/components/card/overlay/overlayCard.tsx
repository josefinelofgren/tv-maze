import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction } from "react";
import { EpisodeType, ExtendedShowDetailsType, ShowType } from "@/types/types";
import Favorite from "../../favorite/favorite";
import Rating from "../../rating/rating";
import Episodes from "@/components/episodes/episodes";
import defaultImage from "./../../../assets/no-image.svg";

interface CardProps {
  selectedShow: ExtendedShowDetailsType;
  setSelectedShow: Dispatch<SetStateAction<ExtendedShowDetailsType | null>>;
  setSelectedShowEpisodes: Dispatch<SetStateAction<EpisodeType[] | null>>;
  setSelectedShowDetails: Dispatch<SetStateAction<ShowType | null>>;
}

const OverlayCard = ({
  selectedShow,
  setSelectedShow,
  setSelectedShowEpisodes,
  setSelectedShowDetails,
}: CardProps) => {
  const { show, episodes } = selectedShow;

  const handleClose = () => {
    setSelectedShow(null);
    setSelectedShowEpisodes(null);
    setSelectedShowDetails(null);
  };

  return (
    <>
      {show && episodes && (
        <div className="relative top-0 left-0 bg-white rounded overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <img
                className="w-auto"
                src={
                  show.image && show.image.original
                    ? show.image.original
                    : defaultImage.src
                }
                alt={show.name}
              />
            </div>
            <div className="p-12 h-auto">
              <div className="absolute top-6 right-6 bg-white w-6 h-6 align-center justify-center flex rounded">
                <FontAwesomeIcon
                  icon={faTimes}
                  className="text-gray-700 text-2xl cursor-pointer"
                  onClick={handleClose}
                />
              </div>
              <Favorite show={show} />
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
              <Rating show={show} />
            </div>
          </div>
          <Episodes episodes={episodes} />
        </div>
      )}
    </>
  );
};

export default OverlayCard;
