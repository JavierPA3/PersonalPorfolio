import { useState } from "react";
import "./calculator.css";

export const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInputValue(""); // Limpia la entrada
    } else if (value === "=") {
      try {
        setInputValue(eval(inputValue).toString()); // Evalúa la expresión ingresada
      } catch {
        setInputValue("Error"); // Muestra error en caso de sintaxis incorrecta
      }
    } else {
      setInputValue((prev) => prev + value); // Añade el valor al input
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "C",
    "0",
    "=",
    "+",
  ];

  return (
    <main className="backgroundCalculator">
    <div className="calculatorAppMain">
      {/* Pantalla de la calculadora */}
      <div className="calculatorDisplay">{inputValue || "0"}</div>

      {/* Botones de la calculadora */}
      <div className="calculatorButtons">
        {buttons.map((button) => (
          <button
            key={button}
            className={`calculatorButton ${
              button === "=" || button === "C" ? "special" : ""
            }`}
            onClick={() => handleButtonClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
    </main>
  );
};
