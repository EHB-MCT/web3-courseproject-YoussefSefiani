import React from "react";
import "./title.css";
import "animate.css";

let Container = (props) => {
  return (
    <h1>
      <span className="new">new </span>
      <span className="class">{props.title}</span>
      <span className="yellow-hooks">()</span>
      <span className="white">;</span>
    </h1>
  );
};

export default Container;
