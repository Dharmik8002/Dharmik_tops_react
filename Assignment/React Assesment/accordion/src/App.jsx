import React from "react";
import "./App.css";
import Accordion from "./components/Accordion";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-50 p-4">
        <h1 className="text-2xl font-bold text-center">
          React + Redux Accordion
        </h1>
        <Accordion />
      </div>
    </>
  );
}

export default App;
