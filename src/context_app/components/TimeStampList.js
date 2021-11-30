import React, { useContext } from "react";

import CounterContext from "./Context";

const TimeStampList = () => {
  const { details } = useContext(CounterContext);
  return (
    <ul>
      {details.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
};
export default TimeStampList;
