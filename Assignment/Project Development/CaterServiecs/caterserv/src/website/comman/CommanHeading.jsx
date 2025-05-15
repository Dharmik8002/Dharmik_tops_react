import React from "react";
import { Link } from "react-router-dom";

const CommanHeading = ({ title, subtitle }) => {
  return (
    <>
      {/* Hero Start */}
      <div className="container-fluid bg-light py-6 my-6 mt-0">
        <div className="container text-center animated bounceInDown">
          <h1 className="display-1 mb-4">{title}</h1>
          <ol className="breadcrumb justify-content-center mb-0 animated bounceInDown">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item text-dark" aria-current="page">
              {subtitle}
            </li>
          </ol>
        </div>
      </div>
      {/* Hero End */}
    </>
  );
};

export default CommanHeading;
