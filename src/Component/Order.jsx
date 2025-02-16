// Offers.jsx
import React from "react";
import image from "../assets/card1.webp";


const Order = () => {
  return (
    <section className="order">
      
      <div className="order-container">
        {/* Left Side Content */}
        <div className="order-text">
          <h2>
            What <br />
            Would You Like <br />
            To <span>Order</span> Today?
          </h2>
          <p>
            Our job is to fill your tummy with delicious food with fast and free delivery.
          </p>
          <div className="order-buttons">
            <button className="ord-btn ord-btn-green">Order Now!</button>
            <button className="ord-btn ord-btn-outline">Dine In</button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="order-image">
          <img src={image} alt="Food Offer" />
        </div>
      </div>
      </section>
  );
};

export default Order;
