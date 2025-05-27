import React from 'react';
import './Projects.css';
import RentProjectImg from "../../assets/images/rent-project.png"
import ServSphereProjectImg from "../../assets/images/servsphere-project.png"

const projects = [
  {
    title: "Rent Dhundo – Real Estate Management",
    description: "A complete real estate platform to list, discover, and manage rental properties. Features include user roles (owner, tenant, admin), secure authentication, image uploads, dynamic search filters, and responsive design. Owners can create, edit, and delete listings, while users can explore properties with detailed info and a modern UI. Built for usability, performance, and scalability.",
    tech: ["React", "Context API", "Bootstrap CSS", "MongoDB", "NodeJS", "ExpressJS"],
    image: RentProjectImg,
    liveLink: "https://rent-dhundo.vercel.app",
    githubLink: "https://github.com/Ravi-Bhaskar/Rent_Dhundo"
  },
  {
    title: "ServSphere – Local Service Booking Platform",
    description: "ServSphere is a modern web application that connects users with trusted and top-rated local service providers. Whether it's home repairs, IT support, or personal care, the platform makes discovering, evaluating, and booking professionals effortless. Built to streamline the service hiring experience through verified profiles, user reviews, and smart categorization.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "RESTful API"],
    image: ServSphereProjectImg,
    liveLink: "https://servsphere.vercel.app",
    githubLink: "https://github.com/Ravi-Bhaskar/ServSphere"
  },
  // {
  //   title: "Todo List App",
  //   description: "A simple yet powerful task management tool built with React and localStorage.",
  //   tech: ["React", "Context API", "Tailwind CSS"],
  //   image: "/assets/images/todo.jpg",
  //   liveLink: "https://your-todo-app-link",
  //   githubLink: "https://github.com/your-repo/todo-app"
  // }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2><span>My</span> Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <img src={project.image} alt={project.title} />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tech-list">
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noreferrer">Live Demo</a>
                  <a href={project.githubLink} target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
