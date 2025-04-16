import React, { useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);

  const incrementBtn = () => {
    setCounter((count) => count + 1);
  };

  const decrementBtn = () => {
    setCounter((count) => count - 1);
  };

  // console.log(`Counter: ${count}`);

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={incrementBtn}>Increment Value</button>{" "}
      <button onClick={decrementBtn}>Decrement Value</button>
    </div>
  );
};

export default Counter;
