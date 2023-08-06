import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRoutes from "./Routes";
import Navigation from "./components/Navigation";
import { fetchArticles } from "./actions/articleActions";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
