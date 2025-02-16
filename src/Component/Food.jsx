import React, { useState } from "react";
import { Link } from "react-router-dom";
import FoodSection from "./FoodSection";
import { useNavigate } from "react-router-dom";
import logo1 from "../assets/Menu/Home2img.jpg";
import logo2 from "../assets/Menu/Home3img.jpg";
import logo3 from "../assets/Menu/Home1.jpg";
import logo4 from "../assets/Menu/MomosFoodMenu.jpg";
import logo5 from "../assets/Menu/SpringRollFoodMenu.jpg";
import logo6 from "../assets/Menu/ManchurianFoodMenu.jpg";
import logo7 from "../assets/Menu/PastaFoodMenu.jpg";
import logo8 from "../assets/Menu/NoodlesFoodMenu.jpg";
import logo9 from "../assets/Menu/RollFoodMenu.jpg";
import logo10 from "../assets/Menu//french FriesMenu.jpg";


const menuImages = [
  logo1, logo2, logo3, logo4, logo5, logo6,
  logo7, logo2, logo8, logo9, logo10, logo1,
  logo3, logo1
];

const Food = () => {
  // Settings:
  const visibleCount = 7; // Container me 7 images dikhengi
  const step = 1;         // Har click par ideally 2 images aage shift (agar possible ho)
  const totalImages = menuImages.length;
  const maxIndex = totalImages - visibleCount - 3; // 14 - 7 = 7

  // Slide indices generate karte hain:
  // For step=2, hume expected starting indices: [0, 2, 4, 6] ho sakte hain.
  // Lekin agar last index (maxIndex) include nahi hua to usse add kar dete hain.
  const slideIndices = [];
  for (let i = 0; i <= maxIndex; i += step) {
    slideIndices.push(i);
  }
  if (slideIndices[slideIndices.length - 1] !== maxIndex) {
    slideIndices.push(maxIndex);
  }
  // slideIndices ab ho sakta hai: [0, 2, 4, 6, 7]

  // currentSlide: index of our slideIndices array.
  const [currentSlide, setCurrentSlide] = useState(0);
  // currentIndex: actual starting image index in menuImages.
  const currentIndex = slideIndices[currentSlide];

  const handleNext = () => {
    if (currentSlide < slideIndices.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <>
    <div className="menu-container">
      <div className="menu-header">
        <h2 className="menu-heading">What's on your mind?</h2>
        <div className="menu-btn-container">
          <button
            className="menu-btn"
            onClick={handlePrevious}
            disabled={currentSlide === 0}
          >
            {"<"}
          </button>
          <button
            className="menu-btn"
            onClick={handleNext}
            disabled={currentSlide === slideIndices.length - 1}
          >
            {">"}
          </button>
        </div>
      </div>
      <div
        className="menu-slider"
        style={{
          // Har image ka width container ke hisab se = 100/visibleCount %
          // Slider ko shift karne ke liye: currentIndex * (100/visibleCount)% shift hoga.
          transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
          // Total width proportional to total images
          width: `${(totalImages / visibleCount) * 100}%`
        }}
      >
        {menuImages.map((image, index) => (
          <Link key={index} to="/food">
            <div className="menu-item">
              <img src={image} alt={`Menu Item ${index + 1}`} />
            </div>
          </Link>
        ))}
      </div>
    </div>
      {/* Food Section */}
      <div className="food-section-container">
        <FoodSection />
      </div>
    </>
  );
};

export default Food;
