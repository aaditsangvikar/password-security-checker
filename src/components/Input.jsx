import React from "react";
import "./styles/Input.css";

function Input({ value, onChange }) {
  return (
    <input
      className="input"
      type="password"
      placeholder="Enter your password"
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
