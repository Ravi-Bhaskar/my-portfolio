import React, { useState } from "react";
import "./Skills.css";

const skillData = {
  frontend: [
    { name: "HTML", percent: 85 },
    { name: "CSS", percent: 80 },
    { name: "JavaScript", percent: 80 },
    { name: "React", percent: 75 },
  ],
  backend: [
    { name: "NodeJS", percent: 70 },
    { name: "ExpressJS", percent: 75 },
    { name: "MongoDB", percent: 70 },
  ],
  tools: [
    { name: "Git & GitHub", percent: 60 },
    { name: "Bootstrap", percent: 85 },
    { name: "Tailwind CSS", percent: 70 },
  ],
  soft: [
    { name: "Problem-solving", percent: 75 },
    { name: "Collaboration", percent: 70 },
    { name: "Attention to Detail", percent: 75 },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section className="skills-section" id="skills">
      <h2><span>My</span> Skills</h2>
      <div className="skills-wrapper">
        <div className="skills-sidebar">
          {["frontend", "backend", "tools", "soft"].map((category) => (
            <button
              key={category}
              className={`tab-btn ${activeTab === category ? "active" : ""}`}
              onClick={() => setActiveTab(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)} Skills
            </button>
          ))}
        </div>

        <div className="skills-display">
          <h3>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Skills</h3>
          <div className="skill-bars">
            {skillData[activeTab].map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-name">{skill.name}</div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
                <div className="skill-percent">{skill.percent}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;