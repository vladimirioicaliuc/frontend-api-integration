import React, { FunctionComponent } from "react";
import Cart from "../../components/Cart/Cart";
import CustomerInformation from "../../components/CustomerInformation/CustomerInformation";

import "./CartPage.scss";

export type CartPageProps = {};

const CartPage: FunctionComponent<CartPageProps> = () => {
  return (
    <div className="cart-page">
      <h3 data-testid="cart-page-title">Your cart</h3>
      <div className="container">
        <div className="row">
          <div className="col-sm" data-testid="cart-page-cart">
            <Cart />
          </div>
          <div className="col-sm" data-testid="cart-page-customer">
            <CustomerInformation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
