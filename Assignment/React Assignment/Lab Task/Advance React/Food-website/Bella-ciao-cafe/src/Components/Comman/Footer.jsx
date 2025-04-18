import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-contact-box">
          <MapPin className="footer-icon" />
          <div>
            <p className="footer-label">Address</p>
            <p>4648 Rocky Road Philadelphia</p>
          </div>
        </div>
        <div className="footer-contact-box">
          <Mail className="footer-icon" />
          <div>
            <p className="footer-label">Send Email</p>
            <p>info@exmple.com</p>
          </div>
        </div>
        <div className="footer-contact-box">
          <Phone className="footer-icon" />
          <div>
            <p className="footer-label">Call Emergency</p>
            <p>+88 0123 654 99</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-col logo-col">
          <h2>FRESHEAT</h2>
          <p>
            Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a
            lacinia curabitur lacinia mollis
          </p>
          <div className="social-icons">
            <i className="fab fa-facebook-f" />
            <i className="fab fa-twitter" />
            <i className="fab fa-linkedin-in" />
            <i className="fab fa-youtube" />
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>➤ About Us</li>
            <li>➤ Our Gallery</li>
            <li>➤ Our Blogs</li>
            <li>➤ FAQ’s</li>
            <li>➤ Contact Us</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Our Menu</h3>
          <ul>
            <li>➤ Burger King</li>
            <li>➤ Pizza King</li>
            <li>➤ Fresh Food</li>
            <li>➤ Vegetable</li>
            <li>➤ Desserts</li>
          </ul>
        </div>

        <div className="footer-col contact-form">
          <h3>Contact Us</h3>
          <p>
            Monday – Friday: <span className="highlight">8am – 4pm</span>
          </p>
          <p>
            Saturday: <span className="highlight">8am – 12am</span>
          </p>

          <div className="subscribe">
            <input type="email" placeholder="Your email address" />
            <button>→</button>
          </div>

          <label className="checkbox-label">
            <input type="checkbox" />I agree to the{" "}
            <a href="#">Privacy Policy.</a>
          </label>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
