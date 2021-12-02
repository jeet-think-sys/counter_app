import {
  SET_COUNT,
  SET_INPUT_VALUE,
  SET_COUNTS,
  SET_COUNT_DETAILS,
  SET_DETAILS,
  SET_IS_COUNTING,
} from "./actionTypes";

export const setInputValue = (inputValue) => {
  return {
    type: SET_INPUT_VALUE,
    inputValue,
  };
};
export const setDetails = (details) => {
  return {
    type: SET_DETAILS,
    details,
  };
};
export const setCountDetails = (countDetails) => {
  return {
    type: SET_COUNT_DETAILS,
    countDetails,
  };
};
export const setCounts = (counts) => {
  return {
    type: SET_COUNTS,
    counts,
  };
};
export const setCount = (count) => {
  return {
    type: SET_COUNT,
    count,
  };
};
export const setIsCounting = (isCounting) => {
  return {
    type: SET_IS_COUNTING,
    isCounting,
  };
};
