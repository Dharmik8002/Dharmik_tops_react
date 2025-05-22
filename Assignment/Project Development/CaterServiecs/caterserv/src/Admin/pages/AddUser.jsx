import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../Slicedata/AdminSlice";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const dishpatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    password: "",
    img: "",
  });

  const onFormChange = (e) => {
    setForm({
      ...form,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
  };

  const handalSubmitForm = (e) => {
    e.preventDefault();
    try {
      dishpatch(createUser(form));
      navigate("/dash");
    } catch (error) {}
  };
  return (
    <>
      <div className="container my-5">
        <div className="card shadow border-0">
          <div className="card-header bg-success text-white">
            <h4 className="mb-0">Add New User</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handalSubmitForm}>
              <div className="row g-3">
                {/* Name */}
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter full name"
                    name="name"
                    value={form.name}
                    onChange={onFormChange}
                    required
                  />
                </div>
                {/* username */}
                <div className="col-md-6">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter  Username"
                    name="username"
                    value={form.username}
                    onChange={onFormChange}
                    required
                  />
                </div>
                {/* Email */}
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    value={form.email}
                    onChange={onFormChange}
                    required
                  />
                </div>
                {/* Password */}
                <div className="col-md-6">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    name="password"
                    value={form.password}
                    onChange={onFormChange}
                    required
                  />
                </div>
                {/* Image Upload */}
                <div className="col-md-6">
                  <label htmlFor="image" className="form-label">
                    User Image
                  </label>
                  <input
                    className="form-control"
                    type="url"
                    id="image"
                    accept="image/*"
                    name="img"
                    value={form.img}
                    onChange={onFormChange}
                  />
                </div>
              </div>
              {/* Submit Button */}
              <div className="mt-4">
                <button type="submit" className="btn btn-success">
                  <i className="bi bi-check-circle me-1" /> Add New User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
