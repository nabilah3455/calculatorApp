import "./styles/tailwind.css";
import React, { useContext } from "react";
import Cookies from "js-cookie";
import Toggle from "./Component/Theme/Toggle";
import Button from "./Component/Button/Button";
import { MyCalculatorContext } from "./Context/Calculator";

function App() {
  const { result, setResult, operator, setOperator, themeToggle} = useContext(MyCalculatorContext)

  const numpadChange = (event) => {
    if (event.target.value === "reset") {
      setResult(0);
      Cookies.remove("num1");
      Cookies.remove("num2");
    } else if (event.target.value === "del") {
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

  return (
    <>
      <div
        className={`grid place-items-center h-screen text-white ${
          themeToggle === 1
            ? "App"
            : themeToggle === 2
            ? "App2 text2"
            : "App3 text3"
        }`}
      >
        <div className="center-items">
          <Toggle />
          <div
            className={` ${
              themeToggle === 1
                ? "screen"
                : themeToggle === 2
                ? "screen2"
                : "screen3"
            } flex content-center rounded-md my-5`}
          >
            <div className="py-5 px-5 text-screen w-full text-right">
              {result ? result : 0}
            </div>
          </div>
          <div
            className={`${
              themeToggle === 1
                ? "numpad"
                : themeToggle === 2
                ? "numpad2"
                : "numpad3"
            } rounded-md`}
          >
            <div className="grid grid-cols-4 p-4">
             <Button />
            </div>
          </div>
        </div>
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Ghoniyyatul Nabilah</a>.
      </div>
      </div>
    </>
  );
}

export default App;
