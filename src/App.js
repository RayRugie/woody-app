import react from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/routes/cart/cart.component';
import ProductsSection from './components/product/product.component';
import Checkout from './components/routes/checkout/checkout.component';
import Payment from './components/routes/payment/payment.component';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Product' element={<ProductsSection />} />
        <Route path='/Cart/Checkout' element={<Checkout />} />
        <Route path='/Cart/Checkout/Payment' element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
