import React from "react";

const TimeStampList = ({ details }) => {
  return (
    <ul>
      {details.map((item) => {
        return <li>{item}</li>;
      })}
    </ul>
  );
};
export default TimeStampList;
