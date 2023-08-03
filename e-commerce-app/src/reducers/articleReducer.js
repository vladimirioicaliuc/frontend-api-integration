import { FETCH_ARTICLES_SUCCESS } from '../actions/actionTypes';

const initialState = [];

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};

export default articleReducer;
