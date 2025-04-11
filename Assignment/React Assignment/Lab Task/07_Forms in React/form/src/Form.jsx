import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // validate email
  const valiDate = () => {
    const error = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      error.name = "Name is required";
    }

    if (!formData.email.trim()) {
      error.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      error.email = "Email is not valid";
    }

    if (!formData.password.trim()) {
      error.password = "Password is required";
    }

    return error;
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const validateErrors = valiDate();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }
    setSubmitted(formData);
    setErrors({});
    handleReset();
  };

  return (
    <>
      <div>
        <h2 className="text-center mt-5">Sign in Form</h2>
        <form onSubmit={onSubmit} className="w-50 mx-auto ">
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="form-control"
              id="exampleInputName1"
              aria-describedby="nameHelp"
              placeholder="Enter your name"
            />
            <div id="emailHelp" className="form-text">
              {errors.name && <p className="text-danger">{errors.name}</p>}
              {/* We'll never share your email with anyone else. */}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
              value={formData.email}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
            />
            <div id="emailHelp" className="form-text">
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enater your password"
            />
            <div id="emailHelp" className="form-text">
              {errors.password && <p className="text-danger">{errors.password}</p>}
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>

          <div className="mt-5">
            <h2>Form Data</h2>
            <p>Name: {submitted.name}</p>
            <p>Email: {submitted.email}</p>
            <p>Password: {submitted.password}</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
