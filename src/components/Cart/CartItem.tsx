import React, { FunctionComponent } from "react";
import { CURRENCY } from "../../constants/env";
import { useCartContext } from "../../context/CartContext";
import { ShoppingItem } from "../../types/Context";

import "./CartItem.scss";

export type CartItemProps = {
  item: ShoppingItem;
};

const CartItem: FunctionComponent<CartItemProps> = ({ item }) => {
  const { removeShoppingItem } = useCartContext();
  const { product } = item;
  const handleClick = () => {
    removeShoppingItem(product.id);
  };

  return (
    <div className="cart-item">
      <div>
        <img src={product.imageUrl} alt="" width={80} height={80} />
      </div>
      <div className="cart-item__information">
        <div className="bold">{product.title}</div>
        <div className="cart-item__information__quantity">Quantity: {item.quantity}</div>
        <div className="bold">
          {CURRENCY}
          {product.price}
        </div>
        <div className="cart-item__information__actions">
          <span onClick={handleClick}>Remove</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
