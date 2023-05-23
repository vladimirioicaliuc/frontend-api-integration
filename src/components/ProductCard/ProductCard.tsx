import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { Product } from "../../types/Product";
import Button, { ButtonType } from "../Button/Button";
import { CURRENCY } from "./../../constants/env";

import "./ProductCard.scss";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FunctionComponent<ProductCardProps> = ({ product }) => {
  const { addShoppingItem } = useCartContext();

  const handleClick = () => {
    addShoppingItem(product);
  };

  return (
    <div className="product" data-testid="product">
      <div className="product__image">
        <img src={product.imageUrl} alt={`Image for the ${product.title} product`} data-testid="product_image" />
        <div className="product__add_to_cart">
          <Button type={ButtonType.SECONDARY} label="Add to cart" onClick={handleClick} />
        </div>
      </div>
      <Link to={`/product/${product.id}`}>
        <div className="product__information">
          <div className="product__title" data-testid="product_title">
            {product.title}
          </div>
          <div className="product__price" data-testid="product_price">
            {CURRENCY}
            {product.price}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
