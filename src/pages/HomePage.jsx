import React from 'react'
import HeroPage from '../components/hero/hero.component';
import ProductsSection from '../components/product/product.component';
import Footer from '../components/footer/footer.component';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroPage />
      <div id="products-anchor" />
      <ProductsSection />
      <Footer />
      <Outlet />
    </div>
  );
}

export default HomePage