import { ADD_TO_CART } from './actionTypes';

export const addToCart = (article, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: article.id,
      name: article.name,
      price: article.price,
      quantity: quantity || 1, // If quantity is not provided, default to 1
    },
  };
};
