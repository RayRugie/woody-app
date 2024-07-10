import React from 'react';
import "../product/product.styles.scss";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import Wardrobe from "../../assets/wardrobe-small.png";
import Fancy from "../../assets/fancy-chair-small.png";
import comfy from "../../assets/comfy-chair-small.png";
import Cabinet from "../../assets/cabinet.png";
import Sofa from "../../assets/sofa.png";
import Cuddly from "../../assets/cuddly-chair.png";
import Left from "../../assets/left-arrow.png";
import Right from "../../assets/right-arrow.png";
import StarRating from '../stars/star.component';
import Star from "../../assets/Star.png";
import Gaurd from "../../assets/gaurd.png";
import Car from "../../assets/car.png";




const ProductsSection = () => {
    const products = [
        {
             name: 'Cabinet',
            price: 150,
            rating: 4, 
            image: Cabinet 
        },
        {
             name: 'Fancy Chair',
            price: 130,
            rating: 5, 
            image: Fancy 
        },
        {
            name: 'Sofa',
            price: 250,
            rating: 3, 
            image: Sofa 
        },
        {
            name: 'Wardrobe',
            price: 90, 
            rating: 4, 
            image: Wardrobe 
        },
        {
             name: 'Comfy Chair',
            price: 100,
            rating: 5, 
            image: comfy 
        },
        {
             name: 'Cuddler Chair',
            price: 200,
            rating: 4, 
            image: Cuddly 
        },
      ];
  return (
    <div className="products-section">
      <div className="features">
        <div className="feature">
          <span><img src={Star} alt="" /></span>
          <p><strong>Quality</strong></p>
        </div>
        <div className="feature">
          <span><img src={Gaurd} alt="" /></span>
          <p><strong>Longevity</strong></p>
        </div>
        <div className="feature">
          <span><img src={Car} alt="" /></span>
          <p><strong>Fast Delivery</strong></p>
        </div>
      </div>
      <h2>Our Products</h2>
      <div className="tabs">
        <button className="active">New Arrivals</button>
        <button className='not-active'>Top Rated</button>
        <button className=''>Featured</button>
      </div>
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <StarRating rating={product.rating} />
            <div className="price">${product.price}</div>
            <button className="add-to-cart-btn">Add To Cart</button>
          </div>
        ))}
      </div>
      <div className="carousel-container">
        <div className="carousel">
              <span className='left-arrow'>
              <IoIosArrowBack />
              </span>
              <div className="carousel-indicators">
                  <span className="active"></span>
                  <span></span>
                  <span></span>
              </div>
              <span className='right-arrow'>
                <IoIosArrowForward />
              </span>
        </div>
      </div>
      
    </div>
  );
};

export default ProductsSection;
