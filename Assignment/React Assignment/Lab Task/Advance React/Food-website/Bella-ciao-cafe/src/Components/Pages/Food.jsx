import React from "react";
import "./Services.css";

const Food = ({title,basetilte,img, img1}) => {
  return (
    <>
      <section className="services-container d-flex" id="services_container">
        <div>
          <p className="serv">
            <img
              src="https://www.ex-coders.com/php-template/fresheat/assets/img/icon/titleIcon.svg"
              alt=""
            />{" "}
            {title}{" "}
            <img
              src="https://www.ex-coders.com/php-template/fresheat/assets/img/icon/titleIcon.svg"
              alt=""
            />
          </p>
          <div>
            <h1 className="Popular">{basetilte} </h1>
          </div>
        </div>
        <div className="pizza-container shape-1">
          <img
            className=""
            src={img}
            alt=""
          />
        </div>
        <div id="services">
          <div className="box">
            <img
              src="https://www.ex-coders.com/php-template/fresheat/assets/img/food-items/item1_1.png"
              alt="background meal"
            />
            <h2 className="center">Pizaa</h2>
            <p className="center">The Registration Fee</p>
            <p className="center" style={{ color: "red" }}>
              $50.00
            </p>
          </div>
          <div className="box">
            <img
              src="https://www.ex-coders.com/php-template/fresheat/assets/img/food-items/item1_2.png"
              alt="cake and pastry"
            />
            <h2 className="h-s center">Egg and Cucumber</h2>
            <p className="center">The Registration Fee</p>
            <p className="center" style={{ color: "red" }}>
              $80.00
            </p>
          </div>
          <div className="box">
            <img
              src="https://www.ex-coders.com/php-template/fresheat/assets/img/food-items/item1_3.png"
              alt="food delivery"
            />
            <h2 className="h-s center">Fried Rice</h2>
            <p className="center">The Registration Fee</p>
            <p className="center" style={{ color: "red" }}>
              $40.00
            </p>
          </div>
          <div className="box">
            <img
              src="https://www.ex-coders.com/php-template/fresheat/assets/img/food-items/item1_4.png"
              alt="background meal"
            />
            <h2 className="center">Chicken Leg piece</h2>
            <p className="center">The Registration Fee</p>
            <p className="center" style={{ color: "red" }}>
              $100.00
            </p>
          </div>
        </div>
        <div className="pizza-container">
          <img
          className="shape"
            src={img1}
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Food;
