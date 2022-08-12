import "./styles/tailwind.css";
import React, { useState } from "react";
import Cookies from "js-cookie";

function App() {
  const [result, setResult] = useState();
  const [operator, setOperator] = useState();
  const [themeToggle, setThemeToggle] = useState(1);

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
          <div className="theme-num w-full text-right">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <header className="flex">
            <div className="text-2xl">calc</div>
            <div className="theme-text content-center text-right w-full mt-1 tracking-wide">
              THEME
            </div>
            <div
              className={`w-20 h-5 ${
                themeToggle === 1
                  ? "numpad"
                  : themeToggle === 2
                  ? "numpad2"
                  : "numpad3"
              } ml-4 mr-1 rounded-xl`}
            >
              {themeToggle === 1 ? (
                <button
                  className="toggle"
                  onClick={() => setThemeToggle(2)}
                ></button>
              ) : themeToggle === 2 ? (
                <button
                  className="toggle2"
                  onClick={() => setThemeToggle(3)}
                ></button>
              ) : (
                <button
                  className="toggle3"
                  onClick={() => setThemeToggle(1)}
                ></button>
              )}
            </div>
          </header>
          <div
            className={` ${
              themeToggle === 1
                ? "screen"
                : themeToggle === 2
                ? "screen2"
                : "screen3"
            } flex content-center rounded-md my-5`}
          >
            <div className="py-6 px-5 text-4xl w-full text-right">
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
              <button
                className={`${themeToggle === 3 ? "num-btn2" : "num-btn"}`}
                onClick={numpadChange}
                value={7}
              >
                7
              </button>
              <button
                className={`${themeToggle === 3 ? "num-btn2" : "num-btn"}`}
                onClick={numpadChange}
                value={8}
              >
                8
              </button>
              <button
                className={`${themeToggle === 3 ? "num-btn2" : "num-btn"}`}
                onClick={numpadChange}
                value={9}
              >
                9
              </button>
              <button
                className={`num-btn ${
                  themeToggle === 1
                    ? "dark-cyan"
                    : themeToggle === 2
                    ? "dark-cyan2"
                    : "purple num-btn2"
                }`}
                onClick={numpadChange}
                value={"del"}
              >
                DEL
              </button>
              <button
                className={`${themeToggle === 3 ? "num-btn2" : "num-btn"}`}
                onClick={numpadChange}
                value={4}
              >
                4
              </button>
              <button
                className={`${themeToggle === 3 ? "num-btn2" : "num-btn"}`}
                onClick={numpadChange}
                value={5}
              >
                5
              </button>
              <button
                className={`${themeToggle === 3 ? "num-btn2" : "num-btn"}`}
                onClick={numpadChange}
                value={6}
              >
                6
              </button>
              <button
                className={`${themeToggle === 3 ? "num-btn2" : "num-btn"}`}
                onClick={numpadChange}
                value={"+"}
              >
                +
              </button>
              <button
                className={`${themeToggle === 3 ? "num-btn2" : "num-btn"}`}
                onClick={numpadChange}
                value={1}
              >
                1
              </button>
              <button
                className={`${themeToggle === 3 ? "num-btn2" : "num-btn"}`}
                onClick={numpadChange}
                value={2}
              >
                2
              </button>
              <button
                className={`${themeToggle === 3 ? "num-btn2" : "num-btn"}`}
                onClick={numpadChange}
                value={3}
              >
                3
              </button>
              <button
                className={`${themeToggle === 3 ? "num-btn2" : "num-btn"}`}
                onClick={numpadChange}
                value={"-"}
              >
                -
              </button>
              <button
                className={`${themeToggle === 3 ? "num-btn2" : "num-btn"}`}
                onClick={numpadChange}
                value={"."}
              >
                .
              </button>
              <button
                className={`${themeToggle === 3 ? "num-btn2" : "num-btn"}`}
                onClick={numpadChange}
                value={0}
              >
                0
              </button>
              <button
                className={`${themeToggle === 3 ? "num-btn2" : "num-btn"}`}
                onClick={numpadChange}
                value={"/"}
              >
                /
              </button>
              <button
                className={`${themeToggle === 3 ? "num-btn2" : "num-btn"}`}
                onClick={numpadChange}
                value={"x"}
              >
                x
              </button>
              <button
                className={`num-btn col-span-2 ${
                  themeToggle === 1
                    ? "dark-cyan"
                    : themeToggle === 2
                    ? "dark-cyan2"
                    : "purple num-btn2"
                }`}
                onClick={numpadChange}
                value={"reset"}
              >
                RESET
              </button>
              <button
                className={`num-btn col-span-2 ${
                  themeToggle === 1
                    ? "dark-red"
                    : themeToggle === 2
                    ? "dark-red2"
                    : "purple2 num-btn2"
                }`}
                onClick={numpadChange}
                value={"="}
              >
                =
              </button>
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
