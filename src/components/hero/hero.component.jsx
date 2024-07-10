import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "./hero.styles.scss";
import Header from "./Header";

const HeroPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClick = () => {
    const anchor = document.getElementById("products-anchor");
    anchor.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-page">
      <Header handleClick={handleClick} handleModalToggle={handleModalToggle} />
      <div className={`hero-container ${isModalOpen ? "modal-open" : ""}`}>
        {isModalOpen && (
          <div className="modal">
            <FaTimes className="close-icon" onClick={handleModalToggle} />
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
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