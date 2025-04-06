// Task 2: Create a form with an input field in React. Display the value of the input field
// dynamically as the user types in it.



import React, { useState } from "react";

const Form = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSignIn, setIsSignIn] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handelOnChange = (e) => {
    setIsSignIn({
      ...isSignIn,
      [e.target.name]: e.target.value,
    });
    // console.log(isSignIn);
  };

  // This is using put empty value to check if the form is submitted or not
  const [submitted, setSubmitted] = useState({
    name: "",
    email: "",
    password: "",
  });

  // This is using null to check if the form is submitted or not
  // const [submitted, setSubmitted] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    setSubmitted(isSignIn);
  };

  return (
    <>
      <div className={`container  ${isActive ? "active" : ""}`}>
        <div className="form-container sign-up ">
          <form onSubmit={onSubmit}>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g" />
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-github" />
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </div>
            <span>or use your email for registeration</span>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={isSignIn.name}
              onChange={handelOnChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={isSignIn.email}
              onChange={handelOnChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={isSignIn.password}
              onChange={handelOnChange}
            />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form onSubmit={onSubmit}>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="https://www.google.com/" className="icon">
                <i className="fa-brands fa-google-plus-g" />
              </a>
              <a href="https://www.facebook.com/" className="icon">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="https://www.github.com/" className="icon">
                <i className="fa-brands fa-github" />
              </a>
              <a href="https://in.linkedin.com/" className="icon">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </div>
            <span>or use your email password</span>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={isSignIn.name}
              onChange={handelOnChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={isSignIn.email}
              onChange={handelOnChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={isSignIn.password}
              onChange={handelOnChange}
            />
            <a href="#">Forget Your Password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button
                className="hidden"
                id="login"
                onClick={() => setIsActive(false)}
              >
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to use all of site features
              </p>
              <button
                className="hidden"
                id="register"
                onClick={() => setIsActive(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="">Welcome to the Form</h1>
        <p className="">This is a simple form component.</p>
        {/* Display submitted data if available */}
        {/* {submitted && ( */}
        <div>
          <p>Your name: {submitted.name}</p>
          <p>Your email: {submitted.email}</p>
          <p>Your password: {submitted.password}</p>
        </div>
        {/* )} */}
      </div>
    </>
  );
};

export default Form;
