import * as React from "react";
import { render, screen } from "@testing-library/react";
import BookPage from ".";
import { BrowserRouter } from "react-router-dom";

test("should render header component and book page", () => {
  render(
    <BrowserRouter>
      <BookPage id={1} />
    </BrowserRouter>
  );

  expect(screen.getByTestId("body")).toBeInTheDocument();
});