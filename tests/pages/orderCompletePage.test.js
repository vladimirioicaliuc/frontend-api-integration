import React from "react";
import OrderCompletePage from "./../../src/pages/OrderCompletePage/OrderCompletePage";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Pages / OrderComplete", () => {
  it("renders main components", () => {
    render(<OrderCompletePage />);

    // check if all components are rendered
    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("orderId")).toBeInTheDocument();
  });
});
