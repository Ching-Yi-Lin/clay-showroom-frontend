import React, { useState } from "react";
import Button from "./button";

const FORM_ENDPOINT = ""; // form results will go here

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="input">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          required
        />
      </div>
      <div className="input">
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
        />
      </div>
      <div className="input">
        <textarea
          placeholder="Ask a question/share your thoughts!"
          name="message"
          required
        />
      </div>
      <div className="input">
        <button id="submit-button" type="submit" color="blue">
          SUBMIT
        </button>
      </div>
    </form>
  );
};

<style jsx>
{`

`}
</style>

export default ContactForm;