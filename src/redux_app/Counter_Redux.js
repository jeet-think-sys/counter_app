import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useCounter, useActions } from "../hooks/hooks";

import * as counterActions from "./redux/actions";

import Input from "./components/Input";
import Count from "./components/Count";
import Counts from "./components/Counts";
import Buttons from "./components/Buttons";
import CountList from "./components/CountList";
import TimeStampList from "./components/TimeStampList";

const COUNTS_DEFAULT_VALUE = { start: 0, pause: 0 };

const Counter = () => {
  const actions = useActions(counterActions);
  const {
    setIsCounting,
    setDetails,
    setInputValue,
    setCounts,
    setCountDetails,
    setCount,
  } = actions;
  const [count, { start, pause }] = useCounter(0, (val) => {
    setCount(val);
  });

  const selected = useSelector(
    ({ inputValue, counts, isCounting, countDetails, details }) => ({
      inputValue,
      counts,
      isCounting,
      countDetails,
      details,
    })
  );
  const { inputValue, counts, isCounting, countDetails, details } = selected;

  console.log("selected", selected);
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
  );
};

export default Counter;
