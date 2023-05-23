import React from "react";
import Homepage from "./../../src/pages/Homepage/Homepage";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

jest.mock("./../../src/components/Products/Products", () => () => {
  return <mock-component data-testid="products" />;
});

describe("Pages / Home page", () => {
  it("renders main components", () => {
    render(<Homepage />);

    // check if all components are rendered
    expect(screen.getByTestId("homepage")).toBeInTheDocument();
    expect(screen.getByTestId("products")).toBeInTheDocument();
  });
});
