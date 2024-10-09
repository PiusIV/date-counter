import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleReset = () => {
    // Sets these to their initial states using their setter function
    setCount(0);
    setStep(1);
  };

  return (
    <div className="container">
      <section>
        <div className="flex">
          <span>
            <input
              type="range"
              name=""
              id=""
              min="0"
              max="10"
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
            />
          </span>
          <span>Step: {step}</span>
        </div>

        <div className="flex">
          <button onClick={() => setCount((c) => c - step)}>-</button>
          {/* <span>Count: {count}</span> */}
          <input
            type="number"
            name=""
            id=""
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <button onClick={() => setCount((c) => c + step)}>+</button>
        </div>
      </section>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} day(s) from today is `
            : `${Math.abs(count)} day(s) ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {/* Conditionally rendering the reset button using the short circuit. it
		displays if the first on the LHS is true */}
      {(count !== 0 || step !== 1) && (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default Counter;
