import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">Ravi Bhaskar<span>.</span></h2>

        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>

        <p className="footer-text">
          © {new Date().getFullYear()} Ravi Bhaskar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
