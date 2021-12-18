import React, { useState } from "react";
import "./projects.css";
import Typewriter from "typewriter-effect";
import "animate.css";
import Title from "../Title/Title";
import data from "../../data/projects-data";

let Projects = (props) => {
  let projects = data.map((project) => {
    return (
      <li className="project-list-item">
        <a href={project.url} target="_blank" rel="noopener">
          <div className="circle">{project.name}</div>
          <img src={project.imageUrl} alt="project" className="project" />
        </a>
      </li>
    );
  });
  return (
    <div className="project-container">
      <Title title="Project" />
      <div className="projects-container">
        <ul className="projects">{projects}</ul>
      </div>
    </div>
  );
};

/* const styles = {
  project: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    filter: "brightness(0.4)",
    height: "300px",
    width: "300px",
    "&:hover": {
      border: "2px solid red",
    },
  },
}; */

export default Projects;
