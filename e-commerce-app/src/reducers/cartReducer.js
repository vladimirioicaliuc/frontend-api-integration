import { ADD_TO_CART } from '../actions/actionTypes';

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, name, price, quantity } = action.payload;
      const existingItemIndex = state.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, update its quantity
        const updatedCart = [...state];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        // If the item doesn't exist in the cart, add it as a new item
        return [...state, { id, name, price, quantity }];
      }

    default:
      return state;
  }
};

export default cartReducer;
