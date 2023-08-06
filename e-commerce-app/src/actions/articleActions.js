import axios from "axios";
import { FETCH_ARTICLES_SUCCESS, TOGGLE_FAVORITE } from "./actionTypes";

const RunWithCassandra = false;

const articlesPath = RunWithCassandra
  ? "http://localhost:3000/articles2"
  : "http://localhost:3000/articles";

const fetchArticlesSuccess = (articles) => {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    payload: articles,
  };
};

export const fetchArticles = () => {
  return (dispatch) => {
    axios
      .get(articlesPath)
      .then((response) => {
        dispatch(fetchArticlesSuccess(response.data));
      })
      .catch((error) => {
        // Handle error if necessary
        console.error("Error fetching articles:", error);
      });
  };
};

export const toggleFavorite = (articles) => {
  return {
    type: TOGGLE_FAVORITE,
    payload: articles,
  };
};
