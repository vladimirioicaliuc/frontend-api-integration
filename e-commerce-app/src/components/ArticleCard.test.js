import { render, screen, fireEvent } from "@testing-library/react";
import ArticleCard from "./ArticleCard.js";

const articleMock = {
  id: "00942dba-18f4-422c-8f21-2c854888479d",
  title: "The Power of Habit",
  price: 10,
  imageUrl: "https://libris.to/media/jacket/09188414_power-of-habit.jpg",
};

test("add article to cart", () => {
  render(<ArticleCard article={articleMock} />);
  const articleElement = screen.getByClassName("article-card");

  fireEvent.mouseEnter(articleElement);

  const buttonElement = screen.getByClassName("add-to-cart-button");
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
});
