import React from "react";

const Button = ({ onClick, text, style }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
