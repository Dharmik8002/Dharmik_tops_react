// Task 1: Create a functional component with a counter using the useState() hook. Include
// buttons to increment and decrement the counter.

import React from "react";
import Counter from "./Counter";
import Useefact from "./Useefact";
import Useref from "./Useref";

function App() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>React Hooks</h1>
        <h2>Using useState</h2>
        <Counter />
        {/* <h2 className="mt-4">Using useEffect</h2>
        <Useefact /> */}
        <Useref />
      </div>
    </>
  );
}

export default App;
