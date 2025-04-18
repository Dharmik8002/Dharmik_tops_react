import React from "react";
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import Food from "./Food";

const Home = () => {
  return (
    <>
      <Navbar />
      <section id="Home">
        <h1 className="h-f">BELLA CIAO</h1>
        <p>THE ULTIMATE RESTAURENT &amp; CAFE THEME</p>
        <button className="btn">Order Now</button>
      </section>
      <Food
        title={"BEST FOOD"}
        basetilte={"Popular Food Items"}
        img="https://www.ex-coders.com/php-template/fresheat/assets/img/shape/bestFoodItemsShape1_2.png"
        img1="https://www.ex-coders.com/php-template/fresheat/assets/img/shape/bestFoodItemsShape1_1.png"
      />
      <div style={{ border: "1px solid black" }}></div>
      <Food
        title={"Popular Dishes"}
        basetilte={"Popular Selling Dishes"}
        img="https://www.ex-coders.com/php-template/fresheat/assets/img/shape/popularDishesShape1_2.png"
        img1="https://www.ex-coders.com/php-template/fresheat/assets/img/shape/popularDishesShape1_1.png"
      />

      <Footer />
    </>
  );
};

export default Home;
