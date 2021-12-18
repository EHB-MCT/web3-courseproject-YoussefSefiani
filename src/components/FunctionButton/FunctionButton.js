import React, { useState } from "react";
import "./functionButton.css";
import "animate.css";

let FunctionButton = (props) => {
  return (
    <a href={props.redirect} target="_blank" rel="noreferrer">
      <button className={props.className} id={props.id}>
        <div>
          <span className="purple">{props.name}</span>
          <span className="yellow-hooks">()</span>
          <span className="white">;</span>
        </div>
      </button>
    </a>
  );
};

export default FunctionButton;
