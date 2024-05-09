import { ShowDetailsType } from "@/types/types";
import defaultImage from "./../../assets/no-image.svg";
import Image from "next/image";

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
      <Image
        className="w-full h-auto object-cover"
        src={
          item.image && item.image.original
            ? item.image.original
            : defaultImage.src
        }
        alt={item.name}
        width={300}
        height={400}
      />
      <div className="px-6 py-4 h-full flex flex-col justify-between bg-black-900">
        <div>
          <p className="font-bold text-md mb-2">{item.name}</p>
          {item.genres && (
            <p className="text-black-200  text-xs">
              {item.genres.join(" \u2022 ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
