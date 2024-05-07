export interface Props {
  text: string;
  element: React.ElementType;
}

const Heading = ({ text, element }: Props) => {
  const Element = element;

  return <Element className={`heading`}>{text}</Element>;
};

export default Heading;
