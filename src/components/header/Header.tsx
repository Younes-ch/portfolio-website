import { AvatarPNG } from "../../assets/image";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import DATA, { ADDRESS, EMAIL, PHONE } from "../../constants/data";
import SocialLinkItem from "./SocialLinkItem";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content grid items-center">
          <div className="header-intro">
            <div className="flex items-end header-intro-wrapper">
              <img src={AvatarPNG} alt="avatar" className="avatar" />
              <h1 className="header-name">
                Younes Chouikh, <br />
                Software Engineering Student |
                <br /> Full Stack .NET
              </h1>
            </div>
            <p className="header-text text text-white">
              🚀 𝟏𝐬𝐭 𝐘𝐞𝐚𝐫 𝐒𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫𝐢𝐧𝐠 𝐒𝐭𝐮𝐝𝐞𝐧𝐭 | .𝐍𝐄𝐓 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫 | 𝐅𝐨𝐫𝐦𝐞𝐫
              𝐞𝐜𝐡𝐧𝐢𝐜𝐚𝐥 𝐋𝐞𝐚𝐝 𝐚𝐭 𝐆𝐨𝐨𝐠𝐥𝐞 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 𝐒𝐭𝐮𝐝𝐞𝐧𝐭 𝐂𝐥𝐮𝐛 𝐈𝐒𝐒𝐀𝐓𝐒𝐨 <br />
              I'm currently pursuing my degree in Software Engineering, driven
              by a passion for solving real-world problems through code. With a
              strong love for <strong>C#</strong> and the <strong>.NET</strong>{" "}
              ecosystem, I am actively learning and expanding my expertise in
              this space. I thrive in environments where I can continuously
              learn and grow, and I'm always eager to dive into new technologies
              to enhance my skills and knowledge. Feel free to connect with me,
              I'm always open to discussing new ideas, projects, or
              opportunities to collaborate!
            </p>
          </div>
          <div className="header-contact">
            <ul className="contact-info-list grid text-white">
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaEnvelope size={13} />
                </span>
                <p className="info-item-text">
                  Email: <span className="text">{EMAIL}</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaPhone size={13} />
                </span>
                <p className="info-item-text">
                  Phone: <span className="text">{PHONE}</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaLocationDot size={14} />
                </span>
                <p className="info-item-text">
                  Address: <span className="text">{ADDRESS}</span>
                </p>
              </li>
            </ul>
            <ul className="contact-social-list flex items-center">
              {DATA.socialLinks.map((link) => (
                <SocialLinkItem key={link.id} item={link} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
