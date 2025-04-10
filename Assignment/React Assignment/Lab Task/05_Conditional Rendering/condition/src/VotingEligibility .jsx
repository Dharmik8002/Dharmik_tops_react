// Task 2:Implement a component that displays a message like "You are eligible to vote" if
// the user is over 18, otherwise display "You are not eligible to vote."

import React, { useState } from "react";

const VotingEligibility = () => {
  const [age, setAge] = useState("");

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  const isEligible = age >= 18;

  return (
    <div className="p-4 max-w-lg mx-auto m-5 bg-gray-300 rounded-xl shadow-md space-y-4">
      <h1 className=" text-xl font-bold ">Voting Eligibility Checker</h1>
      <input
        type="number"
        value={age}
        onChange={handleChange}
        placeholder="Enter your age"
        className="w-full px-3 py-2 border border-white rounded-md"
      />
      {age !== "" && (
        <p
          className={`flex items-center justify-center gap-3 my-3 px-4 py-3 rounded-xl text-white text-lg font-medium transition-all duration-300 ${
            isEligible ? " bg-green-500" : "bg-red-500"
          }`}
        >
          {isEligible
            ? "You are eligible to vote."
            : "You are not eligible to vote."}
        </p>
      )}
    </div>
  );
};

export default VotingEligibility;
