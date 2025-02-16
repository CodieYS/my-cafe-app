import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/Menu/Home2img.jpg"; // Hero image
import img1 from "../assets/Menu/Home3img.jpg"; // Replace with actual images
import img2 from "../assets/Menu/Home2img.jpg";
import img3 from "../assets/Menu/Home3img.jpg";

const About = () => {
  const navigate = useNavigate();

  const aboutData = [
    {
      img: img1,
      title: "Our Special Brews",
      description: "Handcrafted beverages made with love and premium ingredients.",
    },
    {
      img: img2,
      title: "Relaxing Ambience",
      description: "Enjoy a peaceful and cozy environment to refresh your mind.",
    },
    {
      img: img3,
      title: "Freshly Baked Goodies",
      description: "Pair your coffee with our delicious pastries and desserts.",
    },
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={heroImage} alt="Tea-Coffee Zone" className="hero-image" />
      </div>

      {/* Intro Text */}
      <div className="intro-text">
        <h2>Welcome to Tea-Coffee Zone</h2>
        <p>
          Experience the finest selection of teas and coffees, handpicked from
          around the world to give you the best taste and aroma. A place where
          every sip tells a story.
        </p>
      </div>

      {/* Alternating Sections */}
      <div className="about-sections">
        {aboutData.map((item, index) => (
          <div className="about-item" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="text-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="back-btn" onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default About;
