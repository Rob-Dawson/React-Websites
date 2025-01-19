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
      date.setTime(date.getTime());
      return date.toDateString();
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
          <button>-</button>
          <input
            type="text"
            placeholder="0"
            value={counter}
            onChange={(e) => {
              console.log(e.target);
              setCounter(e.target.value);
            }}
          />
          <button>+</button>
        </div>
        <div>
          <p>Today is {dateMessage()}</p>
        </div>
      </div>
    );
  }
}
