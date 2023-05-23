import React, { FunctionComponent, useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { totalNumberOfItems } from "../../utils/shoppingCart";
import Cart from "../Cart/Cart";

import "./ShoppingCart.scss";

export type ShoppingCartProps = {};

const ShoppingCart: FunctionComponent<ShoppingCartProps> = () => {
  const { shoppingItems } = useCartContext();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleCart = () => {
    setIsVisible(!isVisible);
  };

  const numberOfItems = totalNumberOfItems(shoppingItems);

  return (
    <div className="shopping-cart" data-testid="shopping-cart">
      <i className="bi bi-cart2 position-relative" onClick={toggleCart} data-testid="shopping-cart-icon">
        {numberOfItems === 0 ? (
          false
        ) : (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {numberOfItems}
          </span>
        )}
      </i>

      {isVisible ? (
        <div className="shopping-cart__popover" data-testid="shopping-cart-menu">
          <div className="shopping-cart__arrow">
            <Cart isFromHeaderModule={true} />
          </div>
        </div>
      ) : (
        false
      )}
    </div>
  );
};

export default ShoppingCart;
