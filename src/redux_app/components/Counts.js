import React from "react";
import { useSelector } from "react-redux";

const Counts = () => {
  const { start, pause } = useSelector(({ counts }) => counts);

  return (
    <div>
      Counts: ( Start: {start}, Pause: {pause} )
    </div>
  );
};

export default Counts;
