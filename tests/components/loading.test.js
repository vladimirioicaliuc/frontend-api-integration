import React from "react";
import Loading from "../../src/components/Loading/Loading";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { within } from "@testing-library/dom";

describe("Components / Loading", () => {
  it("renders main components", () => {
    render(<Loading />);

    // check if all components are rendered
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });
});
