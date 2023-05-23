import React from "react";
import Header from "../../src/components/Header/Header";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { within } from "@testing-library/dom";
import { BrowserRouter } from "react-router-dom";

jest.mock("./../../src/components/ShoppingCart/ShoppingCart", () => () => {
  return <mock-component data-testid="shopping-cart" />;
});

describe("Components / Header", () => {
  it("renders main components", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    // check if all components are rendered
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("shopping-cart")).toBeInTheDocument();
  });
});
