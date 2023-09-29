import { useEffect, useState } from "react";
import "./App.css";

const API_KEY = "cur_live_fW7q7koTiHriNOD1yQvvdaQ3T2JeYFxzTjkJ1PWV";

function App() {
  const [inputValue, setInputValue] = useState(1);
  const [rate, setRate] = useState(0);
  const [from, setFrom] = useState("USD");
  const [fromValue, setFromValue] = useState(0);
  const [to, setTo] = useState("INR");
  const countries = ["USD", "INR", "EUR", "GBP", "SGD"];

  /*useEffect(() => {
    const url = `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&base_currency=${from}&currencies=${to}`; //cur_live_dHbVsJIYXqVCVoCJTuomtYgUURXkRv3qEuyxJLdi
    fetch(url)
      .then((res) => res.json())
      .then((rate) => {
        if (rate && rate.data) {
          setRate(() => {
            return (inputValue * rate.data[to].value).toFixed(2);
          });
        }
      });
  }, []);*/

  const exchange = () => {
    const url = `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&base_currency=${from}&currencies=${to}`;
    fetch(url)
      .then((res) => res.json())
      .then((rate) => {
        setFromValue(() => {
          return inputValue;
        });
        setRate(() => {
          if (rate && rate.data) {
            return (inputValue * rate.data[to].value).toFixed(2);
          }
        });
      });
  };

  const handleChange = (event) => {
    setInputValue(() => {
      return event.target.value;
    });
  };

  return (
    <div className="bg-black w-2/3 px-2 py-5 mx-auto my-10 rounded-xl text-white flex flex-col shadow-2xl drop-shadow-2xl shadow-slate-950 md:w-1/2">
      <h1 className="text-4xl font-medium text-center py-3">
        Currency Converter
      </h1>
      <div className="mx-auto mt-3">
        <p className="font-medium text-lg">Enter Amount</p>
        <input
          type="text"
          placeholder={`${inputValue} ${from}`}
          className="rounded font-medium outline-none py-2 px-7 mt-1 text-black"
          onChange={handleChange}
        />
      </div>
      <div className="mx-auto my-5">
        <div className="flex justify-between gap-10 mb-5">
          <p className="font-medium text-xl">Base currency</p>
          <input
            placeholder={from}
            className="bg-white outline-none w-20 font-medium text-black px-3 rounded-sm"
            onClick={() => {}}
          />
        </div>
        <div className="flex justify-between mb-5">
          <p className="font-medium text-xl">Target currency</p>
          <input
            placeholder={to}
            className="bg-white outline-none w-20 font-medium text-black px-3 rounded-sm"
            onChange={() => {}}
          />
        </div>
      </div>
      <p className="text-center font-bold bg-slate-800 border w-fit mx-auto p-3 rounded-lg">
        {`${fromValue} ${from} = ${rate} ${to}`}
      </p>
      <button
        className="bg-blue-700 mx-auto text-md font-medium px-4 py-1 mt-5 rounded w-fit"
        onClick={exchange}
      >
        Get exchange rates
      </button>
    </div>
  );
}

export default App;
