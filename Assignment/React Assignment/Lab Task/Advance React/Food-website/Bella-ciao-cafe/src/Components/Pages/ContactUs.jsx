import React from "react";
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import "./Services.css";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="services-img">
        <div className="container-serv">
          <div className="row">
            <div className="coll">
              <div className="wraper">
                <h1 className="s-text">Contact Us</h1>
                <ul className="s-ul">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="text-white">/</li>
                  <li>
                    <Link style={{ color: "#EB0029" }} to="/services">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-card">
        <div className="card-row">
          <div className="card" id="1">
            <div className="card-body">
              <img
                className="card-img"
                src="https://www.ex-coders.com/php-template/fresheat/assets/img/icon/location.png"
                alt=""
              />
              <h5 className="card-title">Our Address</h5>
              <p className="card-text">
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
            </div>
          </div>
          <div className="card" id="2">
            <div className="card-body">
              <img
                className="card-img"
                src="https://www.ex-coders.com/php-template/fresheat/assets/img/icon/gmail.png"
                alt=""
              />
              <h5 className="card-title">info@example.com</h5>
              <p className="card-text">
                Email us any time for any kind of problem.
              </p>
            </div>
          </div>
          <div className="card" id="3">
            <div className="card-body">
              <img
                className="card-img"
                src="https://www.ex-coders.com/php-template/fresheat/assets/img/icon/phone.png"
                alt=""
              />
              <h5 className="card-title">Phon: 1800 0051 32148</h5>
              <p className="card-text">
                24/7/365 priority Live Chat and ticketing support.
              </p>
            </div>
          </div>
          <div className="card" id="4">
            <div className="card-body">
              <img
                className="card-img"
                src="https://www.ex-coders.com/php-template/fresheat/assets/img/icon/clock.png"
                alt=""
              />
              <h5 className="card-title">Openinig Hours</h5>
              <p className="card-text">
                Sunday-Fri: 9 AM – 6 PM Saturday: 9 AM – 4 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-image">
          <img
            src="https://www.ex-coders.com/php-template/fresheat/assets/img/contact/contactThumb2_1.png"
            alt="Delicious Dish"
          />
        </div>

        <div className="contact-form">
          <h2>Get In Touch</h2>
          <form>
            <div className="input-row">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="input-row">
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" />
            </div>
            <textarea
              placeholder="Write your message here..."
              rows="4"
            ></textarea>

            <div className="checkbox-row">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree">
                Collaboratively formulate principle capital. Progressively
                evolve user
              </label>
            </div>

            <button type="submit">
              SUBMIT NOW <span className="arrow">→</span>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
