import React from "react";
import "./intro.css";
import Typewriter from "typewriter-effect";
import { withRouter } from "react-router-dom";

let Intro = ({ history }) => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .changeDelay(40)
          .typeString("npm i portfolio-youssef-sefiani")
          .changeDelay(100)
          .pasteString("<br>Installing homepage...</br>")
          .pasteString(`<div>Installing projects...</div>`)
          .pasteString(`<div>Installing skills...</div>`)
          .pasteString(`<div>Installing contact...</div>`)
          .pasteString(`<div>Installing additional packages...</div>`)
          .pasteString(`<div>Installation finished</div>`)
          .pasteString(`<div>Launching app...</div>`)
          .pasteString(`<div>Redirecting...</div>`)
          .start()
          .callFunction(() => {
            history.push("/home");
          });
      }}
    />
  );
};

export default Intro;
