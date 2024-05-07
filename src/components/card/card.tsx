interface Props {
  image: { medium: string | null; originial: string | null } | null;
  title: string;
  genres: [];
  length: number;
}

const Card = ({ image, title, genres, length }: Props) => {
  const defaultImage = "./../../assets/no-image.png";

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg h-full">
      <img
        className="w-full h-auto aspect-w-3 aspect-h-2 object-cover"
        src={image && image.medium ? image.medium : defaultImage}
        alt={title}
      />
      <div className="px-6 py-4 h-full flex flex-col justify-between">
        <div>
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
