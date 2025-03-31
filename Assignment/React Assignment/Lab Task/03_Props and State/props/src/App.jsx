// Task: 1 Create a React component UserCard that accepts name, age, and location as
// props and displays them in a card format.

import React from "react";
import Card from "./Card";
import Counter from "./Counter";
import Class_state from "./Class_state";
import Func_state from "./Func_state";

function App() {
  return (
    <>
      {/* <div className="my-5">
        <Counter />
      </div>
      <h1 className="text-center ">This is a card</h1> */}
      {/* <div className="container">
        <div className="row">
          <Card
            name="Dharmik Modi"
            age="23"
            location="Ahemdabad"
            img="https://images.pexels.com/photos/16129728/pexels-photo-16129728/free-photo-of-man-coding-on-pc.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Card
            name="Diyang Thakker"
            age="30"
            location="Surat"
            img="https://images.pexels.com/photos/4200831/pexels-photo-4200831.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
      </div> */}
      {/* <Class_state /> */}

      <Func_state />
    </>
  );
}

export default App;
