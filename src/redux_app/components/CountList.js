import React from "react";
import { useSelector } from "react-redux";

const CountList = () => {
  const details = useSelector(({ countDetails }) => countDetails);

  return (
    <ul>
      {details.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
};
export default CountList;
