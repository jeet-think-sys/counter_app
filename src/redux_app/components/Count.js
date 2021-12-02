import React from "react";

import { useSelector } from "react-redux";

const Count = () => {
  const count = useSelector(({ count }) => count);

  return <h3>{count}</h3>;
};

export default Count;
