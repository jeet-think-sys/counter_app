const COUNTS_DEFAULT_VALUE = { start: 0, pause: 0 };

const getInitialState = () => ({
  isCounting: false,
  details: [],
  countDetails: [],
  counts: COUNTS_DEFAULT_VALUE,
  count: 0,
  inputValue: 0,
});
export default getInitialState;
