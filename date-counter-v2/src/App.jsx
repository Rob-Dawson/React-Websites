import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );

  function Counter() {
    const [step, setStep] = useState(4);
    const [counter, setCounter] = useState(1);

    function dateMessage() {
      const date = new Date();
      date.setDate(date.getDate() + counter);
      console.log("datemessage", counter);
      return date.toDateString();
    }

    function handlePrevCounter() {
      setCounter((currentCounter) => {
        return (currentCounter = currentCounter - 1);
      });
    }

    function handleNextCounter() {
      setCounter((currentCounter) => {
        return (currentCounter = currentCounter + 1);
      });
    }
    return (
      <div>
        <div>
          <input
            type="range"
            min="1"
            max="10"
            value={step}
            onChange={(e) => {
              setStep(e.target.value);
              console.log(e.target);
            }}
          />
          <span>{step}</span>
        </div>
        <div>
          <button onClick={handlePrevCounter}>-</button>
          <input
            type="text"
            value={counter}
            onChange={(e) => {
              setCounter(Number(e.target.value));
              console.log(counter);
            }}
          />
          <button onClick={() => setCounter((c) => c + 1)}>+</button>
        </div>
        <div>
          <p>Today is {dateMessage()}</p>
        </div>
      </div>
    );
  }
}
