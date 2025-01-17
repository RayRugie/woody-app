import React, { useState } from "react";
import { Link, NavLink, } from "react-router-dom";
import "../payment/payment.styles.scss";
import Logo from "../../../assets/logo.svg";
import Header1 from '../../hero/Header1';
import { FaTimes } from "react-icons/fa";

const Payment = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClick = () => {
      const anchor = document.getElementById("products-anchor");
      anchor.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <div className="payment">
      <Header1 handleClick={handleClick} handleModalToggle={handleModalToggle} />
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
      <main className="payment-form">
        <h1>Make Payment</h1>
        <form>
        <p className="show-on-small-screen">Enter Your Card Details</p>
          <div className="form-group">
            <label htmlFor="card-number"><strong>Card Number</strong></label>
            <input type="text" id="card-number" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cvv"><strong>CVV</strong></label>
              <input type="text" id="cvv" />
            </div>
            <div className="form-group">
              <label htmlFor="date"><strong>Date</strong></label>
              <input type="text" id="date" />
            </div>
          </div>
          <div className="form-group save-details">
            <div className="save-details-container">
              <input type="checkbox" id="save-details" />
              <label htmlFor="save-details">Save details.</label>
            </div>
          </div>
        </form>
        <div className="under">
            <Link to={"/"}>
              <button type="submit" className="pay-button">
                Pay $420
              </button>
            </Link>
            <div className="payment-options">
              <button type="button" className="change-method-button">
                Change Payment Method
              </button>
              <button type="button" className="cancel-button">
                Cancel Payment
              </button>
            </div>
            <p className="secured-by">
              Secured by <span className="paystack">Paystack</span>
            </p>
        </div>
      </main>
    </div>
  );
};

export default Payment;