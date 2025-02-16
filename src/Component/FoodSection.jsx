import React from "react";
import PizzaMenu from "../assets/Menu/Home2img.jpg";
import MaggieMenu from "../assets/Menu/MaggieMenu.jpg";
import CoffeeImage from "../assets/Menu/Coffee.jpg";
import ColdDrinkImage from "../assets/Menu/Cold DrinkMenu.jpg";

// Food categories with multiple items under each category
const foodCategories = [
  {
    mainCategory: "Pizza",
    items: [
      {
        name: "Margherita",
        description: "Classic cheese and tomato pizza.",
        image: PizzaMenu,
      },
      {
        name: "Pepperoni",
        description: "Topped with pepperoni slices and cheese.",
        image: MaggieMenu
      },
    ],
  },
  {
    mainCategory: "Burger",
    items: [
      {
        name: "Espresso",
        description: "Strong and rich coffee shot.",
        image: CoffeeImage,
      },
      {
        name: "Cappuccino",
        description: "Creamy coffee with frothy milk.",
        image: ColdDrinkImage,
      },
    ],
  },
  {
    mainCategory: "Coffee",
    items: [
      {
        name: "Espresso",
        description: "Strong and rich coffee shot.",
        image: CoffeeImage,
      },
      {
        name: "Cappuccino",
        description: "Creamy coffee with frothy milk.",
        image: ColdDrinkImage,
      },
    ],
  },
  {
    mainCategory: "Coffee",
    items: [
      {
        name: "Espresso",
        description: "Strong and rich coffee shot.",
        image: CoffeeImage,
      },
      {
        name: "Cappuccino",
        description: "Creamy coffee with frothy milk.",
        image: ColdDrinkImage,
      },
    ],
  },
  {
    mainCategory: "Coffee",
    items: [
      {
        name: "Espresso",
        description: "Strong and rich coffee shot.",
        image: CoffeeImage,
      },
      {
        name: "Cappuccino",
        description: "Creamy coffee with frothy milk.",
        image: ColdDrinkImage,
      },
    ],
  },
  {
    mainCategory: "Coffee",
    items: [
      {
        name: "Espresso",
        description: "Strong and rich coffee shot.",
        image: CoffeeImage,
      },
      {
        name: "Cappuccino",
        description: "Creamy coffee with frothy milk.",
        image: ColdDrinkImage,
      },
    ],
  },
  {
    mainCategory: "Coffee",
    items: [
      {
        name: "Espresso",
        description: "Strong and rich coffee shot.",
        image: CoffeeImage,
      },
      {
        name: "Cappuccino",
        description: "Creamy coffee with frothy milk.",
        image: ColdDrinkImage,
      },
    ],
  },
  {
    mainCategory: "Coffee",
    items: [
      {
        name: "Espresso",
        description: "Strong and rich coffee shot.",
        image: CoffeeImage,
      },
      {
        name: "Cappuccino",
        description: "Creamy coffee with frothy milk.",
        image: ColdDrinkImage,
      },
    ],
  },
  {
    mainCategory: "Coffee",
    items: [
      {
        name: "Espresso",
        description: "Strong and rich coffee shot.",
        image: CoffeeImage,
      },
      {
        name: "Cappuccino",
        description: "Creamy coffee with frothy milk.",
        image: ColdDrinkImage,
      },
    ],
  },
  {
    mainCategory: "Coffee",
    items: [
      {
        name: "Espresso",
        description: "Strong and rich coffee shot.",
        image: CoffeeImage,
      },
      {
        name: "Cappuccino",
        description: "Creamy coffee with frothy milk.",
        image: ColdDrinkImage,
      },
    ],
  },
  
];

const FoodSection = () => {
  return (
    <div className="food-section">
      <h2 className="section-heading">Explore Our Food Menu</h2>

      {/* Loop through main categories */}
      {foodCategories.map((category, index) => (
        <div key={index}>
          {/* Main category heading (outside the container) */}
          <h2 className="food-main-category">{category.mainCategory}</h2>

          {/* Loop through individual food items under each category */}
          {category.items.map((item, idx) => (
            <div key={idx} className="food-category">
              {/* Left Side (Food Name & Description) */}
              <div className="food-category-left">
                <h3 className="food-item-name">{item.name}</h3>
                <p className="food-description">{item.description}</p>
              </div>

              {/* Right Side (Image) */}
              <img src={item.image} alt={item.name} className="food-category-image" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FoodSection;
