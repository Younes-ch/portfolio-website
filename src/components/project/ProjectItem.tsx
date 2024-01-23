import { FaLink } from "react-icons/fa";

interface ProjectItemProps {
  item: {
    id: string;
    title: string;
    description: string;
    finishDate: string;
    links: {
      label: string;
      url: string;
    }[];
    tags: string[];
  };
}

const ProjectItem = ({ item }: ProjectItemProps) => {
  return (
    <div className="project-item">
      <div className="project-time flex items-center">
        <span className="start-time">{item.finishDate}</span>
      </div>
      <div className="project-title flex items-center flex-wrap">
        <p className="project-name">{item.title}</p>
      </div>
      <p className="project-description text">{item.description}</p>
      <div className="project-tags">
        {item.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="project-links">
        {item.links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green"
          >
            <span>{link.label}</span>
            <FaLink />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
