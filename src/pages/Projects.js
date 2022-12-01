import React from "react";
import ProjectCard from "../components/ProjectCard";
import pwgenerator from "../Images/pwgenerator.png";
import ecommerce from "../Images/e-comm.png";
import noteTaker from "../Images/noteTaker.png";
import socialNet from "../Images/social-network-api.png";
import empTracker from "../Images/employeeTracker.png";
import Horiseon from "../Images/Horiseon.png";

function Projects() {
  const myProjects = [
    {
      id: 1,
      title: "password-generator",
      image: pwgenerator,
      description: "",
      link: "",
      gitHub: "",
    },
    {
      id: 2,
      title: "e-commerce",
      image: ecommerce,
      description: "",
      link: "",
      gitHub: "",
    },
    {
      id: 3,
      title: "note-taker",
      image: noteTaker,
      description: "",
      link: "",
      gitHub: "",
    },
    {
      id: 4,
      title: "Social Network API",
      image: socialNet,
      description: "",
      link: "",
      gitHub: "",
    },
    {
      id: 5,
      title: "Employee Tracker",
      image: empTracker,
      description: "",
      link: "",
      gitHub: "",
    },
    {
      id: 6,
      title: "Horiseon Marketing",
      image: Horiseon,
      description: "jutdudmhuyrmski",
      link: "https://www.google.com",
      gitHub: "https://www.google.com",
    },
  ];
  return (
    <div className="d-flex flex-wrap justify-content-evenly align-items-center">
      {myProjects.map((project) => (
        <ProjectCard
          title={project.title}
          image={project.image}
          description={project.description}
          link={project.link}
          gitHub={project.gitHub}
        />
      ))}
    </div>
  );
}

export default Projects;
