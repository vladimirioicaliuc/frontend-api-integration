import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

export const addToCart = (article, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: article.id,
      name: article.title,
      price: article.price,
      quantity: quantity || 1, // If quantity is not provided, default to 1
    },
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: itemId,
  };
};
