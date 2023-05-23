import React from "react";
import { BrowserRouter } from "react-router-dom";
import CartPage from "./../../src/pages/CartPage/CartPage";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

jest.mock("./../../src/components/Cart/Cart", () => () => {
  return <mock-component data-testid="cart" />;
});

jest.mock("./../../src/components/CustomerInformation/CustomerInformation", () => () => {
  return <mock-component data-testid="customer-info" />;
});

describe("Pages / Cart", () => {
  it("renders main components", () => {
    render(
      <BrowserRouter>
        <CartPage />
      </BrowserRouter>
    );

    // check if all components are rendered
    expect(screen.getByTestId("cart-page-title")).toBeInTheDocument();
    expect(screen.getByTestId("cart-page-cart")).toBeInTheDocument();
    expect(screen.getByTestId("cart")).toBeInTheDocument();
    expect(screen.getByTestId("cart-page-customer")).toBeInTheDocument();
    expect(screen.getByTestId("customer-info")).toBeInTheDocument();
  });
});
