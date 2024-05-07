interface Props {
  image: string;
  title: string;
}

const Card = ({ image, title }: Props) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    </div>
  );
};

export default Card;
