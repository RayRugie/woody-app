import React, { useState } from 'react';
import "../cart/cart.styles.scss"
import { Outlet, Link, NavLink, useNavigate } from 'react-router-dom';
import Checkout from '../checkout/checkout.component';

import Comfy from "../../../assets/comfy-chair.jpg";
import fancy from "../../../assets/fancy-chair.jpg";
import wardrobe from "../../../assets/wardrobe.jpg";
import Logo from "../../../assets/Logo.png";
import Mastercard from "../../../assets/mastercard.jpg"
import Visa from "../../../assets/visa.jpg";



const Cart = () => {

    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate('/', { replace: true });
    };

    const handleCheckoutButtonClick = () => {
        navigate('/Cart/Checkout', { replace: true });
    }

    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };
  
    const handleDecrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };

    return (
        <div className="cart-page">
            <header className="header">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <nav className="navigation">
                    <ul>
                        <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Home
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/Product" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Products
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Cart
                        </NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>

                </nav>
                <button className="back-button" onClick={handleBackButtonClick}>Back</button>
            </header>
            <main>
                
                
                <div className="cart-container">
                    <div className='cart-side'>
                    <span className='shopping-cart-head'>
                    <h1>Shopping Cart</h1>
                    <p>3 Items</p>
                </span>
                <p className="line"></p>
                    <div className="cart-table">
                        <div className='cart-table-heading'>
                            <span>
                                <p className='product-head'>Product</p>
                                <p className='quantity-head'>Quantity</p>
                                <p className='price-head'>Price</p>
                            </span>
                        </div>
                        
                        <div className='table-body'>
                            <div className='cart-item-head'>
                                <div className='cart-item'>
                                    <div className="product-info">
                                        <img src={fancy} alt="Fancy Chair" />
                                        <span>
                                            <h3>
                                              Fancy Chair  
                                            </h3>
                                            <p>XL</p>
                                            
                                            <button className="remove-button">
                                                <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 28.5C3.67157 29.3284 2.32843 29.3284 1.5 28.5C0.671573 27.6716 0.671573 26.3284 1.5 25.5L7.05025 19.9498C9.78392 17.2161 9.78392 12.7839 7.05025 10.0503L1.5 4.5C0.671573 3.67157 0.671573 2.32843 1.5 1.5C2.32843 0.671573 3.67157 0.671573 4.5 1.5L10.0502 7.05025C12.7839 9.78392 17.2161 9.78392 19.9497 7.05025L25.5 1.5C26.3284 0.671573 27.6716 0.671573 28.5 1.5C29.3284 2.32843 29.3284 3.67157 28.5 4.5L22.9498 10.0502C20.2161 12.7839 20.2161 17.2161 22.9497 19.9497L28.5 25.5C29.3284 26.3284 29.3284 27.6716 28.5 28.5C27.6716 29.3284 26.3284 29.3284 25.5 28.5L19.9498 22.9498C17.2161 20.2161 12.7839 20.2161 10.0503 22.9497L4.5 28.5Z" fill="#EC1414"/>
                                                </svg>
                                            </button> 
                                            </span>
                                        
                                       
                                    </div>
                                </div>
                                <div className="quality-price">
                                <div className='quantity-control-head'>
                                    <div className="quantity-control">
                                        <button onClick={handleDecrement}>-</button>
                                        <span>{quantity}</span>
                                        <button onClick={handleIncrement}>+</button>
                                    </div>
                                </div>
                                <p>$130</p>
                                </div>
                               
                                <></>
                            </div>
                            <p className="lines"></p>
                            <div className='cart-item-head'>
                                <div className='cart-item'>
                                    <div className="product-info1">
                                        <img src={wardrobe} alt="Wardrobe" />
                                        <span>
                                            <h3>
                                            Wardrobe  
                                            </h3>
                                            <p>6 Foot </p>
                                            
                                            <button className="remove-button">
                                                <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 28.5C3.67157 29.3284 2.32843 29.3284 1.5 28.5C0.671573 27.6716 0.671573 26.3284 1.5 25.5L7.05025 19.9498C9.78392 17.2161 9.78392 12.7839 7.05025 10.0503L1.5 4.5C0.671573 3.67157 0.671573 2.32843 1.5 1.5C2.32843 0.671573 3.67157 0.671573 4.5 1.5L10.0502 7.05025C12.7839 9.78392 17.2161 9.78392 19.9497 7.05025L25.5 1.5C26.3284 0.671573 27.6716 0.671573 28.5 1.5C29.3284 2.32843 29.3284 3.67157 28.5 4.5L22.9498 10.0502C20.2161 12.7839 20.2161 17.2161 22.9497 19.9497L28.5 25.5C29.3284 26.3284 29.3284 27.6716 28.5 28.5C27.6716 29.3284 26.3284 29.3284 25.5 28.5L19.9498 22.9498C17.2161 20.2161 12.7839 20.2161 10.0503 22.9497L4.5 28.5Z" fill="#EC1414"/>
                                                </svg>
                                            </button> 
                                            </span>
                                        
                                    </div>
                                </div>
                                <div className="quality-price1">
                                <div className='quantity-control-head1'>
                                    <div className="quantity-control1">
                                        <button onClick={handleDecrement}>-</button>
                                            <span>{quantity}</span>
                                        <button onClick={handleIncrement}>+</button>
                                    </div>
                                </div>
                                <p>$90</p>

                                <></>
                                </div>
                               
                            </div>
                            <p className="lines"></p>
                            <div className='cart-item-head'>
                                <div className='cart-item'>
                                    <div className="product-info">
                                        <img src={Comfy} alt="Comfy Chair" />
                                        <span>
                                            <h3>
                                            Comfy Chair  
                                            </h3>
                                            <p>XL</p>
                                            
                                            <button className="remove-button">
                                                <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 28.5C3.67157 29.3284 2.32843 29.3284 1.5 28.5C0.671573 27.6716 0.671573 26.3284 1.5 25.5L7.05025 19.9498C9.78392 17.2161 9.78392 12.7839 7.05025 10.0503L1.5 4.5C0.671573 3.67157 0.671573 2.32843 1.5 1.5C2.32843 0.671573 3.67157 0.671573 4.5 1.5L10.0502 7.05025C12.7839 9.78392 17.2161 9.78392 19.9497 7.05025L25.5 1.5C26.3284 0.671573 27.6716 0.671573 28.5 1.5C29.3284 2.32843 29.3284 3.67157 28.5 4.5L22.9498 10.0502C20.2161 12.7839 20.2161 17.2161 22.9497 19.9497L28.5 25.5C29.3284 26.3284 29.3284 27.6716 28.5 28.5C27.6716 29.3284 26.3284 29.3284 25.5 28.5L19.9498 22.9498C17.2161 20.2161 12.7839 20.2161 10.0503 22.9497L4.5 28.5Z" fill="#EC1414"/>
                                                </svg>
                                            </button> 
                                            </span>
                                    </div>
                                </div>
                                <div className="quality-price">
                                <div className='quantity-control-head'>
                                    <div className="quantity-control">
                                        <button onClick={handleDecrement}>-</button>
                                        <span>{quantity}</span>
                                        <button onClick={handleIncrement}>+</button>
                                    </div>
                                </div>
                                <p>$100</p>

                                <></>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    </div>
                    
                    <aside className="order-summary">
                        <h2>Order Summary</h2>
                        <p className="divider"></p>
                        <div className='order'>
                            <span className='item'>
                                <p className='item-text'>ITEMS </p>
                                <p className='item-number'><strong>$320</strong></p>
                                </span>
                            <span className='delivery'>
                                <p className='delivery-text'>DELIVERY </p>
                                <p className='delivery-number'><strong>$100</strong></p>
                              
                            </span>
                            <span className='tax'>
                                <p className="tax-text">TAX</p> 
                                <p className="tax-number"><strong>$0</strong></p>
                                </span>
                            <div className="payment-options">
                                <p>PAYMENT WITH CARD</p>
                                <span className='payment-options-images'>
                                    <img src={Visa} alt="Visa" />
                                    <img src={Mastercard} alt="MasterCard" />
                                </span>
                                
                            </div>
                        </div>
                        
                        <span className='promo'>
                            <p className='promo-text'>Promo Code</p>
                            <input type="text" placeholder="......" />
                        </span>
                        <p className="divider1"></p>
                        <span className='total-price'>
                            <p className='total-price-text'>TOTAL PRICE</p>
                            <p className='total-price-number'><strong>$420</strong></p>
                            </span>
                        <button className="checkout-button" onClick={handleCheckoutButtonClick}>Checkout</button>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default Cart;
