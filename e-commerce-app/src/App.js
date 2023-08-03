import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRoutes from './Routes';
import Navigation from './components/Navigation';
import { fetchArticles } from './actions/articleActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch the articles when the component mounts
    dispatch(fetchArticles());
  }, [dispatch]);


  return (
    <div>
      <Navigation />
      <AppRoutes />
    </div>
  );
};

export default App;