import React from "react";
import Button from "./Button";
const Buttons = ({ toggleSwitch, reset, isCounting }) => {
  return (
    <div>
      <Button text={isCounting ? "Pause" : "Start"} onClick={toggleSwitch} />
      <Button text="Reset" onClick={reset} />
    </div>
  );
};
export default Buttons;
