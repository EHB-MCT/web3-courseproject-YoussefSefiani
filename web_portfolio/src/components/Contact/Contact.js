import React, { useState } from "react";
import "./contact.css";
import "animate.css";
import Title from "../Title/Title";
import MapContainer from "../Map/MapContainer";
import Form from "../Form/Form";

let Contact = (props) => {
  return (
    <div className="contact-container">
      <Title title="Contact" />
      <div className="form-and-map">
        <Form />
        <MapContainer />
      </div>
    </div>
  );
};

export default Contact;
