import React from "react";
import "./styles/ColorDisplay.css";

function ColorDisplay({ integer }) {
  let color;
  if (integer < 2) {
    color = "red";
  } else if (integer < 4) {
    color = "yellow";
  } else {
    color = "#00ff00";
  }

  let text;
  if (integer < 2) {
    text = "Weak";
  } else if (integer < 4) {
    text = "Medium";
  } else {
    text = "Strong";
  }
  return (
    <div className="colorDisplay" style={{ backgroundColor: color }}>
      {text}
    </div>
  );
}

export default ColorDisplay;
