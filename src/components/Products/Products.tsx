import React, { ChangeEvent, FunctionComponent, useCallback, useEffect, useState } from "react";
import { Product } from "../../types/Product";
import Button, { ButtonType } from "../Button/Button";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import { getProducts } from "../../service/productsApi";
import { PAGE_SIZE } from "./../../constants/env";

import "./Products.scss";

export type ProductsProps = {};

const Products: FunctionComponent<ProductsProps> = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [hasMoreResults, setHasMoreResults] = useState<boolean>(true);
  const [filterProductByName, setFilterProductByName] = useState<string>("");

  useEffect(() => {
    fetchProduct(1);
  }, []);

  const fetchProduct = (pageNumber: number, filterBy: string = "") => {
    getProducts(pageNumber, PAGE_SIZE, filterBy)
      .then((res: Product[]) => {
        const result = [...products, ...res];
        let hasMoreResults = true;
        if (res.length < PAGE_SIZE || res.length === 0) {
          hasMoreResults = false;
        }
        setProducts(result);
        setIsLoading(false);
        setPageNumber(pageNumber + 1);
        setHasMoreResults(hasMoreResults);
      })
      .catch((err) => {});
  };

  const handleLoadMoreProducts = () => {
    fetchProduct(pageNumber, filterProductByName);
  };

  const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const filterBy = event.target.value;

    setFilterProductByName(filterBy);

    setHasMoreResults(true);

    setPageNumber(1);

    fetchProduct(1, filterBy);
  }, []);

  return (
    <div className="products">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="products__search">
            <input
              type="text"
              className="form-control"
              placeholder="search for products"
              onChange={handleOnChange}
              value={filterProductByName}
            />
          </div>
          <div className="products__list">
            {products.map((productItem: Product, idx: number) => (
              <ProductCard key={idx} product={productItem} />
            ))}
          </div>

          {hasMoreResults ? (
            <div className="products__load-more">
              <Button label="Load more products" type={ButtonType.PRIMARY} onClick={handleLoadMoreProducts} />
            </div>
          ) : (
            false
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
