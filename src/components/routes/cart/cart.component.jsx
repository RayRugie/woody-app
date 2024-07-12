import React, { useState, useContext } from 'react';
import "../cart/cart.styles.scss"
import { useNavigate, Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import Comfy from "../../../assets/comfy-chair.jpg";
import Fancy from "../../../assets/fancy-chair.jpg";
import Wardrobe from "../../../assets/wardrobe.jpg";
import Logo from "../../../assets/Logo.png";
import Mastercard from "../../../assets/mastercard.jpg";
import Visa from "../../../assets/visa.jpg";
import Header1 from '../../hero/Header1';
import { CartContext } from '../../context/cart.context';




const Cart = () => {
  const { cartItems, cartCount, cartTotal, addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleClick = () => {
    const anchor = document.getElementById("products-anchor");
    anchor.scrollIntoView({ behavior: "smooth" });
  };


  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate("/", { replace: true });
  };

  const handleCheckoutButtonClick = () => {
    navigate("/Cart/Checkout", { replace: true });
  };

  return (
    <div className="cart-page">
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
                        <div className="item-about">

                        <h3>Fancy Chair</h3>
                        <p className='size-container'>
                        <p className="show-on-small-screen-size">Size:</p>
                          XL
                          </p>
                        <td className="show-on-small-screen quantity-control">
                        <td className="price1">$130</td>
                          <div className="quantity-buttons">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                          </div>
                    </td>
                        </div>
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
                      <div className='item'>
                        <div className="item-about">

                        <h3>Wardrobe</h3>
                        <p className='size-container'>
                          <p className="show-on-small-screen-size">Size:</p>
                          6 Foot
                          </p>
                        <td className="show-on-small-screen1 quantity-control">
                        <td className="price1">$130</td>
                      <div className="quantity-buttons">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                      </div>
                    </td>
                        </div>
                        <button className="remove-button1">
                          <FaTimes />
                        </button>
                      </div>
                    </td>
                    <td className="quantity-control">
                      <div className="quantity-buttons">
                        <button onClick={removeItemFromCart}>-</button>
                        <span>1</span>
                        <button onClick={addItemToCart}>+</button>
                      </div>
                    </td>
                    <td className="price">$90</td>
                  </tr> 
                  <tr>
                    <td className="product-info">
                      <img src={Comfy} alt="Comfy Chair" />
                      <div className='item'>
                      <div className="item-about">
                        <h3>Comfy Chair</h3>
                        <p className='size-container'>
                        <p className="show-on-small-screen-size">Size:</p>
                          XL
                          </p>
                        <td className="show-on-small-screen quantity-control">
                        <td className="price1">$130</td>
                      <div className="quantity-buttons">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                      </div>
                    </td>
                    </div>
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

                  {/* <tr className="cart-items">
                    {cartItems.map((item) => (
                    <div className="producT" key={item.id}>
                      <td className="product-info1">
                        <img src={item.image} alt={item.name} />
                        <div className="item1">
                        <h3>{item.name}</h3>
                        <p>{item.size}</p>  
                          <button className='remove-button' onClick={() => clearItemFromCart(item)}><FaTimes /></button>
                        </div>

                      </td>
              <td className="quantity-control1">
                <div className="quantity-buttons1">
                  <button onClick={() => addItemToCart(item)}>+</button>
                <p>
                  <strong>
                  {item.quantity}
                  </strong> 
                  </p>
                  <button onClick={() => removeItemFromCart(item)}>-</button>
                </div>
              </td>
              <p className='price1'>${item.price}</p>
            </div>
          ))}
        </tr> */}


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
                <p><strong>$320</strong></p>
              </div>
              <div className="delivery">
                <p>DELIVERY</p>
                <p><strong>$100</strong></p>
              </div>
              <div className="tax">
                <p>TAX</p>
                <p><strong>$0</strong></p>
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