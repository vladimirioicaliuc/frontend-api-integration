import { FETCH_ARTICLES_SUCCESS, TOGGLE_FAVORITE } from '../actions/actionTypes';

const initialState = [];

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
      return action.payload;
    case TOGGLE_FAVORITE:
      const articleIdToToggle = action.payload;
      return state.map((article) =>
        article.id === articleIdToToggle
          ? { ...article, favorite: !article.favorite }
          : article
      );
    default:
      return state;
  }
};

export default articleReducer;
