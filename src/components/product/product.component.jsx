import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../product/product.styles.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Wardrobe from "../../assets/wardrobe-small.png";
import Fancy from "../../assets/fancy-chair-small.png";
import Comfy from "../../assets/comfy-chair-small.png";
import Cabinet from "../../assets/cabinet.png";
import Sofa from "../../assets/sofa.png";
import Cuddly from "../../assets/cuddly-chair.png";
import StarRating from "../stars/star.component";
import Star from "../../assets/Star.png";
import Guard from "../../assets/gaurd.png";
import Car from "../../assets/car.png";
import { CartContext } from "../context/cart.context";

const ProductsSection = () => {
  const { addItemToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Cabinet", price: 150, rating: 4, image: Cabinet },
    { id: 2, name: "Fancy Chair", price: 130, rating: 5, image: Fancy, size: "XL" },
    { id: 3, name: "Sofa", price: 250, rating: 3, image: Sofa },
    { id: 4, name: "Wardrobe", price: 90, rating: 4, image: Wardrobe, size: "6 Foot" },
    { id: 5, name: "Comfy Chair", price: 100, rating: 5, image: Comfy },
    { id: 6, name: "Cuddler Chair", price: 200, rating: 4, image: Cuddly },
  ];

  const handleAddToCart = (product) => {
    addItemToCart(product);
    navigate('/Cart');
  };

  return (
    <div className="products-section">
      <div className="features">
        <div className="feature">
          <span>
            <img src={Star} alt="Star" />
          </span>
          <p>
            <strong>Quality</strong>
          </p>
        </div>
        <div className="feature">
          <span>
            <img src={Guard} alt="Guard" />
          </span>
          <p>
            <strong>Longevity</strong>
          </p>
        </div>
        <div className="feature">
          <span>
            <img src={Car} alt="Car" />
          </span>
          <p>
            <strong>Fast Delivery</strong>
          </p>
        </div>
      </div>
      <h2>Our Products</h2>
      <div className="tabs">
        <button className="active">New Arrivals</button>
        <button className="not-active">Top Rated</button>
        <button className="">Featured</button>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <StarRating rating={product.rating} />
            <div className="price">${product.price}</div>
            <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
      <div className="carousel-container">
        <div className="carousel">
          <span className="left-arrow">
            <IoIosArrowBack />
          </span>
          <div className="carousel-indicators">
            <span className="active"></span>
            <span></span>
            <span></span>
          </div>
          <span className="right-arrow">
            <IoIosArrowForward />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
