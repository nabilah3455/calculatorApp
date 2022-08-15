import React, { useContext } from "react";
import { MyCalculatorContext } from "../../Context/Calculator";

export default function Toggle() {
    const { themeToggle, setThemeToggle} = useContext(MyCalculatorContext)

  return (
    <>
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
    </>
  );
}
