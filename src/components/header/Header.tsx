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
              <h1 className="header-name text-white">
                Younes Chouikh, <br />
                Software Developer
              </h1>
            </div>
            <p className="header-text text text-white">
              I'm a software developer based in Tunisia, I'm passionate about
              building software that solves real problems.
            </p>
          </div>
          <div className="header-contact">
            <ul className="contact-info-list grid text-white">
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaEnvelope size={13} />
                </span>
                <p className="info-item-text">
                  Email:{" "}
                  <span className="text">{EMAIL}</span>
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
