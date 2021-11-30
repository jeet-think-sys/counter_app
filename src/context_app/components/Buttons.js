import React, { useContext } from "react";
import Button from "./Button";

import CounterContext from "./Context";

const Buttons = ({ toggleSwitch, reset }) => {
  const { count, isCounting } = useContext(CounterContext);

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
