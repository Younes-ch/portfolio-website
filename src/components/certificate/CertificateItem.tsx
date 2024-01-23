import { FaLink } from "react-icons/fa";

interface CertificateItemProps {
  item: {
    id: string;
    icon: string;
    provider: string;
    course: string;
    link: string;
    issueDate: string;
  };
}

const CertificateItem = ({ item }: CertificateItemProps) => {
  return (
    <div className="certificate-item grid items-center">
      <div className="certificate-icon">
        <img src={item.icon} alt="" />
      </div>
      <div className="certificate-info grid">
        <div className="certificate-info-l">
          <p className="certificate-provider">{item.provider}</p>
            <h3 className="certificate-course">{item.course}</h3>
          <a href={item.link} target="_blank" className="certificate-link text">
            <span>View Credential</span>
            <FaLink />
          </a>
        </div>
        <div className="certificate-info-r flex items-center justify-end">
          {item.issueDate}
        </div>
      </div>
    </div>
  );
};

export default CertificateItem;
