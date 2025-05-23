import React from "react";
import Navbar from "../comman/Navbar";
import CommanHeading from "../comman/CommanHeading";
import Footer from "../comman/Footer";

const Booking = () => {
  return (
    <>
      <Navbar />
      <CommanHeading title="Booking" subtitle="Booking" />
      {/* Book Us Start */}
      <div
        className="container-fluid contact py-6 wow bounceInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row g-0">
            <div className="col-1">
              <img
                src="img/background-site.jpg"
                className="img-fluid h-100 w-100 rounded-start"
                style={{ objectFit: "cover", opacity: "0.7" }}
                alt
              />
            </div>
            <div className="col-10">
              <div className="border-bottom border-top border-primary bg-light py-5 px-4">
                <div className="text-center">
                  <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                    Book Us
                  </small>
                  <h1 className="display-5 mb-5">
                    Where you want Our Services
                  </h1>
                </div>
                <div className="row g-4 form">
                  <div className="col-lg-4 col-md-6">
                    <select
                      className="form-select border-primary p-2"
                      aria-label="Default select example"
                    >
                      <option selected>Select Country</option>
                      <option value={1}>USA</option>
                      <option value={2}>UK</option>
                      <option value={3}>India</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <select
                      className="form-select border-primary p-2"
                      aria-label="Default select example"
                    >
                      <option selected>Select City</option>
                      <option value={1}>Depend On Country</option>
                      <option value={2}>UK</option>
                      <option value={3}>India</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <select
                      className="form-select border-primary p-2"
                      aria-label="Default select example"
                    >
                      <option selected>Select Palace</option>
                      <option value={1}>Depend On Country</option>
                      <option value={2}>UK</option>
                      <option value={3}>India</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <select
                      className="form-select border-primary p-2"
                      aria-label="Default select example"
                    >
                      <option selected>Small Event</option>
                      <option value={1}>Event Type</option>
                      <option value={2}>Big Event</option>
                      <option value={3}>Small Event</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <select
                      className="form-select border-primary p-2"
                      aria-label="Default select example"
                    >
                      <option selected>No. Of Palace</option>
                      <option value={1}>100-200</option>
                      <option value={2}>300-400</option>
                      <option value={3}>500-600</option>
                      <option value={4}>700-800</option>
                      <option value={5}>900-1000</option>
                      <option value={6}>1000+</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <select
                      className="form-select border-primary p-2"
                      aria-label="Default select example"
                    >
                      <option selected>Vegetarian</option>
                      <option value={1}>Vegetarian</option>
                      <option value={2}>Non Vegetarian</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <input
                      type="mobile"
                      className="form-control border-primary p-2"
                      placeholder="Your Contact No."
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <input
                      type="date"
                      className="form-control border-primary p-2"
                      placeholder="Select Date"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <input
                      type="email"
                      className="form-control border-primary p-2"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-primary px-5 py-3 rounded-pill"
                    >
                      Submit Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1">
              <img
                src="img/background-site.jpg"
                className="img-fluid h-100 w-100 rounded-end"
                style={{ objectFit: "cover", opacity: "0.7" }}
                alt
              />
            </div>
          </div>
        </div>
      </div>
      {/* Book Us End */}
      <Footer />
    </>
  );
};

export default Booking;
