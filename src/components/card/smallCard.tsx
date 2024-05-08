import { UpcomingEpisodesType } from "@/types/types";
import defaultImage from "./../../assets/no-image.svg";

interface CardProps {
  item: UpcomingEpisodesType;
}

const Card = ({ item }: CardProps) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg h-full cursor-pointer">
      <img
        className="w-full object-cover h-20"
        src={
          item.image && item.image.original
            ? item.image.original
            : defaultImage.src
        }
        alt={item.name}
      />
      <div className="px-6 py-4 h-full flex flex-col justify-between">
        <div>
          <div className="font-bold text-sm mb-2">{item.name}</div>
          <div className="text-xs mb-2">Release date: {item.airdate}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
