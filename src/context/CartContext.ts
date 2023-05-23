import { createContext, useContext } from "react";
import { ShoppingItem } from "../types/Context";
import { Product } from "../types/Product";

interface ICartContext {
  shoppingItems: ShoppingItem[];
  addShoppingItem: (shoppingItem: Product) => void;
  removeShoppingItem: (itemId: string) => void;
  clearShoppingItems: () => void;
}

export const CartContext = createContext<ICartContext>({
  shoppingItems: [],
  addShoppingItem(item) {},
  removeShoppingItem(item) {},
  clearShoppingItems() {},
});

export const useCartContext = () => useContext(CartContext);
