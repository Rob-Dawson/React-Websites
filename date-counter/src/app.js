import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);

  function handlePrevStep() {
    if (step > 1)
      setStep((currentStep) => {
        return (currentStep = step - 1);
      });
  }

  function handleNextStep() {
    setStep((currentStep) => {
      return (currentStep = step + 1);
    });
  }

  function handlePrevCount() {
    setCounter((currentCounter) => {
      return (currentCounter = counter - step);
    });
  }

  function handleNextCount() {
    setCounter((currentCounter) => {
      return (currentCounter = step + counter);
    });
  }

  function handleDate() {
    const date = new Date();
    let days = step * counter;
    date.setDate(date.getDate() + counter);
    console.log(days);
    return date.toDateString();
  }

  return (
    <div>
      <div>
        <button onClick={handlePrevStep}>-</button>
        <span>Step:{step} </span>
        <button onClick={handleNextStep}>+</button>
      </div>

      <div>
        <button onClick={handlePrevCount}>-</button>
        <span>Counter: {counter}</span>
        <button onClick={handleNextCount}>+</button>
      </div>
      <div>
        <p>
          {(() => {
            const date = handleDate();
            if (counter > 0) {
              return `${counter} days from now is ${date}`;
            } else if (counter < 0) {
              return `${Math.abs(counter)} days from ago is ${date}`;
            } else {
              return `Today is ${date}`;
            }
          })()}
        </p>
      </div>
    </div>
  );
}
