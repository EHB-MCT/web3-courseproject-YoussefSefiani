import React, { useState } from "react";
import "./about.css";
import Typewriter from "typewriter-effect";
import "animate.css";
import Title from "../Title/Title";
import ProfileCard from "../ProfileCard/ProfileCard";

let About = (props) => {
  return (
    <div className="about-container" id="about">
      <Title title="About" />
      <div className="description-and-profile-card">
        <div className="description-container">
          <div className="description">
            I am an energetic and ambitious person who has developed a mature
            and responsible approach to any challenge that I undertake. I love
            to work in a team yet I can be independent when necessary.
          </div>
          <div className="description">
            I am currently looking for my first opportunity into the
            professional world. I am a young developer with a passion for both
            front-end and back-end technologies.
          </div>
        </div>
        <ProfileCard />
      </div>
    </div>
  );
};

export default About;
