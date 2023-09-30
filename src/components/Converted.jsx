import React from "react";

const Converted = (props) => {
  const { inputValue, from, rate, to } = props;
  return (
    <p className="text-center font-bold bg-slate-800 border w-fit mx-auto p-3 rounded-lg">
      <span>{`${inputValue} ${from}`} = </span>
      <span className={rate ? "visible" : "hidden"}>{`${rate} ${to}`}</span>
    </p>
  );
};

export default Converted;
