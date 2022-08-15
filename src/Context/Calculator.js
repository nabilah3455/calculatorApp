import React, { createContext, useState } from "react";

export const MyCalculatorContext = createContext();

export const CalculatorProvider = (props) => {
    const [result, setResult] = useState();
    const [operator, setOperator] = useState();
    const [themeToggle, setThemeToggle] = useState(1);
  

  return (
    <MyCalculatorContext.Provider
      value={{
       result,
       setResult,
       operator,
       setOperator,
       themeToggle,
       setThemeToggle
      }}
    >
      {props.children}
    </MyCalculatorContext.Provider>
  );
};
