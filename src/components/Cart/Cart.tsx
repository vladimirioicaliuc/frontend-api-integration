import React, { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingItem } from "../../types/Context";
import { totalCostOfCart } from "../../utils/shoppingCart";
import Button, { ButtonType } from "../Button/Button";
import { useCartContext } from "./../../context/CartContext";
import CartItem from "./CartItem";

import "./Cart.scss";

export type CartProps = {
  isFromHeaderModule?: boolean;
};

const Cart: FunctionComponent<CartProps> = ({ isFromHeaderModule = false }) => {
  const { shoppingItems } = useCartContext();
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    const total = totalCostOfCart(shoppingItems);

    setTotalAmount(total);
  }, [shoppingItems]);

  const handleClickOnViewCart = () => {
    navigate("/cart");
  };

  const renderCartItems = () => (
    <>
      <div>
        {shoppingItems.map((item: ShoppingItem, idx: number) => {
          return (
            <div key={item.product.id}>
              <CartItem item={item} />
              {idx < shoppingItems.length - 1 ? <hr /> : ""}
            </div>
          );
        })}
      </div>
      <div className="cart__total">
        <p>Total</p>
        <p>${totalAmount}</p>
      </div>
    </>
  );

  return (
    <div className="cart">
      {shoppingItems.length === 0 ? <div>You have no items added to the cart at the moment</div> : renderCartItems()}
      {shoppingItems.length === 0 || !isFromHeaderModule ? (
        false
      ) : (
        <Button label="View cart" onClick={handleClickOnViewCart} type={ButtonType.PRIMARY} fullWidth={true}></Button>
      )}
    </div>
  );
};

export default Cart;
