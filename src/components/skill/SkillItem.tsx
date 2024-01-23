interface SkillItemProps {
  item: {
    id: string;
    icon: string;
    name: string;
  };
}

const SkillItem = ({ item }: SkillItemProps) => {
  return (
    <div className="skill-item text-center">
      <div className="skill-icon">
        <img src={item.icon} alt={item.name} />
      </div>
      <div className="skill-info">
        <h3 className="skill-name">{item.name}</h3>
      </div>
    </div>
  );
};

export default SkillItem;
