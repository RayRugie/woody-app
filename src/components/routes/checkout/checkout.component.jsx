import React, { useState } from 'react';
import '../checkout/checkout.styles.scss';
import { useNavigate, Link } from 'react-router-dom';
import Logo from "../../../assets/Logo.png";
import Header1 from '../../hero/Header1';
import { FaTimes } from "react-icons/fa";

const Checkout = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleClick = () => {
        const anchor = document.getElementById("products-anchor");
        anchor.scrollIntoView({ behavior: "smooth" });
    };

    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: '',
        city: '',
        address: '',
        email: '',
        saveDetails: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handlePaymentButtonClick = () => {
        navigate('/cart/checkout/payment', { replace: true });
    };

    return (
        <div className="checkout">
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
            <main className="checkout-form">
                <h1>Checkout</h1>
                <p>Please fill in the boxes below</p>
                <form>
                    <div className="form-group-name">
                        <div className="form-group-first">
                            <label htmlFor="first-name">First Name</label>
                            <input
                                type="text"
                                id="first-name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group-last">
                            <label htmlFor="last-name">Last Name</label>
                            <input
                                type="text"
                                id="last-name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group save-details">
                        <input
                            type="checkbox"
                            id="save-details"
                            name="saveDetails"
                            checked={formData.saveDetails}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="save-details">Save details.</label>
                    </div>
                    <button type="button" className="proceed-button" onClick={handlePaymentButtonClick}>
                        Proceed
                    </button>
                </form>
            </main>
        </div>
    );
};

export default Checkout;
