import React from "react";

function App() {
  const userName = "Dharmik";
  const age = 23;
  const topis = "JSX"
  return (
    <>
      <h1>Welcome to {topis}!</h1>
      <p>
        Welcome, {userName}! You are {age} years old.
      </p>
    </>
  );
}

export default App;
