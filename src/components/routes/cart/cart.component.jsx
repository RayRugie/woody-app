import React from 'react';
import "../cart/cart.styles.scss"
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import Comfy from "../../../assets/comfy-chair.jpg";
import Fancy from "../../../assets/fancy-chair.jpg";
import Wardrobe from "../../../assets/wardrobe.jpg";
import Logo from "../../../assets/Logo.png";
import Mastercard from "../../../assets/mastercard.jpg";
import Visa from "../../../assets/visa.jpg";



const Cart = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate("/", { replace: true });
  };

  const handleCheckoutButtonClick = () => {
    navigate("/Cart/Checkout", { replace: true });
  };

  return (
    <div className="cart-page">
      <header className="header">
        <div className="logo">
          <a href="/" ><img src={Logo} alt="Logo" /></a>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <a href="/" >
                Home
              </a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/cart" className="active">Cart</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </nav>
        <button className="back-button" onClick={handleBackButtonClick}>
          Back
        </button>
      </header>
      <main>
        <div className="cart-container">
          <div className="cart-side">
            <div className="shopping-cart-head">
              <h1>Shopping Cart</h1>
              <p>3 Items</p>
            </div>
            <div className="cart-table">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="product-info">
                      <img src={Fancy} alt="Fancy Chair" />
                      <div className="item">
                        <h3>Fancy Chair</h3>
                        <p>XL</p>
                        <button className="remove-button">
                          <FaTimes />
                        </button>
                      </div>
                    </td>
                    <td className="quantity-control">
                      <div className="quantity-buttons">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                      </div>
                    </td>
                    <td className="price">$130</td>
                  </tr>
                  <tr>
                    <td className="product-info">
                      <img src={Wardrobe} alt="Wardrobe" />
                      <div>
                        <h3>Wardrobe</h3>
                        <p>6 Foot</p>
                        <button className="remove-button">
                          <FaTimes />
                        </button>
                      </div>
                    </td>
                    <td className="quantity-control">
                      <div className="quantity-buttons">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                      </div>
                    </td>
                    <td className="price">$90</td>
                  </tr>
                  <tr>
                    <td className="product-info">
                      <img src={Comfy} alt="Comfy Chair" />
                      <div>
                        <h3>Comfy Chair</h3>
                        <p>XL</p>
                        <button className="remove-button">
                          <FaTimes />
                        </button>
                      </div>
                    </td>
                    <td className="quantity-control">
                      <div className="quantity-buttons">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                      </div>
                    </td>
                    <td className="price">$100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <aside className="order-summary">
            <h2>Order Summary</h2>
            <div className="divider"></div>
            <div className="order">
              <div className="item">
                <p>ITEMS 3</p>
                <p>$320</p>
              </div>
              <div className="delivery">
                <p>DELIVERY</p>
                <p>$100</p>
              </div>
              <div className="tax">
                <p>TAX</p>
                <p>$0</p>
              </div>
              <div className="payment-options">
                <p>PAYMENT WITH CARD</p>
                <div className="payment-images">
                  <img src={Visa} alt="Visa" />
                  <img src={Mastercard} alt="MasterCard" />
                </div>
              </div>
            </div>

            <div className="promo">
              <p>Promo Code</p>
              <input type="text" placeholder="......" />
            </div>
            <div className="divider"></div>
            <div className="total-price">
              <p>TOTAL PRICE</p>
              <p>$420</p>
            </div>
            <button
              className="checkout-button"
              onClick={handleCheckoutButtonClick}
            >
              Checkout
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Cart;