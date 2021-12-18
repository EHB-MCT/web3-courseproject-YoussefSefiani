import React, { useState } from "react";
import "./container.css";
import Typewriter from "typewriter-effect";
import Side from "../Side/Side";
import "animate.css";
import Home from "../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Menu from "../Menu/Menu";
import Contact from "../Contact/Contact";
import ReactPageScroller from "react-page-scroller";

let Container = (props) => {
  return (
    <Side>
      {/*  <Menu /> */}
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Side>
  );
};

export default Container;
