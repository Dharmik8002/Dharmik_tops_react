// Task 2:Create a Counter component with a button that increments a count value using
// React state. Display the current count on the screen.

import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    if (counter >= 10) {
      alert("You can not increase more than 10");
    } else {
      setCounter((prev) => prev + 1);
    }
  };

  const subCounter = () => {
    if (counter <= 0) {
      alert("You can not decrease more than 0");
    } else {
      setCounter((prev) => prev - 1);
    }
  };

  return (
    <>
      <h2 className="text-center ">Counter</h2>
      <p className="text-center">{counter}</p>
      <div className="d-flex gap-2 justify-content-center">
        <button onClick={addCounter} className="btn btn-dark" type="button">
          Increment
        </button>
        <button onClick={subCounter} className="btn btn-dark" type="button">
          Decrement
        </button>
      </div>
    </>
  );
};

export default Counter;
