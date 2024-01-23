import { FaLink } from "react-icons/fa";
import {
  DiamondLgBlue,
  DiamondLgGreen,
  DiamondLgOrange,
  DiamondLgPink,
  DiamondLgYellow,
} from "../../assets/image";

interface ExperienceItemProps {
  item: {
    id: string;
    startDate: string;
    endDate: string;
    position: string;
    diamondColors: string[];
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

const ExperienceItem = ({ item }: ExperienceItemProps) => {
  const showDiamondImage = (color: string) => {
    if (color === "Blue") return DiamondLgBlue;
    else if (color === "Green") return DiamondLgGreen;
    else if (color === "Orange") return DiamondLgOrange;
    else if (color === "Pink") return DiamondLgPink;
    else if (color === "Yellow") return DiamondLgYellow;
  };

  return (
    <div className="experience-item">
      <div className="exp-time flex items-center">
        <span className="start-time">{item.startDate}</span>
        <span>-</span>
        <div className="end-time">{item.endDate || "Present"}</div>
      </div>
      <div className="exp-postion flex items-center flex-wrap">
        <p className="exp-position-text">{item.position}</p>
        <div className="diamond-shapes-group">
          {item.diamondColors.map((color, index) => (
            <img key={index} src={showDiamondImage(color)} alt="" />
          ))}
        </div>
      </div>
      <div className="exp-company flex items-center flex-wrap">
        <div className="company-logo">
          <img src={item.company.logo} alt={item.company.name} />
        </div>
        <p className="company-name">{item.company.name}</p>
        <p className="company-info">{item.company.info}</p>
      </div>
      <p className="exp-description text">{item.description}</p>
      <div className="exp-links">
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

export default ExperienceItem;
