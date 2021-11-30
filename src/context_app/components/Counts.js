import React, { useContext } from "react";

import CounterContext from "./Context";

const Counts = () => {
  const { counts } = useContext(CounterContext);

  return (
    <div>
      Counts: ( Start: {counts.start}, Pause: {counts.pause} )
    </div>
  );
};

export default Counts;
