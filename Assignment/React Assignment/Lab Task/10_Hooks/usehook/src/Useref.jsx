// Task 4: Create react app to avoid re-rendersin react application by useRef

import React, { useRef, useState } from "react";

const Useref = () => {
  const [count, setCounter] = useState(0);
  const refClickCount = useRef(0);

  const incrementBtn = () => {
    setCounter((count) => count + 1);
    refClickCount.current += 1;
    console.log(`Button clicked ${refClickCount.current} times`);
  };

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>Avoid Re-renders using useRef</h1>
        <h2>State Count (re-renders): {count}</h2>
        <h3>Ref Click Count (no re-render): {refClickCount.current}</h3>
        <button onClick={incrementBtn}>Click Me</button>
      </div>
    </>
  );
};

export default Useref;
