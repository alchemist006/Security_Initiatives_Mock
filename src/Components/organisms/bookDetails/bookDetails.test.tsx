import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BookDetails from ".";
import { BrowserRouter } from "react-router-dom";

test("should render book image and author image and bookmark click", () => {
  render(
    <BrowserRouter>
      <BookDetails id={1} />
    </BrowserRouter>
  );

  const footer = screen.getByTestId("footer");
  const button = screen.getByTestId("button");

  fireEvent.click(button);
  expect(button).toHaveTextContent("Stop Reading");

  expect(footer).toBeInTheDocument();
  expect(screen.getByTestId("title")).toBeInTheDocument();
  expect(screen.getByTestId("author")).toBeInTheDocument();
  expect(screen.getByTestId("rating")).toBeInTheDocument();
  expect(screen.getByTestId("date")).toBeInTheDocument();
  expect(screen.getByTestId("lang")).toBeInTheDocument();
});