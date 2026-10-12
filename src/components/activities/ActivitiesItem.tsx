import { FaLink } from "react-icons/fa";
import Description from "../common/Description";

interface ActivitiesItemProps {
  item: {
    id: string;
    startDate: string;
    endDate: string;
    position: string;
    tags: string[];
    company: {
      logo: string;
      name: string;
      info: string;
    };
    description: string;
    links: {
      label: string;
      url: string;
    }[];
  };
}

const ActivitiesItem = ({ item }: ActivitiesItemProps) => {
  return (
    <div className="activities-item">
      <div className="act-time flex items-center">
        <span className="start-time">{item.startDate}</span>
        <span>-</span>
        <div className="end-time">{item.endDate || "Present"}</div>
      </div>
      <div className="act-position flex items-center flex-wrap">
        <p className="act-position-text">{item.position}</p>
      </div>
      <div className="act-company flex items-center flex-wrap">
        <div className="company-logo">
          <img src={item.company.logo} alt={item.company.name} />
        </div>
        <p className="company-name">{item.company.name}</p>
        <p className="company-info">{item.company.info}</p>
      </div>
      <Description text={item.description} className="act-description" />
      <div className="tags">
        {item.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="act-links">
        {item.links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green"
          >
            <FaLink />
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesItem;
