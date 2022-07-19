import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor,color }) {
  console.log(onChangeColor);
  function handleClick() {
    const newCOlor = getRandomColor();
    onChangeColor(newCOlor);
  }
  return (
    <div onClick={handleClick} className="child" style={{ backgroundColor: color }} />
  );
}

export default Child;
