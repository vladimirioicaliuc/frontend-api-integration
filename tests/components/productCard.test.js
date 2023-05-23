import React from "react";
import ProductCard from "../../src/components/ProductCard/ProductCard";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import * as cartContext from "./../../src/context/CartContext";
import { BrowserRouter } from "react-router-dom";

const addShoppingItemCallback = jest.fn();
cartContext.useCartContext = jest.fn().mockReturnValue({
  addShoppingItem: addShoppingItemCallback,
});

const mockProduct = {
  id: "product_id",
  title: "product_title",
  price: 10,
  imageUrl: "product_image",
};

describe("Components / ProductCard", () => {
  it("renders main components", () => {
    render(
      <BrowserRouter>
        <ProductCard product={mockProduct} />
      </BrowserRouter>
    );

    // check if all components are rendered
    expect(screen.getByTestId("product")).toBeInTheDocument();
    expect(screen.getByTestId("product_image")).toBeInTheDocument();
    expect(screen.getByTestId("product_title")).toBeInTheDocument();
    expect(screen.getByTestId("product_price")).toBeInTheDocument();
  });

  it("add to cart", () => {
    render(
      <BrowserRouter>
        <ProductCard product={mockProduct} />
      </BrowserRouter>
    );

    const button = screen.getByTestId("button");

    fireEvent.click(button);

    expect(addShoppingItemCallback).toBeCalledTimes(1);
    expect(addShoppingItemCallback).toBeCalledWith(mockProduct);
  });
});
