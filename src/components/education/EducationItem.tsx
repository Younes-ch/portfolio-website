interface EducationItemProps {
  item: {
    id: string;
    icon: string;
    course: string;
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
  };
}

const EducationItem = ({ item }: EducationItemProps) => {
  return (
    <div className="education-item">
      <div className="edu-title flex items-center">
        <img src={item.icon} className="edu-icon" alt={item.course} />
        <h3 className="edu-course">{item.course}</h3>
      </div>
      <p className="edu-info text">
        {item.institution}, {item.startDate} - {item.endDate || "Present"}<br />
        {item.degree && `${item.degree}`}
      </p>
    </div>
  );
};

export default EducationItem;
