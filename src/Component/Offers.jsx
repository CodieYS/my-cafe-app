// Offers.jsx
import React from "react";
import image from "../assets/Menu/foodOffer.png";
import combo1 from "../assets/Menu/Combo11.png";
import combo2 from "../assets/Menu/Combo2.avif";
import combo3 from "../assets/Menu/combo3.png";
import combo4 from "../assets/Menu/Combo4.png";

const Offers = () => {
  return (
    <section className="offers">
      <div className="offers-container">
        {/* Left Side Content */}
        <div className="offers-text">
          <h2>
            Special <br />
            Deals & <br />
            <span>Offers</span> For You!
          </h2>
          <p>
            Enjoy amazing discounts and exclusive deals on your favorite meals.{" "}
            <br />
            Fast and free delivery included!
          </p>
          <div className="offers-buttons">
            <button className="btn">View Offers</button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="offers-image">
          <img src={image} alt="Food Offer" />
        </div>
      </div>

      {/* Cards Section */}
      <div className="offers-cards">
        <div className="offer-card">
          <img src={combo1} alt="Paneer Pulav" />
          <h3>Mix Veg Sandwich + Salted Fries + 200ML Coldrink(ANy)</h3>
          <div className="offer-card-footer">
            <span>₹ 170</span>
          </div>
        </div>

        <div className="offer-card">
          <img src={combo2} alt="Butter Paneer" />
          <h3>Veg Burger + Salted Fries + 200Ml Coke</h3>
          <div className="offer-card-footer">
            <span>₹ 160</span>
          </div>
        </div>

        <div className="offer-card">
          <img src={combo3} alt="Soya Pulao Rice" />
          <h3>Hot Coffee + Veg Cheese Toast</h3>
          <div className="offer-card-footer">
            <span>₹ 110</span>
          </div>
        </div>

        <div className="offer-card">
          <img src={combo4} alt="Chicken Wings" />
          <h3>Aloo Tikki Burger + Salted Fries + Mojito</h3>
          <div className="offer-card-footer">
            <span>₹ 189</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
