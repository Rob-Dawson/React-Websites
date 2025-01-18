import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );

  function Counter() {
    const [step, setStep] = useState(4);

    return (
      <div>
        <div>
          <input type="range" min="1" max="10" value={step} />
          <span></span>
        </div>
        <div>
          <button>-</button>
          <span>Count</span>
          <button>+</button>
        </div>
        <div>
          <p>Today is...</p>
        </div>
      </div>
    );
  }
}
