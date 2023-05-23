import React, { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button, { ButtonType } from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";
import { CURRENCY } from "../../constants/env";
import { useCartContext } from "../../context/CartContext";
import { Product } from "../../types/Product";
import { getProduct } from "../../service/productsApi";

import "./ProductPage.scss";

export type ProductProps = {};

const ProductPage: FunctionComponent<ProductProps> = () => {
  const { addShoppingItem } = useCartContext();
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (productId) {
      getProduct(productId).then((res: Product) => {
        setProduct(res);
        setIsLoading(false);
      });
    }
  }, [productId]);

  const handleClickOnAddToCart = () => {
    if (product) {
      addShoppingItem(product);
    }
  };

  return (
    <>
      {isLoading || !product ? (
        <Loading />
      ) : (
        <div className="product-page">
          <div>
            <div>
              <h3>
                {product.title} - {CURRENCY}
                {product.price}
              </h3>
            </div>

            <div>
              <img src={product.imageUrl} alt="product image" />
            </div>
          </div>
          <div>
            <Button label="Add to cart" type={ButtonType.PRIMARY} onClick={handleClickOnAddToCart} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
