import React from "react";

const Input = ({ onChange, name, value }) => {
  return <input name={name} value={value} onChange={onChange} />;
};

export default Input;
