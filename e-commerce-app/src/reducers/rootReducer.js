import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  articles: articleReducer,
  cart: cartReducer,
});

export default rootReducer;
