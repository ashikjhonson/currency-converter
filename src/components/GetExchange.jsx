import React from "react";

const GetExchange = ({ exchange }) => {
  return (
    <button
      className="bg-blue-700 mx-auto text-md font-medium px-4 py-1 mt-5 rounded w-fit"
      onClick={exchange}
    >
      Get exchange rates
    </button>
  );
};

export default GetExchange;
