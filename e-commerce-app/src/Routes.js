import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Shop from './components/Pages/Shop';
import Contact from './components/Pages/Contact';
import ShoppingCart from './components/Pages/ShoppingCart';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" component={Home} />
                <Route path="/shop" component={Shop} />
                <Route path="/contact" component={Contact} />
                <Route path="/shoppingCart" component={ShoppingCart} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
