import React from "react";
import "./Footer.scss";
import logo from "../assets/logo.jpg";
import {
  TiSocialYoutube,
  TiSocialLinkedin,
  TiSocialGithub,
} from "react-icons/ti";
import { Link } from "react-router-dom";
const Footer = ({isDarkMode}) => {
  const date = new Date();
  return (
    <>
      <footer className={`footer ${isDarkMode?'hero-colorMode':''}`}>
        <img src={logo} alt="" />
        <div className="socialMedia">
          <a href="https://www.youtube.com/c/CampusX-official" target="blank">
            <TiSocialYoutube style={{ fill: "#FF0000" }} />
          </a>
          <a href="https://www.linkedin.com/company/13204711/" target="blank">
            <TiSocialLinkedin style={{ fill: "#0077B5" }} />
          </a>
          <a href="https://github.com/campusx-official" target="blank">
            <TiSocialGithub style={{ fill: "white" }} />
          </a>
        </div>
        <div className="footerLinks">
          <Link to="/termsofuse">Terms of use</Link>
          <Link to="/privacypolicy">Privacy policy</Link>
          <Link to="/refundpolicy">Refund policy</Link>
          <Link to="/needhelp">Contact Us</Link>
        </div>
        <span>
          <span>C</span>ampus<span>X</span> © {date.getFullYear()}
        </span>
      </footer>
    </>
  );
};

export default Footer;
