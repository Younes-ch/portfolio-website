import { Link } from "react-router-dom";

interface SocialLinkItemProps {
  item: {
    id: string;
    icon: string;
    tooltip: string;
    url: string;
    download?: boolean;
  };
}

const SocialLinkItem = ({ item }: SocialLinkItemProps) => {
  return (
    <li className="social-item">
      {item.download ? (
        <a href={item.url} download="Resume.pdf">
          <img src={item.icon} />
          <span className="tooltip text">{item.tooltip}</span>
        </a>
      ) : (
        <Link to={item.url}>
          <img src={item.icon} />
          <span className="tooltip text">{item.tooltip}</span>
        </Link>
      )}
    </li>
  );
};

export default SocialLinkItem;
