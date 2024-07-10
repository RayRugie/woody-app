import React, { useState } from 'react';
import '../checkout/checkout.styles.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from "../../../assets/Logo.png";

const Checkout = () => {
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

    const [errors, setErrors] = useState({});

    const handleBackButtonClick = () => {
        navigate('/cart', { replace: true });
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handlePaymentButtonClick = () => {
        const newErrors = {};
        Object.keys(formData).forEach(field => {
            if (!formData[field] && field !== 'saveDetails') {
                newErrors[field] = 'This field is required';
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            navigate('/cart/checkout/payment', { replace: true });
        }
    };

    const countries = [
        "Nigeria", "South Africa", "Egypt", "Kenya", "Ghana",
        "China", "India", "Japan", "South Korea", "Indonesia",
        "United Kingdom", "Germany", "France", "Italy", "Spain",
        "United States", "Canada", "Mexico", "Cuba", "Jamaica",
        "Brazil", "Argentina", "Colombia", "Chile", "Peru",
        "Australia", "New Zealand", "Fiji", "Papua New Guinea", "Samoa"
    ];

    return (
        <div className="checkout">
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
                            <NavLink to="/product" className={({ isActive }) => (isActive ? 'active' : '')}>
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
                            {errors.firstName && <span className="error">{errors.firstName}</span>}
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
                            {errors.lastName && <span className="error">{errors.lastName}</span>}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                        >
                            <option value="">Select a country</option>
                            {countries.map((country, index) => (
                                <option key={index} value={country}>{country}</option>
                            ))}
                        </select>
                        {errors.country && <span className="error">{errors.country}</span>}
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
                        {errors.city && <span className="error">{errors.city}</span>}
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
                        {errors.address && <span className="error">{errors.address}</span>}
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
                        {errors.email && <span className="error">{errors.email}</span>}
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
