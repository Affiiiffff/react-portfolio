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
      description: "Made password generator that follows a specific criteria",
      link: "https://affiiiffff.github.io/random-password-generator/",
      gitHub: "https://github.com/Affiiiffff/random-password-generator",
    },
    {
      id: 2,
      title: "e-commerce",
      image: ecommerce,
      description:
        "For this application I want a back end for my e-commerce website that uses the latest technologies so that my company can compete with other e-commerce companies.",
      link: "https://affiiiffff.github.io/e-commerce/",
      gitHub: "https://github.com/Affiiiffff/e-commerce",
    },
    {
      id: 3,
      title: "note-taker",
      image: noteTaker,
      description:
        "This application is used to write and save notes. It uses Express.js back end and will save and retrieve note data from a JSON file.",
      link: "https://affiiiffff.github.io/note-taker/",
      gitHub: "https://github.com/Affiiiffff/note-taker",
    },
    {
      id: 4,
      title: "Social Network API",
      image: socialNet,
      description:
        "The purpose of this project is to build an API for a social network web application where users can create a friends list, share their thoughts and create reactions.",
      link: "https://affiiiffff.github.io/social-network-api/",
      gitHub: "https://github.com/Affiiiffff/social-network-api",
    },
    {
      id: 5,
      title: "Employee Tracker",
      image: empTracker,
      description:
        "This application is designed to create a company database to keep track of employee information. Employers are able to search through employees by department, role, or name. Through this app, they are also able to add and delete employees, roles, and departments.",
      link: "https://affiiiffff.github.io/employee-management-system/",
      gitHub: "https://github.com/Affiiiffff/employee-management-system",
    },
    {
      id: 6,
      title: "Horiseon Marketing",
      image: Horiseon,
      description:
        "In this task the codebase needed to follow accessibility standards so that the site is optimized for search engines. Improved the codebase for long-term sustainability. Made sure the code is functioning correctly. consolidated the CSS selectors and properties, organizing them to follow the semantic structure of the HTML elements, and including comments before each element or section of the page.",
      link: "https://affiiiffff.github.io/horiseon-marketing/",
      gitHub: "https://github.com/Affiiiffff/horiseon-marketing",
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
