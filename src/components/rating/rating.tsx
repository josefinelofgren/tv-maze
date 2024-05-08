import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { ShowType } from "@/types/types";

interface Props {
  show: ShowType;
}

const Rating = ({ show }: Props) => {
  return (
    <>
      {show.rating && (
        <>
          <p className="text-sm mt-6">({show.rating} out of 5)</p>
          {Array.from({ length: 5 }, (_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={index < Math.floor(show.rating) ? solidStar : regularStar}
              className={
                index < Math.floor(show.rating)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }
            />
          ))}
        </>
      )}
    </>
  );
};

export default Rating;
