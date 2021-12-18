import React, { useState } from "react";
import "./form.css";
import "animate.css";
import FunctionButton from "../FunctionButton/FunctionButton";

let Form = (props) => {
  return (
    <div className="form">
      <div id="name-container" className="form-item">
        <label for="name">Full name</label>
        <br />
        <input name="name" className="form-input" id="name-input" />
      </div>
      <div id="email-container" className="form-item">
        <label for="email">Email</label>
        <br />
        <input name="email" className="form-input" id="email-input" />
      </div>
      <div id="message-container" className="form-item">
        <label for="message">Message</label>
        <br />
        <textarea name="message" className="form-input" id="message-input" />
      </div>
      <FunctionButton name="send" className="button" id="send-button" />
      <div className="contact-buttons">
        <FunctionButton
          name="openInstagram"
          className="button contact-button"
          id="instagram-button"
          redirect="https://www.instagram.com/y.sfnn/"
        />
        <FunctionButton
          name="openLinkedIn"
          className="button contact-button"
          id="linkedIn-button"
          redirect="https://www.linkedin.com/in/youssef-sefiani/"
        />
        <FunctionButton
          name="openMail"
          className="button contact-button"
          id="mail-button"
          redirect="mailto:youssef.sefiani@hotmail.com"
        />

        <FunctionButton
          name="openPhoneNumber"
          className="button contact-button"
          id="phone-button"
          redirect="tel:+32489245740"
        />
      </div>
    </div>
  );
};

export default Form;
