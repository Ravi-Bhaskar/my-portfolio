import React, { useState } from "react";
import "./Navbar.css";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, SetIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleMenu = () => {
    SetIsMenuOpen((prev) => !prev);
  };

  const togglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <h1>
            <span>Ravi Bhaskar</span>
          </h1>

          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li>
              <ScrollLink
                className="menu-item"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70} // adjust if your navbar is sticky
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className="menu-item"
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70} // adjust if your navbar is sticky
              >
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className="menu-item"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100} // adjust if your navbar is sticky
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className="menu-item"
                to="certificates"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100} // adjust if your navbar is sticky
              >
                Certificates
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className="menu-item"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70} // adjust if your navbar is sticky
              >
                Contact Me
              </ScrollLink>
            </li>
            <button className="about-btn" onClick={togglePopup}>
              About Me
            </button>
          </ul>

          <button
            className={`menu-btn ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* ✅ Modal Popup */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="popup-close" onClick={togglePopup}>
              ×
            </button>
            <h2>ABOUT ME</h2>
            <p>
              Hi! I'm a passionate Front-End Developer specializing in React. I
              love building user-friendly, modern web applications and
              continuously improving my skills to stay updated with new
              technologies.
            </p>
            <p>
              My goal is to create fast, accessible, and beautiful websites that
              make a difference. When I'm not coding, I enjoy design, learning
              new tools, and experimenting with side projects.
            </p>

            <h3>Tech Stack:</h3>
            <ul className="tech-list">
              <li>React.js</li>
              <li>Redux Toolkit</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5 & CSS3</li>
              <li>Tailwind CSS</li>
              <li>Vite</li>
              <li>Git & GitHub</li>
            </ul>
            {/* You can add a small contact form or email link here */}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
