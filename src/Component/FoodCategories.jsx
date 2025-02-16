import React from "react";
import { useNavigate } from "react-router-dom";
import logo1 from "../assets/Menu/Home3img.jpg";
import logo2 from "../assets/Menu/Home2img.jpg";
import logo3 from "../assets/Menu/Home3img.jpg";
import logo4 from "../assets/Menu/Home2img.jpg";

const categories = [
  {
    image: logo1,
    title: "Green Goddess Salad",
    description: "This green goddess salad combines fresh shrimp, cucumber, artichoke hearts, and cherry tomatoes with homemade dressing.",
  },
  {
    image: logo2,
    title: "Chicken Power Salad",
    description: "Enjoy this filling and colorful salad for lunch or dinner. The dressing gets mixed into the same bowl that the salad is tossed.",
  },
  {
    image: logo3,
    title: "Cobb Mason Jar Salad",
    description: "Pack classic Cobb salad upside down in a mason jar for a healthy lunch that won't get soggy while sitting in the fridge all morning.",
  },
  {
    image: logo4,
    title: "Falafel Salad With Lemon-Tahini Dressing",
    description: "Deep-fried falafel can be a total grease bomb. But these pan-seared falafels still get crispy in just a few tablespoons of oil.",
  },
  {
    image: logo3,
    title: "Sweet Potato, Kale & Chicken Salad With Peanut",
    description: "These hearty kale & chicken salads hold up well for days, making them perfect for meal preparation lunches.",
  },
  {
    image: logo4,
    title: "Chicken Caprese Pasta Salad Bowls",
    description: "Pasta salad is a classic summer side dish, but adding protein and whole grains makes it a super satisfying lunch.",
  },
];

const FoodCategories = () => {
  const navigate = useNavigate();

  return (
 
    <section className="food-main" >
       <div className="food-categories" >
      <h2>Best Picks for You</h2> {/* Updated Heading */}
      
      <div className="food-cards-section">
        {categories.map((category, index) => (
          <div className="food-card" key={index}>
            <img src={category.image} alt={category.title} />
            <div className="food-card-content">
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="back-btn" onClick={() => navigate("/")}>Back to Home</button>
    </div>
    </section>
  );
};

export default FoodCategories;
