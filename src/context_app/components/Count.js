import React, { useContext } from "react";

import CounterContext from "./Context";

const Count = () => {
  const { count } = useContext(CounterContext);

  return <h3>{count}</h3>;
};

export default Count;
