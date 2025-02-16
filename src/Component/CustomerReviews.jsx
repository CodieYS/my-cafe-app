import React from "react";
import { useNavigate } from "react-router-dom";
import customer1 from "../assets/Menu/Home2img.jpg" ;
import customer2 from "../assets/Menu/Home3img.jpg" ;
import customer3 from "../assets/Menu/Home2img.jpg" ;

const CustomerReviews = () => {

     const navigate = useNavigate();

  const reviews = [
    {
      img: customer1,
      name: "John Doe",
      feedback:
        "Absolutely love this cafe! The coffee is always fresh, and the pastries are just amazing. The ambiance is so cozy, it's my favorite spot to relax!",
    },
    {
      img: customer2,
      name: "Emily Smith",
      feedback:
        "The best place for tea lovers! The variety they offer is incredible, and the taste is unmatched. Highly recommended!",
    },
    {
      img: customer3,
      name: "Michael Johnson",
      feedback:
        "A perfect blend of great service, delicious food, and an inviting atmosphere. My go-to place for a peaceful coffee break!",
    },
  ];

  return (
    <div className="customer-reviews-container">
      <h2 className="review-heading">Our Happy Customers</h2>

      <div className="customer-reviews">
        {reviews.map((review, index) => (
          <div className="review-item" key={index}>
            <img src={review.img} alt={review.name} className="review-img" />
            <div className="review-text">
              <h3>{review.name}</h3>
              <p>{review.feedback}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="back-btn" onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default CustomerReviews;
