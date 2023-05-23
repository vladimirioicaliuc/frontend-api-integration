import React, { ReactNode, useState } from "react";
import { ShoppingItem } from "../types/Context";
import { Product } from "../types/Product";
import { CartContext } from "./CartContext";

interface IProps {
  children: ReactNode;
}

const CartContextProvider = ({ children }: IProps) => {
  const [shoppingItems, setShoppingItems] = useState<ShoppingItem[]>([]);

  const addShoppingItem = (item: Product) => {
    let newState = [];
    const indexOfCurrentItemInsideCart = shoppingItems.findIndex((shoppingItem) => shoppingItem.product.id === item.id);

    // increase the quantity
    if (indexOfCurrentItemInsideCart !== -1) {
      shoppingItems.forEach((shoppingItem) => {
        const shopItem = { ...shoppingItem };

        if (shoppingItem.product.id === item.id) {
          shopItem.quantity += 1;
        }

        newState.push(item);
      });
      shoppingItems[indexOfCurrentItemInsideCart].quantity += 1;

      newState = [...shoppingItems];
    } else {
      newState = [...shoppingItems, { product: item, quantity: 1 }];
    }

    setShoppingItems(newState);
  };

  const removeShoppingItem = (itemId: string) => {
    let newState = [...shoppingItems];
    const indexOfItemInCart = shoppingItems.findIndex((shoppingItem) => shoppingItem.product.id === itemId);
    newState.splice(indexOfItemInCart, 1);

    setShoppingItems(newState);
  };

  const clearShoppingItems = () => {
    setShoppingItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        shoppingItems,
        addShoppingItem,
        removeShoppingItem,
        clearShoppingItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
