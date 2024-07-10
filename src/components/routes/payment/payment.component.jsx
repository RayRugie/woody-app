import React from "react";
import { Link, NavLink, } from "react-router-dom";
import "../payment/payment.styles.scss";
import Logo from "../../../assets/logo.svg";

const Payment = () => {
  return (
    <div className="payment">
      <header className="header">
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt="Woody Logo" />
          </Link>
          
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" activeClassName="active">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" exact activeClassName="active">
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" activeClassName="active">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" activeClassName="active">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className="back-button" onClick={() => window.history.back()}>
          Back
        </button>
      </header>
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