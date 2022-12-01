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
      Github: "",
    },
    {
      id: 2,
      title: "e-commerce",
      image: ecommerce,
      description: "",
      link: "",
      Github: "",
    },
    {
      id: 3,
      title: "note-taker",
      image: noteTaker,
      description: "",
      link: "",
      Github: "",
    },
    {
      id: 4,
      title: "Social Network API",
      image: socialNet,
      description: "",
      link: "",
      Github: "",
    },
    {
      id: 5,
      title: "Employee Tracker",
      image: empTracker,
      description: "",
      link: "",
      Github: "",
    },
    {
      id: 6,
      title: "Horiseon Marketing",
      image: Horiseon,
      description: "",
      link: "",
      Github: "",
    },
  ];
  return (
    <div>
      {myProjects.map((project) => (
        <ProjectCard
          title={project.title}
          image={project.image}
          description={project.description}
          link={project.link}
          GitHub={project.GitHub}
        />
      ))}
    </div>
  );
}

export default Projects;
