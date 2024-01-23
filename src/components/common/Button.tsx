interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  const handleMouseEnter = () => {
    const cursor = document.querySelector(".cursor");
    cursor?.classList.add("hover");
  };

  const handleMouseLeave = () => {
    const cursor = document.querySelector(".cursor");
    cursor?.classList.remove("hover");
  };

  return (
    <button
      className="button"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </button>
  );
};

export default Button;
