import React from "react";
import { useSelector } from "react-redux";

const TimeStampList = () => {
  const details = useSelector(({ details }) => details);

  return (
    <ul>
      {details.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
};
export default TimeStampList;
