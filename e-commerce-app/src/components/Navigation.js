import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
    </BrowserRouter>
  );
};

export default Navigation;