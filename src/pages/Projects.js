import React from "react";
import ProjectCard from "../components/ProjectCard";
import pwgenerator from "../Images/pwgenerator.png";

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
      title: "password-generator",
      image: pwgenerator,
      description: "",
      link: "",
      Github: "",
    },
    {
      id: 3,
      title: "password-generator",
      image: pwgenerator,
      description: "",
      link: "",
      Github: "",
    },
    {
      id: 4,
      title: "password-generator",
      image: pwgenerator,
      description: "",
      link: "",
      Github: "",
    },
    {
      id: 5,
      title: "password-generator",
      image: pwgenerator,
      description: "",
      link: "",
      Github: "",
    },
    {
      id: 6,
      title: "password-generator",
      image: pwgenerator,
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
