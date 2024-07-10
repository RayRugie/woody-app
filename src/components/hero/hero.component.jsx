import React from "react";
import { Link } from "react-router-dom";
import "./hero.styles.scss";
import Header from "./Header";

const HeroPage = () => {
  const handleClick = () => {
    const anchor = document.getElementById("products-anchor");
    anchor.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-page">
      <Header handleClick={handleClick} />
      <div className="hero-container"></div>
      <div className="hero-section">
        <h1>
          Quality, Comfortable And Affordable Furniture Delivered To Your
          Doorstep.
        </h1>
        <p>
          Select And Purchase A Preferred Furniture of Your Choice Without Any
          Hassle.
        </p>
        <Link to="/Product">
          <button className="shop-now-btn">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroPage;
