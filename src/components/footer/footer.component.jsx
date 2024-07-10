import React from 'react';
import "../footer/footer.styles.scss";

import Instagram from "../../assets/instagram.svg";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
            <div className="footer-logo">
                <img src={Logo} alt="Woody Logo" />
            </div>
           
            <div className="footer-bottom">
        <p>&copy; 2024 All Rights Reserved</p>
      </div>
        </div>
        
        <div className="footer-links">
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Help And Support</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <p>Input Email To Subscribe to our News Letter</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
           <div className="footer-social">
                <a href="#"><i className="fab fa-facebook-f">
                    <img src={Facebook} alt="" />    
                </i></a>
                <a href="#"><i className="fab fa-instagram">
                    <img src={Instagram} alt="" />
                </i></a>
                <a href="#"><i className="fab fa-twitter">
                    <img src={Twitter} alt="" />
                </i></a>
            </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
