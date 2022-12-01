import React from "react";

import Card from "react-bootstrap/Card";

function ProjectCard({ title, image, description, link, gitHub }) {
  return (
    <Card style={{ width: "40%" }}>
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
          <a href={link} target="_blank">
            Deployed Link
          </a>{" "}
          <a href={gitHub} target="_blank">
            Github Repo
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
