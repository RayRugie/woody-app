import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/routes/cart/cart.component';
import ProductsSection from './components/product/product.component';
import Checkout from './components/routes/checkout/checkout.component';
import Payment from './components/routes/payment/payment.component';
import HomePage from './pages/HomePage';
import { CartProvider } from './components/context/cart.context';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className='app'>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Product' element={<ProductsSection />} />
            <Route path='/Cart/Checkout' element={<Checkout />} />
            <Route path='/Cart/Checkout/Payment' element={<Payment />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
