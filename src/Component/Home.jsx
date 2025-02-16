import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo1 from "../assets/Menu/Home1.jpg";
import logo2 from "../assets/Menu/Home2img.jpg";
import logo3 from "../assets/Menu/Home3img.jpg";
import logo4 from "../assets/Menu/Home4.jpg";
import card1 from "../assets/Menu/card11.png";
import card2 from "../assets/Menu/card2.png";
import card3 from "../assets/Menu/card3.png";
import card4 from "../assets/Menu/card4.png";
import card5 from "../assets/Menu/card5.png";
import card6 from "../assets/Menu/card6.png";

const Home = () => {
  // Array of image URLs
  const images = [logo2, logo4, logo3, logo1];
  const navigate = useNavigate();

  // State to track current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle previous button click
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to handle next button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main>
       
      <div className="image-slider">
      <div className="home-text-content">
        <h1>Welcome to Our Cafe</h1>
        <p>Enjoy delicious meals and refreshing beverages in a cozy ambiance.</p>
        <button onClick={() => navigate("/food-categories")} className="explore-btn">Explore Menu</button>
      </div>

        <button className="slider-btn" onClick={handlePrevious}>
          {"<"}
        </button>
        <div className="image-box">
          <img
            src={images[currentIndex]} // Display the current image
            alt={`Slide ${currentIndex + 1}`}
          />
        </div>
        <button className="slider-btn" onClick={handleNext}>
          {">"}
        </button>
      </div>

      <div className="cards-section">
        <div className="card" onClick={() => navigate("/food-categories")}>
          <img src={card1} alt="Fruits & Vegetables" />
          <h3>Top Categories</h3>
        </div>
        <div className="card" onClick={() => navigate("/About")}>
          <img src={card3} alt="Fruits & Vegetables" />
          <h3>About Us</h3>
        </div>
        <div className="card" onClick={() => navigate("/Offers")}>
          <img src={card2} alt="Fruits & Vegetables" />
          <h3>Our Best Offers</h3>
        </div>
        <div className="card" onClick={() => navigate("/food-categories")}>
          <img src={card4} alt="Fruits & Vegetables" />
          <h3>Social Media</h3>
        </div>
        <div className="card" onClick={() => navigate("/food-categories")}>
          <img src={card5} alt="Fruits & Vegetables" />
          <h3>Location 📍</h3>
        </div>
        <div className="card" onClick={() => navigate("/CustomerReviews")}>
          <img src={card6} alt="Fruits & Vegetables" />
          <h3>Customer's Review</h3>
        </div>
      </div>
    </main>
  );
};

export default Home;
