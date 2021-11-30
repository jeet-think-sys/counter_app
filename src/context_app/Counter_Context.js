import React, { useState, useEffect } from "react";

import { useCounter } from "../hooks/hooks";
import CounterContext from "./components/Context";

import Input from "./components/Input";
import Count from "./components/Count";
import Counts from "./components/Counts";
import Buttons from "./components/Buttons";
import CountList from "./components/CountList";
import TimeStampList from "./components/TimeStampList";

const COUNTS_DEFAULT_VALUE = { start: 0, pause: 0 };

const Counter = () => {
  const [details, setDetails] = useState([]);
  const [inputValue, setInputValue] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [countDetails, setCountDetails] = useState([]);
  const [counts, setCounts] = useState(COUNTS_DEFAULT_VALUE);

  const [count, { start, pause, setter: setCount }] = useCounter(0);

  useEffect(() => {
    if (count === 0 && inputValue !== 0) {
      updateList(false);
      updateCount("pause", counts.pause + 1);
      setIsCounting(false);
    }
  }, [count]);
  const toggleSwitch = () => {
      if (count === 0) {
        pause();
        updateCount("pause", counts.pause + 1);
        setIsCounting(false);
      }
      if (isCounting) {
        pause();
        updateList(false);
        updateCount("pause", counts.pause + 1);
      } else {
        start();
        updateList(true);
        updateCount("start", counts.start + 1);
      }
      setIsCounting(!isCounting);
    },
    getCount = ({ target }) => {
      const value = target.value;
      setCount(value);
      setInputValue(value);
      pause();
    },
    updateList = (isCounting) => {
      const message =
        (isCounting ? "Start at " : "Pause at ") + new Date().toString();
      const countMessage = (isCounting ? "Start at " : "Pause at ") + count;
      setDetails([...details, message]);
      setCountDetails([...countDetails, countMessage]);
    },
    updateCount = (name, val) => {
      setCounts({ ...counts, [name]: val });
    },
    reset = () => {
      pause();
      setDetails([]);
      setCountDetails([]);
      setCounts(COUNTS_DEFAULT_VALUE);
      setCount(inputValue);
      setIsCounting(false);
    };

  return (
    <CounterContext.Provider
      value={{ isCounting, details, countDetails, counts, count }}
    >
      <div>
        <Input value={inputValue} name="count" onChange={getCount} />
        <Count />
        <Buttons toggleSwitch={toggleSwitch} reset={reset} />
        <Counts />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TimeStampList />
          <CountList />
        </div>
      </div>
    </CounterContext.Provider>
  );
};

export default Counter;
