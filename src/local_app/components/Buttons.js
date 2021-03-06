import React from "react";
import Button from "./Button";
const Buttons = ({ count, toggleSwitch, reset, isCounting }) => {
  return (
    <div>
      {count ? (
        <Button text={isCounting ? "Pause" : "Start"} onClick={toggleSwitch} />
      ) : null}
      <Button text="Reset" onClick={reset} />
    </div>
  );
};
export default Buttons;
