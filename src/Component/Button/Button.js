import React, { useContext } from "react";
import Cookies from "js-cookie";
import { MyCalculatorContext } from "../../Context/Calculator";

export default function Button() {
  const { result, setResult, operator, setOperator, themeToggle } =
    useContext(MyCalculatorContext);

  const numpadChange = (event) => {
    if (event.target.value === "RESET") {
      setResult(0);
      Cookies.remove("num1");
      Cookies.remove("num2");
    } else if (event.target.value === "DEL") {
      setResult(Math.floor(result / 10));
    } else if (
      event.target.value === "+" ||
      event.target.value === "-" ||
      event.target.value === "x" ||
      event.target.value === "/"
    ) {
      setResult(0);
      setOperator(event.target.value);
      getSumResult();
    } else if (event.target.value === "=") {
      getSumResult();
    } else {
      if (!result) {
        setResult(event.target.value);
      } else {
        setResult(result + event.target.value);
      }
    }
  };

  const getSumResult = () => {
    if (!Cookies.get("num1")) {
      Cookies.set("num1", result);
    } else {
      let data = Cookies.get("num1");
      if (operator === "-") {
        setResult(Number(data) - Number(result));
      } else if (operator === "+") {
        setResult(Number(data) + Number(result));
      } else if (operator === "/") {
        setResult(Number(data) / Number(result));
      } else {
        setResult(Number(data) * Number(result));
      }
      Cookies.remove("num1");
    }
  };

  const btnValues = [
    7,
    8,
    9,
    "DEL",
    4,
    5,
    6,
    "+",
    1,
    2,
    3,
    "-",
    ".",
    0,
    "/",
    "x",
    "RESET",
    "=",
  ];

  return (
    <>
      {btnValues.map((item, i) => {
        return (
          <button
            key={i}
            className={`${
              themeToggle === 1 && (item === "DEL" || item === "RESET")
                ? "dark-cyan num-btn2"
                : themeToggle === 2 && (item === "DEL" || item === "RESET")
                ? "dark-cyan2 num-btn2"
                : themeToggle === 1 && item === "="
                ? "dark-red num-btn2"
                : themeToggle === 2 && item === "="
                ? "dark-red2 num-btn2"
                : themeToggle === 3 && item === "="
                ? "purple2 num-btn2"
                : themeToggle === 3 && (item === "DEL" || item === "RESET")
                ? "purple num-btn2"
                : themeToggle === 3
                ? "num-btn3"
                : "num-btn"
            }
            ${item === "RESET" || item === "=" ? "col-span-2" : null}`}
            onClick={numpadChange}
            value={item}
          >
            {item}
          </button>
        );
      })}
    </>
  );
}
