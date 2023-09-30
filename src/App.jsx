import { useEffect, useState } from "react";
import GetExchange from "./components/GetExchange";
import Converted from "./components/Converted";
import Input from "./components/Input";
import Currency from "./components/Currency";

const API_KEY = process.env.REACT_APP_API_KEY;
const countries = ["USD", "INR", "EUR", "GBP", "SGD"];

function App() {
  const [inputValue, setInputValue] = useState(1);
  const [rate, setRate] = useState(null);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");

  // useEffect(() => {
  //   const url = `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&base_currency=${from}&currencies=${to}`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((rate) => {
  //       if (rate && rate.data) {
  //         setRate(() => {
  //           return (inputValue * rate.data[to].value).toFixed(2);
  //         });
  //       }
  //     });
  // }, []);

  const exchange = () => {
    const url = `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&base_currency=${from}&currencies=${to}`;
    fetch(url)
      .then((res) => res.json())
      .then((rate) => {
        setRate(() => {
          if (rate && rate.data) {
            return (inputValue * rate.data[to].value).toFixed(2);
          }
        });
      })
      .catch((err) => {
        console.log("Something wrong with API, comeback later");
      });
  };

  const handleChange = (event) => {
    setRate(() => {
      return null;
    });
    setInputValue(() => {
      return parseFloat(event.target.value);
    });
  };

  return (
    <div className="bg-black w-2/3 px-2 py-5 mx-auto my-10 rounded-xl text-white flex flex-col shadow-2xl drop-shadow-2xl shadow-slate-950 md:w-1/2">
      <h1 className="text-4xl font-medium text-center py-3">
        Currency Converter
      </h1>
      <Input inputValue={inputValue} from={from} handleChange={handleChange} />
      <Currency
        from={from}
        to={to}
        setFrom={setFrom}
        setTo={setTo}
        countries={countries}
        setRate={setRate}
      />
      <Converted inputValue={inputValue} from={from} rate={rate} to={to} />
      <GetExchange exchange={exchange} />
    </div>
  );
}

export default App;
