// Task 1: Create a functional component Greeting that accepts a name as a prop and
// displays "Hello, [name]!".

import React from "react";
import Greet from "./components/Greet";
import Classcompo from "./components/Classcompo";

function App() {
  return (
    <>
      <div>
        <Greet name={"Dharmik"} />
        <Greet name={"Rahul"} />
        <Classcompo />
      </div>
    </>
  );
}

export default App;
