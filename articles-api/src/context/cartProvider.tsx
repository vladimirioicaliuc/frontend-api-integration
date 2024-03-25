import { createContext, useContext } from 'react'
import { useSelector } from 'react-redux';
export const CartContext = createContext<any>({} as any)
import {selectCartReducer} from "../redux/cartSlice.ts"

export const CartProvider = ({ children }) => {
  const cart = useSelector(selectCartReducer);

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);


