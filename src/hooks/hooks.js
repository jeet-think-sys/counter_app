import React, { useState, useEffect, useMemo } from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

export const useCounter = (defaultValue = 0, action) => {
  const [value, setValue] = useState(defaultValue);
  const [countInterval, setCountInterval] = useState(null);

  useEffect(() => {
    if (value === 0) {
      pause();
    }
    if (action) {
      action(value);
    }
  }, [value]);
  const start = () => {
      console.log();
      if (value) {
        setCountInterval(
          setInterval(() => {
            setValue((val) => val - 1);
          }, 1000)
        );
      }
    },
    pause = () => {
      clearInterval(countInterval);
      setCountInterval(null);
    };

  return [value, { start, pause, setter: setValue }];
};

export const useActions = (actions, deps) => {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : [dispatch]
  );
};
