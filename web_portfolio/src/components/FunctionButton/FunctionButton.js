import React, { useState } from "react";
import "./functionButton.css";
import "animate.css";

let FunctionButton = (props) => {
  return (
    <div className={props.container}>
      <a
        href={props.redirect}
        target="_blank"
        rel="noreferrer"
        onClick={props.onClick}
      >
        <button className={props.className} id={props.id}>
          <div>
            <span className="purple">{props.name}</span>
            <span className="yellow-hooks">()</span>
            <span className="white">;</span>
          </div>
        </button>
      </a>
    </div>
  );
};

export default FunctionButton;
