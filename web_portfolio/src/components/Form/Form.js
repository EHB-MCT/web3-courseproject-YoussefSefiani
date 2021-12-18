import React, { useState } from "react";
import "./form.css";
import "animate.css";
import FunctionButton from "../FunctionButton/FunctionButton";
import axios from "axios";

let Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let nameInput = "";
  let emailInput = "";
  let messageInput = "";

  function submitForm() {
    axios
      .post("https://db-api-portfolio-web3.herokuapp.com/contact", {
        name: name,
        mail: email,
        message: message,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function clearFields() {
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }

  return (
    <div className="form">
      <div id="name-container" className="form-item">
        <label htmlFor="name">Full name</label>
        <br />
        <input
          name="name"
          className="form-input"
          id="name-input"
          ref={(el) => (nameInput = el)}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div id="email-container" className="form-item">
        <label htmlFor="email">Email</label>
        <br />
        <input
          name="email"
          className="form-input"
          id="email-input"
          ref={(el) => (emailInput = el)}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div id="message-container" className="form-item">
        <label htmlFor="message">Message</label>
        <br />
        <textarea
          name="message"
          className="form-input"
          id="message-input"
          ref={(el) => (messageInput = el)}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <FunctionButton
        name="send"
        className="button"
        id="send-button"
        onClick={() => {
          submitForm();
          clearFields();
        }}
      />
      <div className="contact-buttons">
        <FunctionButton
          container="a"
          name="openInstagram"
          className="button contact-button"
          id="instagram-button"
          redirect="https://www.instagram.com/y.sfnn/"
        />
        <FunctionButton
          container="a"
          name="openLinkedIn"
          className="button contact-button"
          id="linkedIn-button"
          redirect="https://www.linkedin.com/in/youssef-sefiani/"
        />
        <FunctionButton
          container="a"
          name="openMail"
          className="button contact-button"
          id="mail-button"
          redirect="mailto:youssef.sefiani@hotmail.com"
        />

        <FunctionButton
          container="a"
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
