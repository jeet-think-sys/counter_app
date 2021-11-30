import React from "react";

const CountList = ({ details }) => {
  return (
    <ul>
      {details.map((item) => {
        return <li>{item}</li>;
      })}
    </ul>
  );
};
export default CountList;
