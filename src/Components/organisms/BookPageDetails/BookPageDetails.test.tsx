import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import BookPageDetails from ".";

test("should render header component and book page", () => {
  render(
    <BrowserRouter>
      <BookPageDetails id={5} />
    </BrowserRouter>
  );

  expect(screen.getByTestId("body")).toBeInTheDocument();
});
