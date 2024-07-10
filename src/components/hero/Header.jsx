import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Header = ({ handleClick }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700 && isNavOpen) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isNavOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo-container">
          <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
        </div>
        
      <div className="hamburger" onClick={toggleNav}>
        {isNavOpen ? <FaTimes /> : <GiHamburgerMenu />}
      </div>
      <div className={`nav-menu ${isNavOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <Link to="#" onClick={handleClick}>
              Products
            </Link>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-left-wrapper">
        <div className="nav-left">
          <Link className="contact-us">Contact Us</Link>
          <button className="shop-now-btn" onClick={handleClick}>
            Shop Now
          </button>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Header;
