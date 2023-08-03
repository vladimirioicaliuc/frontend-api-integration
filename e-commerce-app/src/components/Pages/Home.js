import React from 'react';
import { useSelector } from 'react-redux';
import ArticleCard from '../ArticleCard';

const Home = () => {
  const articles = useSelector((state) => state.articles);

  return (
    <div>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Home;