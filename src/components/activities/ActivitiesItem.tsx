import { FaLink } from "react-icons/fa";
import {
  DiamondLgBlue,
  DiamondLgGreen,
  DiamondLgOrange,
  DiamondLgPink,
  DiamondLgYellow,
} from "../../assets/image";

interface ActivitiesItemProps {
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

const ActivitiesItem = ({ item }: ActivitiesItemProps) => {
  const showDiamondImage = (color: string) => {
    if (color === "Blue") return DiamondLgBlue;
    else if (color === "Green") return DiamondLgGreen;
    else if (color === "Orange") return DiamondLgOrange;
    else if (color === "Pink") return DiamondLgPink;
    else if (color === "Yellow") return DiamondLgYellow;
  };

  return (
    <div className="activities-item">
      <div className="act-time flex items-center">
        <span className="start-time">{item.startDate}</span>
        <span>-</span>
        <div className="end-time">{item.endDate || "Present"}</div>
      </div>
      <div className="act-postion flex items-center flex-wrap">
        <p className="act-position-text">{item.position}</p>
        <div className="diamond-shapes-group">
          {item.diamondColors.map((color, index) => (
            <img key={index} src={showDiamondImage(color)} alt="" />
          ))}
        </div>
      </div>
      <div className="act-company flex items-center flex-wrap">
        <div className="company-logo">
          <img src={item.company.logo} alt={item.company.name} />
        </div>
        <p className="company-name">{item.company.name}</p>
        <p className="company-info">{item.company.info}</p>
      </div>
      <div className="act-description text">{item.description.split("\n").map((i, key) => {
        return <p key={key}>{i}</p>;
      })}</div>
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
