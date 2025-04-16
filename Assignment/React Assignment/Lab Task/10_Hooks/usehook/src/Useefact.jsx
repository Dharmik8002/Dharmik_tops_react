// Task 2: Use the useEffect() hook to fetch and display data from an API when the
//  component mounts.

import React, { useEffect, useState } from "react";
import axios from "axios";

const Useefact = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCrads();
  }, []);

  const fetchCrads = async () => {
    const res = await axios.get("https://fakestoreapi.in/api/products");
    // console.log(res.data.products);
    setCards(res.data.products);
  };
  return (
    <>
      {/* api data put in card logic */}
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {cards &&
          cards.map((item, index) => {
            const { image, title, price, category, brand, color } = item;
            return (
              <div className="col" key={index}>
                <div className="card">
                  <img src={image} className="card-img-top" alt={title} />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{price}</p>
                    <p className="card-text">{category}</p>
                    <p className="card-text">{brand}</p>
                    <p className="card-text">{color}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Useefact;
