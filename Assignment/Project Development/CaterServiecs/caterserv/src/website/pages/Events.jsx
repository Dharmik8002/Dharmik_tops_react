import React from "react";
import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";
import CommanHeading from "../comman/CommanHeading";

const Events = () => {
  return (
    <>
      <Navbar />
      <CommanHeading title="Events" subtitle="Events" />
      <div>
        {/* Events Start */}  
        <div className="container-fluid event py-6">
          <div className="container">
            <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
              <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                Latest Events
              </small>
              <h1 className="display-5 mb-5">
                Our Social &amp; Professional Events Gallery
              </h1>
            </div>
            <div className="tab-class text-center">
              <ul
                className="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp"
                data-wow-delay="0.1s"
              >
                <li className="nav-item p-2">
                  <a
                    className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill active"
                    data-bs-toggle="pill"
                    href="#tab-1"
                  >
                    <span className="text-dark" style={{ width: 150 }}>
                      All Events
                    </span>
                  </a>
                </li>
                <li className="nav-item p-2">
                  <a
                    className="d-flex py-2 mx-2 border border-primary bg-light rounded-pill"
                    data-bs-toggle="pill"
                    href="#tab-2"
                  >
                    <span className="text-dark" style={{ width: 150 }}>
                      Wedding
                    </span>
                  </a>
                </li>
                <li className="nav-item p-2">
                  <a
                    className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill"
                    data-bs-toggle="pill"
                    href="#tab-3"
                  >
                    <span className="text-dark" style={{ width: 150 }}>
                      Corporate
                    </span>
                  </a>
                </li>
                <li className="nav-item p-2">
                  <a
                    className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill"
                    data-bs-toggle="pill"
                    href="#tab-4"
                  >
                    <span className="text-dark" style={{ width: 150 }}>
                      Cocktail
                    </span>
                  </a>
                </li>
                <li className="nav-item p-2">
                  <a
                    className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill"
                    data-bs-toggle="pill"
                    href="#tab-5"
                  >
                    <span className="text-dark" style={{ width: 150 }}>
                      Buffet
                    </span>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="row g-4">
                        <div
                          className="col-md-6 col-lg-3 wow bounceInUp"
                          data-wow-delay="0.1s"
                        >
                          <div className="event-img position-relative">
                            <img
                              className="img-fluid rounded w-100"
                              src="img/event-1.jpg"
                              alt
                            />
                            <div className="event-overlay d-flex flex-column p-4">
                              <h4 className="me-auto">Wedding</h4>
                              <a
                                href="img/event-1.jpg"
                                data-lightbox="event-1"
                                className="my-auto"
                              >
                                <i className="fas fa-search-plus text-dark fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-md-6 col-lg-3 wow bounceInUp"
                          data-wow-delay="0.3s"
                        >
                          <div className="event-img position-relative">
                            <img
                              className="img-fluid rounded w-100"
                              src="img/event-2.jpg"
                              alt
                            />
                            <div className="event-overlay d-flex flex-column p-4">
                              <h4 className="me-auto">Corporate</h4>
                              <a
                                href="img/event-2.jpg"
                                data-lightbox="event-2"
                                className="my-auto"
                              >
                                <i className="fas fa-search-plus text-dark fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-md-6 col-lg-3 wow bounceInUp"
                          data-wow-delay="0.5s"
                        >
                          <div className="event-img position-relative">
                            <img
                              className="img-fluid rounded w-100"
                              src="img/event-3.jpg"
                              alt
                            />
                            <div className="event-overlay d-flex flex-column p-4">
                              <h4 className="me-auto">Wedding</h4>
                              <a
                                href="img/event-3.jpg"
                                data-lightbox="event-3"
                                className="my-auto"
                              >
                                <i className="fas fa-search-plus text-dark fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-md-6 col-lg-3 wow bounceInUp"
                          data-wow-delay="0.7s"
                        >
                          <div className="event-img position-relative">
                            <img
                              className="img-fluid rounded w-100"
                              src="img/event-4.jpg"
                              alt
                            />
                            <div className="event-overlay d-flex flex-column p-4">
                              <h4 className="me-auto">Buffet</h4>
                              <a
                                href="img/event-4.jpg"
                                data-lightbox="event-4"
                                className="my-auto"
                              >
                                <i className="fas fa-search-plus text-dark fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-md-6 col-lg-3 wow bounceInUp"
                          data-wow-delay="0.1s"
                        >
                          <div className="event-img position-relative">
                            <img
                              className="img-fluid rounded w-100"
                              src="img/event-5.jpg"
                              alt
                            />
                            <div className="event-overlay d-flex flex-column p-4">
                              <h4 className="me-auto">Cocktail</h4>
                              <a
                                href="img/event-5.jpg"
                                data-lightbox="event-5"
                                className="my-auto"
                              >
                                <i className="fas fa-search-plus text-dark fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-md-6 col-lg-3 wow bounceInUp"
                          data-wow-delay="0.3s"
                        >
                          <div className="event-img position-relative">
                            <img
                              className="img-fluid rounded w-100"
                              src="img/event-6.jpg"
                              alt
                            />
                            <div className="event-overlay d-flex flex-column p-4">
                              <h4 className="me-auto">Wedding</h4>
                              <a
                                href="img/event-6.jpg"
                                data-lightbox="event-6"
                                className="my-auto"
                              >
                                <i className="fas fa-search-plus text-dark fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-md-6 col-lg-3 wow bounceInUp"
                          data-wow-delay="0.5s"
                        >
                          <div className="event-img position-relative">
                            <img
                              className="img-fluid rounded w-100"
                              src="img/event-7.jpg"
                              alt
                            />
                            <div className="event-overlay d-flex flex-column p-4">
                              <h4 className="me-auto">Buffet</h4>
                              <a
                                href="img/event-7.jpg"
                                data-lightbox="event-7"
                                className="my-auto"
                              >
                                <i className="fas fa-search-plus text-dark fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-md-6 col-lg-3 wow bounceInUp"
                          data-wow-delay="0.7s"
                        >
                          <div className="event-img position-relative">
                            <img
                              className="img-fluid rounded w-100"
                              src="img/event-8.jpg"
                              alt
                            />
                            <div className="event-overlay d-flex flex-column p-4">
                              <h4 className="me-auto">Corporate</h4>
                              <a
                                href="img/event-8.jpg"
                                data-lightbox="event-17"
                                className="my-auto"
                              >
                                <i className="fas fa-search-plus text-dark fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                          <div className="event-img position-relative">
                            <img
                              className="img-fluid rounded w-100"
                              src="img/event-1.jpg"
                              alt
                            />
                            <div className="event-overlay d-flex flex-column p-4">
                              <h4 className="me-auto">Wedding</h4>
                              <a
                                href="img/01.jpg"
                                data-lightbox="event-8"
                                className="my-auto"
                              >
                                <i className="fas fa-search-plus text-dark fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                          <div className="event-img position-relative">
                            <img
                              className="img-fluid rounded w-100"
                              src="img/event-2.jpg"
                              alt
                            />
                            <div className="event-overlay d-flex flex-column p-4">
                              <h4 className="me-auto">Wedding</h4>
                              <a
                                href="img/01.jpg"
                                data-lightbox="event-9"
                                className="my-auto"
                              >
                                <i className="fas fa-search-plus text-dark fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                          <div className="event-img position-relative">
                            <img
                              className="img-fluid rounded w-100"
                              src="img/event-3.jpg"
                              alt
                            />
                            <div className="event-overlay d-flex flex-column p-4">
                              <h4 className="me-auto">Corporate</h4>
                              <a
                                href="img/01.jpg"
                                data-lightbox="event-10"
                                className="my-auto"
                              >
                                <i className="fas fa-search-plus text-dark fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                          <div className="event-img position-relative">
                            <img
                              className="img-fluid rounded w-100"
                              src="img/event-4.jpg"
                              alt
                            />
                            <div className="event-overlay d-flex flex-column p-4">
                              <h4 className="me-auto">Corporate</h4>
                              <a
                                href="img/01.jpg"
                                data-lightbox="event-11"
                                className="my-auto"
                              >
                                <i className="fas fa-search-plus text-dark fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-4" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                          <div className="event-img position-relative">
                            <img
                              className="img-fluid rounded w-100"
                              src="img/event-5.jpg"
                              alt
                            />
                            <div className="event-overlay d-flex flex-column p-4">
                              <h4 className="me-auto">Cocktail</h4>
                              <a
                                href="img/01.jpg"
                                data-lightbox="event-12"
                                className="my-auto"
                              >
                                <i className="fas fa-search-plus text-dark fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                          <div className="event-img position-relative">
                            <img
                              className="img-fluid rounded w-100"
                              src="img/event-6.jpg"
                              alt
                            />
                            <div className="event-overlay d-flex flex-column p-4">
                              <h4 className="me-auto">Cocktail</h4>
                              <a
                                href="img/01.jpg"
                                data-lightbox="event-13"
                                className="my-auto"
                              >
                                <i className="fas fa-search-plus text-dark fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-5" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                          <div className="event-img position-relative">
                            <img
                              className="img-fluid rounded w-100"
                              src="img/event-7.jpg"
                              alt
                            />
                            <div className="event-overlay d-flex flex-column p-4">
                              <h4 className="me-auto">Buffet</h4>
                              <a
                                href="img/01.jpg"
                                data-lightbox="event-14"
                                className="my-auto"
                              >
                                <i className="fas fa-search-plus text-dark fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                          <div className="event-img position-relative">
                            <img
                              className="img-fluid rounded w-100"
                              src="img/event-8.jpg"
                              alt
                            />
                            <div className="event-overlay d-flex flex-column p-4">
                              <h4 className="me-auto">Buffet</h4>
                              <a
                                href="img/01.jpg"
                                data-lightbox="event-15"
                                className="my-auto"
                              >
                                <i className="fas fa-search-plus text-dark fa-2x" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Events End */}
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
      </div>
      <Footer />
    </>
  );
};

export default Events;
