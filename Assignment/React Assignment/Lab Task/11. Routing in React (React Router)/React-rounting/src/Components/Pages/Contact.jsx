import React from "react";
import Header from "../Comman/Header";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="bg-info m-2 p-4">This is Contact page</div>
      {/* form */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card p-4">
              <h2 className="text-center">Contact Us</h2>
              <form>
                <div className="form-group">
                  <label for="name">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter yourname"
                    required
                  />
                  <div className="form-group mt-3">
                    <label for="password">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter password"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label for="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    required
                  />
                </div>
                <button className="btn btn-primary mt-3">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
