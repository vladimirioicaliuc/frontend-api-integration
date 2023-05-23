import React from "react";
import ShoppingCart from "../../src/components/ShoppingCart/ShoppingCart";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import * as cartContext from "./../../src/context/CartContext";
import * as shoppingCartUtils from "./../../src/utils/shoppingCart";

jest.mock("./../../src/components/Cart/Cart", () => () => {
  return <mock-component data-testid="cart" />;
});

const addShoppingItemCallback = jest.fn();
cartContext.useCartContext = jest.fn().mockReturnValue({
  shoppingItems: [1, 2, 3],
});

shoppingCartUtils.totalNumberOfItems = jest.fn().mockReturnValue(10);

const mockProduct = {
  id: "product_id",
  title: "product_title",
  price: 10,
  imageUrl: "product_image",
};

describe("Components / ShoppingCart", () => {
  it("renders main components", () => {
    render(<ShoppingCart />);

    // check if all components are rendered
    expect(screen.getByTestId("shopping-cart")).toBeInTheDocument();
    expect(screen.getByTestId("shopping-cart-icon")).toBeInTheDocument();
  });

  it("add to cart", () => {
    render(<ShoppingCart />);

    const shoppingCartIcon = screen.getByTestId("shopping-cart-icon");

    fireEvent.click(shoppingCartIcon);

    expect(screen.getByTestId("shopping-cart-menu")).toBeInTheDocument();
  });
});
