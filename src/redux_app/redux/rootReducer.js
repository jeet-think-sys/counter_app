import getInitialState from "./initialState";

import {
  SET_COUNT,
  SET_INPUT_VALUE,
  SET_COUNTS,
  SET_COUNT_DETAILS,
  SET_DETAILS,
  SET_IS_COUNTING,
} from "./actionTypes";

const rootReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case SET_INPUT_VALUE: {
      console.log("action", action);
      return {
        ...state,
        inputValue: action.inputValue,
        count: action.inputValue,
      };
    }
    case SET_COUNT:
      return {
        ...state,
        count: action.count,
      };
    case SET_COUNTS:
      return {
        ...state,
        counts: action.counts,
      };
    case SET_COUNT_DETAILS:
      return {
        ...state,
        countDetails: action.countDetails,
      };
    case SET_DETAILS:
      return {
        ...state,
        details: action.details,
      };

    case SET_IS_COUNTING:
      return {
        ...state,
        isCounting: action.isCounting,
      };
    default:
      return state;
  }
};

export default rootReducer;
