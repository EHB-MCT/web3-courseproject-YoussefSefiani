import React, { useState } from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import "animate.css";
import { Link } from "react-scroll";
import FunctionButton from "../FunctionButton/FunctionButton";
let Home = (props) => {
  const [button, setButton] = useState(false);

  let displayButton = () => {
    setButton(true);
  };

  return (
    <div className="home-container">
      <div className="welcome-text">
        <Typewriter
          options={{
            cursor: null,
          }}
          onInit={(typewriter) => {
            typewriter
              .changeDelay(40)
              .typeString(`<div class="text">Hi;</div>`)
              .typeString(`<div class="text">I'm Youssef;</div>`)
              .typeString(`<div class="text">Full Stack Developer;</div>`)
              /*   .typeString(`<div class="text">Developer;</div>`) */
              .changeDelay(200)
              .start()
              .callFunction(() => displayButton());
          }}
        />
        {button ? (
          <Link activeClass="active" to="about" smooth={true} duration={750}>
            <FunctionButton
              name="next"
              className="animate__animated animate__bounceInRight button"
              id="next-button"
            />
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Home;
