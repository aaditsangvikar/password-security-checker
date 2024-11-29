import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import ColorDisplay from "./ColorDisplay";

import "./styles/MainSection.css";

function processPassword(password) {
  let strength = 0;

  if (password.length > 4) {
    strength += 1;
  }

  if (password.length > 8) {
    strength += 1;
  }

  if (password.length > 12) {
    strength += 1;
  }

  if (password.match(/[a-z]/)) {
    strength += 1;
  }

  if (password.match(/[A-Z]/)) {
    strength += 1;
  }

  if (password.match(/[0-9]/)) {
    strength += 1;
  }

  if (password.match(/[$&+,:;=?@#|'<>.^*()%!-]/)) {
    strength += 1;
  }

  return strength;
}

function MainSection() {
  const [inputValue, setInputValue] = useState("");
  const [integerValue, setIntegerValue] = useState(0);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  const handleClick = () => {
    const integer = processPassword(inputValue);
    setIntegerValue(integer);
    console.log(integer);
  };
  return (
    <>
      <div className="password-strength">
        <h1>Password Strength Checker</h1>
        <div className="password-input">
          <Input value={inputValue} onChange={handleChange} />
          <Button onClick={handleClick}>Check Strength</Button>
        </div>

        <ColorDisplay integer={integerValue} />
      </div>
    </>
  );
}

export default MainSection;
