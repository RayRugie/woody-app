import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../payment/payment.styles.scss';
import Logo from "../../../assets/logo.svg"

const Payment = () => {



  return (
    <div className="payment">
      <header className="header">
        <div className="logo">
          <img src={Logo} alt="Woody Logo" />
        </div>
        <nav className="navigation">
          <ul>
            <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/products" activeClassName="active">Products</NavLink></li>
            <li><NavLink to="/cart" exact activeClassName="active">Cart</NavLink></li>
            <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
            <li><NavLink to="/contact-us" activeClassName="active">Contact Us</NavLink></li>
          </ul>
        </nav>
        <button className="back-button" onClick={() => window.history.back()}>Back</button>
      </header>
      <main className="payment-form">
        <h1>Make Payment</h1>
        <form>
          <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <input type="text" id="card-number" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input type="text" id="date" />
            </div>
          </div>
          <div className="form-group save-details">
            <input type="checkbox" id="save-details" />
            <label htmlFor="save-details">Save details.</label>
          </div>
          <button type="submit" className="pay-button">Pay $420</button>
          <div className="payment-options">
            <button type="button" className="change-method-button">Change Payment Method</button>
            <button type="button" className="cancel-button">Cancel Payment</button>
          </div>
          <p className="secured-by">Secured by <span className="paystack">Paystack</span></p>
        </form>
      </main>
    </div>
  );
};

export default Payment;
