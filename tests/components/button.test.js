import React from "react";
import Button, { ButtonType } from "../../src/components/Button/Button";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { within } from "@testing-library/dom";

const mockOnClick = jest.fn();

describe("Components / Button", () => {
  it("renders main components", () => {
    render(<Button />);

    // check if all components are rendered
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });

  describe("props", () => {
    it("should have the label", () => {
      render(<Button label="my label" />);
      const { getByText } = within(screen.getByTestId("button"));
      expect(getByText("my label")).toBeInTheDocument();
    });

    it("should have the correct class when fullWidth is passed", () => {
      render(<Button fullWidth={true} />);
      const button = screen.getByTestId("button");

      expect(button).toHaveClass("btn-full-width");
    });

    describe("button type", () => {
      it("should have class when type is not passed", () => {
        render(<Button />);
        const button = screen.getByTestId("button");

        expect(button).toHaveClass("btn btn-secondary");
      });

      it("should have class when type PRIMARY", () => {
        render(<Button type={ButtonType.PRIMARY} />);
        const button = screen.getByTestId("button");

        expect(button).toHaveClass("btn btn-primary");
      });

      it("should have class when type SECONDARY", () => {
        render(<Button type={ButtonType.SECONDARY} />);
        const button = screen.getByTestId("button");

        expect(button).toHaveClass("btn btn-secondary");
      });
    });

    describe("onClick", () => {
      it("", () => {
        render(<Button onClick={mockOnClick} />);
        const button = screen.getByTestId("button");

        fireEvent.click(button);

        expect(mockOnClick).toBeCalledTimes(1);
      });
    });
  });
});
