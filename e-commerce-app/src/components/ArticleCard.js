import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const ArticleCard = ({ article }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(article));
  };

  return (
    <div className="article-card">
      <img src={article.image} alt={article.name} />
      <div className="article-details">
        <h3>{article.name}</h3>
        <p>Price: ${article.price}</p>
      </div>
      <div className="article-buttons">
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className="like-button">Like</button>
      </div>
    </div>
  );
};

export default ArticleCard;
