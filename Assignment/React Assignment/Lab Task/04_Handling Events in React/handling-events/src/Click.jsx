// Task 1: Create a button in a React component that, when clicked, changes the text from
// "Not Clicked" to "Clicked!" using event handling.

import React, { useState } from "react";

export const Click = () => {
  const [count, setCount] = useState("Not Clicked!");

  const handelClick = () => {
    setCount("Clicked!");
  };

  return (
    <>
      <div className="margin-top text-center mb-2">
        <h1>Change text when button click</h1>
        <h2>{count}</h2>
        <button className="btn btn-primary" onClick={handelClick}>
          handle the buttton
        </button>
      </div>
    </>
  );
};
