

interface TitleProps {
  titleText: string;
}

const Title = ({ titleText }: TitleProps) => {
  return (
    <div className="title flex items-center">
      <div className="dots-shape"></div>
      <h3>{titleText}</h3>
    </div>
  );
};

export default Title;
