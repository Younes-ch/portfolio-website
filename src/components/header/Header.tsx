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
                Software Engineering Student
              </h1>
            </div>
            <p className="header-text text text-white">
              🚀 𝙁𝙞𝙣𝙖𝙡 𝙔𝙚𝙖𝙧 𝙎𝙤𝙛𝙩𝙬𝙖𝙧𝙚 𝙀𝙣𝙜𝙞𝙣𝙚𝙚𝙧𝙞𝙣𝙜 𝙎𝙩𝙪𝙙𝙚𝙣𝙩 | 𝙁𝙪𝙡𝙡 𝙎𝙩𝙖𝙘𝙠 𝘼𝙄 |
              𝙁𝙤𝙧𝙢𝙚𝙧 𝙏𝙚𝙘𝙝𝙣𝙞𝙘𝙖𝙡 𝙇𝙚𝙖𝙙 𝙖𝙩 𝙂𝙤𝙤𝙜𝙡𝙚 𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧 𝙎𝙩𝙪𝙙𝙚𝙣𝙩 𝘾𝙡𝙪𝙗 𝙄𝙎𝙎𝘼𝙏𝙎𝙤{" "}
              <br />
              <br />
              I'm currently pursuing my degree in Software Engineering, driven
              by a passion for solving real-world problems through code. I am
              actively learning and expanding my expertise in technology and AI. I
              thrive in environments where I can continuously learn and grow,
              and I'm always eager to dive into new technologies to enhance my
              skills and knowledge. Feel free to connect with me, I'm always
              open to discussing new ideas, projects, or opportunities to
              collaborate!
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
