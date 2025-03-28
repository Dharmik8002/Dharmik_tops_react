import React from "react";

const Card = ({ name, age, location, img }) => {
  return (
    <>
      
      <div className="col-md-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h4 className="card-title">{age}</h4>
            <p className="card-text">{location}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
