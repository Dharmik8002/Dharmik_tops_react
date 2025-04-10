// Task 1:Create a React component that renders a list of items (e.g., a list of fruit names). Use
// the map() function to render each item in the list.

import React from "react";

const Listitems = () => {
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  return (
    <>
      <h1>List of Fruits</h1>
      <ul className="list-group list-group-flush">
        {items.map((item, index) => {
          return <li key={index}>{index}. {item}</li>;
        })}
      </ul>
    </>
  );
};

export default Listitems;
