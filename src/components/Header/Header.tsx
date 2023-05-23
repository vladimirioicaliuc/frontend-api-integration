import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

import "./Header.scss";

const Header: FunctionComponent = () => {
  return (
    <>
      <div className="header fixed-top" data-testid="header">
        <div className="header__logo">
          <Link to="/">Dummy App</Link>
        </div>
        <div>
          <div>
            <ShoppingCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
