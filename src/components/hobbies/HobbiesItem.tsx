interface HobbiesItemProps {
  item: {
    id: string;
    icon: string;
    name: string;
  };
}

const HobbiesItem = ({ item }: HobbiesItemProps) => {
  return (
    <div className="hobbies-item flex item-center">
      <div className="hobbies-icon">
        <img src={item.icon} alt={item.name} />
      </div>
      <div className="hobbies-text">{item.name}</div>
    </div>
  );
};

export default HobbiesItem;
