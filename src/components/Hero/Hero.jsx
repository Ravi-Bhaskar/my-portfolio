import React from "react";
import "./Hero.css";
import profileImg from "../../assets/images/profile-pic.jpg"; // Replace with your image
import htmlImg from "../../assets/images/html.png";
import cssImg from "../../assets/images/css.png";
import jsImg from "../../assets/images/js.png";
import reactImg from "../../assets/images/react.png";
import { Link as ScrollLink } from "react-scroll";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Hero = () => {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-left">
          <h3>Hello, World!</h3>
          <h1>
            I'm <span>Ravi Bhaskar</span>
          </h1>
          <h2>Frontend Developer & React Enthusiast</h2>
          <p>
            I craft user-friendly, scalable web apps using modern JavaScript
            tools like React, Redux, and Tailwind. Let's build something amazing
            together!
          </p>
          <div className="hero-buttons">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="btn primary"
            >
              Hire Me
            </ScrollLink>
            <button
              onClick={() => window.open("/Ravi_Bhaskar_Resume.pdf", "_blank")}
              className="btn outline"
            >
              View Resume
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img src={profileImg} alt="Profile" className="profile-img" />

          <div className="social-links">
            <Link to="https://linkedin.com">
              <FaLinkedinIn />
            </Link>
            <Link to="https://instagram.com">
              <FaInstagram />
            </Link>
            <Link to="https://twitter.com">
              <FaTwitter />
            </Link>
            <Link to="https://facebook.com">
              <FaFacebookF />
            </Link>
            <Link to="https://youtube.com">
              <FaYoutube />
            </Link>
            <Link to="https://github.com">
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>

      <div className="skill-icons">
        <div className="skill-items">
          <img src={htmlImg} alt="HTML" />
          <span>HTML</span>
        </div>
        <div className="skill-items">
          <img src={cssImg} alt="CSS" />
          <span>CSS</span>
        </div>
        <div className="skill-items">
          <img src={jsImg} alt="JavaScript" />
          <span>JavaScript</span>
        </div>
        <div className="skill-items">
          <img src={reactImg} alt="React" />
          <span>React</span>
        </div>
      </div>

      <button className="view-more-btn" onClick={scrollToSkills}>
        View More
      </button>
    </section>
  );
};

export default Hero;
