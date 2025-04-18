import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav id="navbar">
        <div id="logo">THE BELLA CIAO CAFE</div>

        <ul>
          <li className="items">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="items">
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li className="items">
            <NavLink to="/services">Services</NavLink>
          </li>
          {/* <li className="items">
            <NavLink to="/restaurent">Restaurent</NavLink>
          </li> */}
          <li className="items">
            <NavLink to="/contactUs">Contact Us</NavLink>
          </li>
        </ul>

        <div className="burgar" id="burgar">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
