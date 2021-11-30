import { createContext } from "react";

const COUNTS_DEFAULT_VALUE = { start: 0, pause: 0 };

const Context = createContext({
  isCounting: false,
  details: [],
  countDetails: [],
  counts: COUNTS_DEFAULT_VALUE,
  count: 0,
});

export default Context;
