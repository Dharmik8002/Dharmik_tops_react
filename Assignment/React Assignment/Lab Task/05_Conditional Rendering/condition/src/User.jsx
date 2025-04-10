// Task 1:Create a component that conditionally displays a login or logout button based on
// the user’s login status.

import React, { useState } from "react";

const User = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handelLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };
  return (
    <>
      <div className="container mt-5 text-center">
        <h1>Form</h1>
        <h3>{isLoggedIn ? "Welcome back, user!" : "Please Log in."}</h3>
        <button className="btn btn-success" onClick={handelLogin}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </>
  );
};

export default User;
