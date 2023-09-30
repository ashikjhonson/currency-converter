import React from "react";

const Input = (props) => {
  const { inputValue, from, handleChange } = props;
  return (
    <div className="mx-auto mt-3">
      <p className="font-medium text-lg">Enter Amount</p>
      <input
        type="text"
        placeholder={`${inputValue} ${from}`}
        className="rounded font-medium outline-none py-2 px-7 mt-1 text-black"
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
