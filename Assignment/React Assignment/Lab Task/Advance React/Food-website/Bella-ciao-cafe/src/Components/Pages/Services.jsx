import React from "react";
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import "./Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="services-img">
        <div className="container-serv">
          <div className="row">
            <div className="coll">
              <div className="wraper">
                <h1 className="s-text">Services</h1>
                <ul className="s-ul">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="text-white">/</li>
                  <li>
                    <Link style={{ color: "#EB0029" }} to="/services">
                      Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* services section  */}
      <div className="services-card">
        <div className="card-row">
          <div className="card" id="1">
            <div className="card-body">
              <img
                className="card-img"
                src="https://www.ex-coders.com/php-template/fresheat/assets/img/icon/servicesIcon1_1.png"
                alt=""
              />
              <h5 className="card-title">Dining Guides</h5>
              <p className="card-text">
                Detailed reviews of local eateries, covering various cuisines,
                price points, and dining experiences.
              </p>
            </div>
          </div>
          <div className="card" id="2">
            <div className="card-body">
              <img
                className="card-img"
                src="https://www.ex-coders.com/php-template/fresheat/assets/img/icon/servicesIcon1_2.png"
                alt=""
              />
              <h5 className="card-title">100% Fresh Food</h5>
              <p className="card-text">
                Detailed reviews of local eateries, covering various cuisines,
                price points, and dining experiences.
              </p>
            </div>
          </div>
          <div className="card" id="3">
            <div className="card-body">
              <img
                className="card-img"
                src="https://www.ex-coders.com/php-template/fresheat/assets/img/icon/servicesIcon1_3.png"
                alt=""
              />
              <h5 className="card-title">Special Offers And Discounts</h5>
              <p className="card-text">
                Detailed reviews of local eateries, covering various cuisines,
                price points, and dining experiences.
              </p>
            </div>
          </div>
          <div className="card" id="4">
            <div className="card-body">
              <img
                className="card-img"
                src="https://www.ex-coders.com/php-template/fresheat/assets/img/icon/servicesIcon1_4.png"
                alt=""
              />
              <h5 className="card-title">Resturent Reviews</h5>
              <p className="card-text">
                Detailed reviews of local eateries, covering various cuisines,
                price points, and dining experiences.
              </p>
            </div>
          </div>
          <div className="card" id="5">
            <div className="card-body">
              <img
                className="card-img"
                src="https://www.ex-coders.com/php-template/fresheat/assets/img/icon/servicesIcon1_5.png"
                alt=""
              />
              <h5 className="card-title">Food Testing Events</h5>
              <p className="card-text">
                Detailed reviews of local eateries, covering various cuisines,
                price points, and dining experiences.
              </p>
            </div>
          </div>
          <div className="card" id="6">
            <div className="card-body">
              <img
                className="card-img"
                src="https://www.ex-coders.com/php-template/fresheat/assets/img/icon/servicesIcon1_6.png"
                alt=""
              />
              <h5 className="card-title">Online Ordering</h5>
              <p className="card-text">
                Detailed reviews of local eateries, covering various cuisines,
                price points, and dining experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* cta section */}

      <div className="promo-section">
        <div className="promo-content">
          <p className="download-text">🍱 DOWNLOAD APP</p>
          <h1 className="promo-title">
            Download Food App
            <br />
            Order Today!
          </h1>
          <div className="app-buttons">
            <a href="#" className="app-store-button red">
              <img
                src="https://www.ex-coders.com/php-template/fresheat/assets/img/icon/appleStore.svg"
                alt="Apple"
              />
              <div>
                <span>Get it on</span>
                <strong>APP STORE</strong>
              </div>
            </a>
            <a href="#" className="app-store-button dark">
              <img
                src="https://www.ex-coders.com/php-template/fresheat/assets/img/icon/playStore.svg"
                alt="Google Play"
              />
              <div>
                <span>Get it on</span>
                <strong>GOOGLE PLAY</strong>
              </div>
            </a>
          </div>
        </div>

        <div className="promo-images">
          <div className="discount-badge">45% OFF</div>
          <img
            src="https://www.ex-coders.com/php-template/fresheat/assets/img/cta/ctaThumb3_1.png"
            alt=""
          />
          <img
            src="https://www.ex-coders.com/php-template/fresheat/assets/img/shape/ctaShape3_3.png"
            alt="Food Plate"
            className="food-image"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;
