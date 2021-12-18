import React, { useState } from "react";
import "./ProfileCard.css";
import "animate.css";

let ProfileCard = (props) => {
  return (
    <div className="profile-card-container">
      <div className="picture"></div>
      <div className="details">
        <div className="section">
          <div className="above">3</div>
          <div className="under">Years of experience</div>
        </div>
        <div className="section">
          <div className="above">10+</div>
          <div className="under">Projects</div>
        </div>
        <div className="section">
          <div className="above">10+</div>
          <div className="under">Technologies</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
