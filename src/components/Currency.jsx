import React from "react";

const Currency = (props) => {
  const { from, to, setFrom, setTo, countries, setRate } = props;
  return (
    <div className="mx-auto my-5">
      <div className="flex justify-between gap-10 mb-5">
        <p className="font-medium text-xl">Base currency</p>
        <select
          className="bg-white text-black cursor-pointer font-medium px-4 rounded outline-none"
          onChange={(event) => {
            setRate(() => {
              return null;
            });
            setFrom(() => {
              return event.target.value;
            });
          }}
        >
          {countries.map((country) => {
            return (
              <option value={country} key={country}>
                {country}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex justify-between mb-5">
        <p className="font-medium text-xl">Target currency</p>

        <select
          className="bg-white text-black cursor-pointer font-medium px-4 rounded"
          onChange={(event) => {
            setRate(() => {
              return null;
            });
            setTo(() => {
              return event.target.value;
            });
          }}
        >
          <option value={to}>{to}</option>
          {countries
            .filter((country) => country !== from && country !== to)
            .map((country) => {
              return (
                <option value={country} key={country}>
                  {country}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};

export default Currency;
