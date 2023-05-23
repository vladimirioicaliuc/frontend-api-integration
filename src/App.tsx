import React, { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";

// pages
import Homepage from "./pages/Homepage/Homepage";
import CartPage from "./pages/CartPage/CartPage";
import OrderCompletePage from "./pages/OrderCompletePage/OrderCompletePage";
import ProductPage from "./pages/ProductPage/ProductPage";

// components
import Header from "./components/Header/Header";

import "./assets/styles/styles.scss";

const App: FunctionComponent = () => {
  return (
    <>
      <div>
        <Header />

        <div className="main-content">
          <div>
            <Routes>
              <Route path="/" element={<Homepage />} />

              <Route path="/product/:productId" element={<ProductPage />} />

              <Route path="/cart" element={<CartPage />} />

              <Route path="/order-complete/:orderId" element={<OrderCompletePage />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
