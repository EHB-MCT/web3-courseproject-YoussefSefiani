import React, { useState } from "react";
import "./skills.css";
import Typewriter from "typewriter-effect";
//import LoadingBar from 'react-top-loading-bar'
import "animate.css";
import Title from "../Title/Title";
import ProgressBar from "react-animated-progress-bar";
import data from "../../data/skills-data";

let Skills = (props) => {
  let skills = data.map((skill) => {
    return (
      <div className="skill" key={skill.id}>
        <span className="skill-name">{skill.name}</span>
        <ProgressBar
          content={skill.name}
          width="400px"
          height="10px"
          rect
          fontColor="white"
          percentage={skill.percentage}
          rectPadding="4px"
          rectBorderRadius="0px"
          trackPathColor="#5C6471"
          bgColor={skill.color}
          trackBorderColor="none"
        />
      </div>
    );
  });

  console.log(skills);

  return (
    <div className="skills-container">
      <Title title="Skill" />
      <div className="spacing"></div>
      <div className="skills-content">
        <div className="skills">{skills}</div>
      </div>
      <div className="spacing"></div>
    </div>
  );
};

export default Skills;
