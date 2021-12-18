import React from "react";
import "./side.css";
import Typewriter from "typewriter-effect";
import EditorLine from "../EditorLine/EditorLine";

let Side = (props) => {
  return (
    <div className="side-container">
      <EditorLine />
      <div className="content">{props.children}</div>
      <div className="git-lines">
        <div className="git one"></div>
        <div className="git two"></div>
        <div className="git three"></div>
        <div className="git three"></div>
        <div className="git three"></div>
      </div>
    </div>
  );
};

export default Side;
