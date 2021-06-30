import React from "react";
import "./colorPicker.css";

const ColorPicker = ({ colors }) => (
  <div>
    <h1>Color Picker</h1>
    <div>
      {colors.map(({ label, color }) => (
        <span
          className="colorPicker__option"
          key={label}
          style={{ backgroundColor: color }}
        ></span>
      ))}
    </div>
  </div>
);

export default ColorPicker;
