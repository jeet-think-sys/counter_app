import React from "react";
import { useSelector } from "react-redux";

import Button from "./Button";

const Buttons = ({ toggleSwitch, reset }) => {
  const { count, isCounting } = useSelector(({ count, isCounting }) => ({
    count,
    isCounting,
  }));

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
