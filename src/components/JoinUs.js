import React, { useState } from "react";
import "../styles/joinUs.css";
import Signup from "./Signup";
import Hellouser from "./Hellouser";

export default function JoinUs() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const submitForm = () => {
    setFormSubmitted(true);
  };
  return (
    <div>
      {!formSubmitted ? <Signup submitForm={submitForm} /> : <Hellouser />}
    </div>
  );
}
