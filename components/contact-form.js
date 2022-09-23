import React, { useState } from "react";
import Button from "./button";

const FORM_ENDPOINT = "";

const ContactForm = () => {
  return (
    <form method="POST" target="_blank">
      <div className="input">
        <textarea
          className="comments"
          placeholder="Ask a question/share your thoughts!"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>

      <div className="input">
        <Button id="submit-button" text="SUBMIT" type="submit" />
      </div>
    </form>
  );
};

<style jsx>{``}</style>;

export default ContactForm;
