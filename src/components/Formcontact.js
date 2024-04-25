import "./FormStyles.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Formcontact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2s2x3m8", "template_vyzho55", form.current,"ioRX5kb1YSFO9uYed",
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="user_name">Name</label>
        <input type="text" id="user_name" name="user_name" />
        <label htmlFor="user_email">Email</label>
        <input type="email" id="user_email" name="user_email" />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="6" placeholder="Type your message here" />
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Formcontact;