import DATA from "../../constants/data";
import Title from "../common/Title";
import CertificateItem from "./CertificateItem";

const Certificate = () => {
  return (
    <div className="certificate-sc resume-block">
      <div className="container">
        <div className="certificate-content dotted-border-left">
          <Title titleText="Certificates" />
          <div className="certificate-list grid">
            {DATA.certificates.map((item) => (
              <CertificateItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
