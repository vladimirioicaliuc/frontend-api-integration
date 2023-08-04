import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Shop from "./components/Pages/Shop";
import Contact from "./components/Pages/Contact";
import ShoppingCart from "./components/Pages/ShoppingCart";

const AppRoutes = () => {
  console.log("contacts", Contact);
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shoppingCart" element={<ShoppingCart />} />
    </Routes>
  );
};

export default AppRoutes;
