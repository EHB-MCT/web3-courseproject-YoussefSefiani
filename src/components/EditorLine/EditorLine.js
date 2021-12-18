import React, { useState } from "react";
import "./editorLine.css";
import Menu from "../Menu/Menu";

let EditorLine = (props) => {
  let height = window.screen.height;
  console.log("height", height);
  let amountOfLines = (height / height) * 26 * 5;
  let linesArr = [];

  function displayLines() {
    for (let i = 0; i < amountOfLines; i++) {
      linesArr.push(
        <div className="number" key={i}>
          {i}
        </div>
      );
    }
    return linesArr;
  }

  return <div className="code-lines">{displayLines()}</div>;
};

export default EditorLine;
