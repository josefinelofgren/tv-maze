import { ShowDetailsType } from "@/types/types";
import defaultImage from "./../../assets/no-image.svg";

interface CardProps {
  item: ShowDetailsType;
  onClick: () => void;
}

const Card = ({ item, onClick }: CardProps) => {
  return (
    <div
      onClick={onClick}
      className="max-w-xs rounded overflow-hidden shadow-lg h-full cursor-pointer"
    >
      <img
        className="w-full h-auto object-cover"
        src={
          item.image && item.image.original
            ? item.image.original
            : defaultImage.src
        }
        alt={item.name}
      />
      <div className="px-6 py-4 h-full flex flex-col justify-between">
        <div>
          <div className="font-bold text-lg mb-2">{item.name}</div>
          {item.genres && (
            <p className="text-gray-500 text-sm">
              {item.genres.join(" \u2022 ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
