import { useState } from "react";
import "./App.css";
export default function App() {
  const [value, setValue] = useState(" ");

  function handleInputChange(evt) {
    const lastChar = value.charAt(value.length - 1);
    const currentChar = value.charAt(value.length - 1);

    if (isOperator(lastChar) && isOperator(currentChar)) {
      alert("Can't type two operator Simutensouly");
    } else {
      {
        setValue(value + evt.target.value);
      }
    }
  }

  const isOperator = (char) => {
    return (
      char === "+" ||
      char === "-" ||
      char === "*" ||
      char === "/" ||
      char === "."
    );
  };

  return (
    <div className="container">
      <div className="calculator">
        <input
          value={value}
          placeholder="Have a nice day"
          className="inputBox"
          type="text"
          disabled
        />

        <div>
          <button onClick={() => setValue("")}>Clr</button>
          <button onClick={() => setValue(value.slice(0, -1))}>Del</button>
          <button value="%" onClick={(e) => handleInputChange(e)}>
            %
          </button>
          <button value="+" onClick={(e) => handleInputChange(e)}>
            +
          </button>
        </div>
        <div>
          <button value="7" onClick={(e) => setValue(value + e.target.value)}>
            7
          </button>
          <button value="8" onClick={(e) => setValue(value + e.target.value)}>
            8
          </button>
          <button value="9" onClick={(e) => setValue(value + e.target.value)}>
            9
          </button>
          <button value="-" onClick={(e) => handleInputChange(e)}>
            -
          </button>
        </div>
        <div>
          <button value="4" onClick={(e) => setValue(value + e.target.value)}>
            4
          </button>
          <button value="5" onClick={(e) => setValue(value + e.target.value)}>
            5
          </button>
          <button value="6" onClick={(e) => setValue(value + e.target.value)}>
            6
          </button>
          <button value="/" onClick={(e) => handleInputChange(e)}>
            /
          </button>
        </div>
        <div>
          <button value="1" onClick={(e) => setValue(value + e.target.value)}>
            1
          </button>
          <button value="2" onClick={(e) => setValue(value + e.target.value)}>
            2
          </button>
          <button value="3" onClick={(e) => setValue(value + e.target.value)}>
            3
          </button>
          <button value="*" onClick={(e) => handleInputChange(e)}>
            X
          </button>
        </div>
        <div>
          <button value="0" onClick={(e) => setValue(value + e.target.value)}>
            0
          </button>
          <button value="." onClick={(e) => handleInputChange(e)}>
            .
          </button>
          <button
            className="equal"
            value="="
            onClick={() => setValue(eval(value) + "")}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
