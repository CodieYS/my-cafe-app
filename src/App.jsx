import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Food from "./Component/Food"; // Import the Food component
import Offers from "./Component/Offers"; // Import Offers component
import Order from "./Component/Order";
import FoodCategories from "./Component/FoodCategories";
import About from "./Component/About";
import CustomerReviews from "./Component/CustomerReviews";
import "./Styles/styles.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        {/* Navbar - Visible on all pages */}
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food-categories" element={<FoodCategories />} />
        <Route path="/CustomerReviews" element={<CustomerReviews/>}/>
        <Route path="/About" element={<About />} />
        <Route path="/offers" element={<Offers />} />
          <Route path="/food" element={<Food />} /> 
          <Route path="/Order" element={<Order />} />
          {/* You can add more routes here */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;