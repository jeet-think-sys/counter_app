import React, { useState, useEffect } from "react";

import { useCounter } from "./hooks/hooks";

const COUNTS_DEFAULT_VALUE = { start: 0, pause: 0 };
const DEFAULT_COUNT = 5;

const Counter = () => {
  const [isCounting, setIsCounting] = useState(false);
  const [details, setDetails] = useState([]);
  const [counts, setCounts] = useState(COUNTS_DEFAULT_VALUE);

  const [count, { start, pause, setter: setCount }] = useCounter(DEFAULT_COUNT);

  useEffect(() => {
    if (count === 0) {
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
    },
    updateList = (isCounting) => {
      const message =
        (isCounting ? "Start at " : "Pause at ") + new Date().toString();
      setDetails([...details, message]);
    },
    updateCount = (name, val) => {
      setCounts({ ...counts, [name]: val });
    },
    reset = () => {
      pause();
      setDetails([]);
      setCounts(COUNTS_DEFAULT_VALUE);
      setCount(DEFAULT_COUNT);
      setIsCounting(false);
    };

  return (
    <div>
      <Input value={count} name="count" onChange={getCount} />
      <Button text={isCounting ? "Pause" : "Start"} onClick={toggleSwitch} />
      <Button text="Reset" onClick={reset} />
      Counts: ( Start: {counts.start}, Pause: {counts.pause} )
      <ul>
        {details.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

const Input = ({ onChange, name, value }) => {
  return <input name={name} value={value} onChange={onChange} />;
};
const Button = ({ onClick, text, style }) => {
  return <button onClick={onClick}>{text}</button>;
};
export default Counter;

//Counter - FOr countng
// Buttons Wala -
// TimeStamp List -
// Start at, Pause at
// Counts
