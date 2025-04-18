import React from "react";
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import "./Menu.css"; // Import your CSS file for styling
import pastaImage from "../../assets/images/chinese-pasta.png"; // Example image importimport chinesePasta from "../assets/chinese-pasta.jpg";
import eggCucumber from "../../assets/images/egg-cucumber.png";
import chickenFriedRice from "../../assets/images/fried-rice.png";
import chickenWhiteRice from "../../assets/images/white-rice.png";
import chickenPizza from "../../assets/images/pizza.png";
import spatialBarger from "../../assets/images/burger.png";
import chickenNoodles from "../../assets/images/noodles.png";
import vegetablesBurger from "../../assets/images/burger.png";

const categories = [
  { name: "Fast Food", icon: "🍔" },
  { name: "Drink & Juice", icon: "🍹" },
  { name: "Chicken Pizza", icon: "🍕" },
  { name: "Fresh Pasta", icon: "🍝" },
];

const menuItems = [
  { name: "Chinese Pasta", price: 15.99, img: pastaImage },
  { name: "Egg And Cucumber", price: 65.99, img: eggCucumber },
  { name: "Chicken Fried Rice", price: 25.99, img: chickenFriedRice },
  { name: "Chicken White Rice", price: 135.99, img: chickenWhiteRice },
  { name: "Chicken Pizza", price: 115.99, img: chickenPizza },
  { name: "Spatial Barger", price: 95.99, img: spatialBarger },
  { name: "Chicken Noodles", price: 154.99, img: chickenNoodles },
  { name: "Vegetables Burger", price: 75.99, img: vegetablesBurger },
];

const Menu = () => {
  return (
    <>
      <Navbar />
      <section className="menu-section">
        <h4 className="menu-subtitle">🍱 FOOD MENU 🍱</h4>
        <h2 className="menu-title">Fresheat Foods Menu</h2>

        <div className="menu-categories">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`category-btn ${index === 0 ? "active" : ""}`}
            >
              <span className="cat-icon">{cat.icon}</span> {cat.name}
            </button>
          ))}
        </div>

        <div className="menu-list">
          {menuItems.map((item, index) => (
            <div className="menu-item" key={index}>
              <img src={item.img} alt={item.name} className="menu-img" />
              <div className="menu-info">
                <h4 className={index === 0 ? "highlight-name" : ""}>
                  {item.name}
                </h4>
                <p>It’s a testament to our.</p>
              </div>
              <div className="menu-price">${item.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Menu;
