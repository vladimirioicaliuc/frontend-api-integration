import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { toggleFavorite } from "../actions/articleActions";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button } from "@mui/material";
import "./ArticleCard.css";

const ArticleCard = ({ article }) => {
  const dispatch = useDispatch();
  const [showButtons, setShowButtons] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(article));
  };

  const handleAddToLiked = () => {
    dispatch(toggleFavorite(article.id));
  };

  return (
    <Card
      sx={{ width: 260, margin: 2 }}
      className="article-card"
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      <CardMedia
        component="img"
        height="400"
        image={article.imageUrl || article.imageurl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {article.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          ${article.price}
        </Typography>
      </CardContent>
      {showButtons && (
        <Button
          className="add-to-favorites-button"
          sx={{ position: "absolute" }}
          color={article.favorite ? "secondary" : "primary"}
          aria-label="add to favorites"
          onClick={handleAddToLiked}
        >
          <FavoriteIcon size="large" edge="end" />
        </Button>
      )}
      {showButtons && (
        <Button
          className="add-to-cart-button"
          variant="contained"
          sx={{ position: "absolute" }}
          onClick={handleAddToCart}
          startIcon={<AddShoppingCartIcon />}
        >
          Add to cart
        </Button>
      )}
    </Card>
  );
};

export default ArticleCard;
