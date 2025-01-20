import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );

  function Counter() {
    const [step, setStep] = useState(1);
    const [counter, setCounter] = useState(0);

    function dateMessage() {
      const date = handleDate();

      if (counter > 0) {
        return `${counter} days from now is: ${date}`;
      } else if (counter < 0) {
        return `${Math.abs(counter)} days ago was: ${date}`;
      } else {
        return `Today is ${date}`;
      }
    }

    function handleDate() {
      const date = new Date();
      date.setDate(date.getDate() + counter);
      console.log("datemessage", counter);
      return date.toDateString();
    }

    function handlePrevCounter() {
      setCounter((currentCounter) => {
        return (currentCounter = currentCounter - step);
      });
    }

    function handleNextCounter() {
      setCounter((currentCounter) => {
        return (currentCounter = currentCounter + step);
      });
    }

    function handleForm(event) {
      const value = event.target.value;
      if (value === "" || Number.isInteger(Number(value))) {
        setCounter(value === "" ? "" : Number(value));
      }
    }
    function handleSlider(event) {
      setStep(Number(event.target.value));
    }

    function handleReset() {
      setStep(1);
      setCounter(0);
    }
    return (
      <div>
        <div>
          <input
            type="range"
            min="1"
            max="10"
            value={step}
            onChange={handleSlider}
          />
          <span>{step}</span>
        </div>
        <div>
          <button onClick={handlePrevCounter}>-</button>
          <input type="text" value={counter} onChange={handleForm} />
          <button onClick={handleNextCounter}>+</button>
        </div>
        <div>
          <p>{dateMessage()}</p>
        </div>
        {counter !== 0 || step !== 1 ? (
          <div>
            <button onClick={handleReset}>Reset</button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
