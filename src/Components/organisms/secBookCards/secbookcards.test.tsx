import * as React from "react";
import { render, screen } from "@testing-library/react";
import CardGroup from ".";
import { BrowserRouter } from "react-router-dom";

test("should render recommendations see more and bookmark", () => {
  render(
    <BrowserRouter>
      <CardGroup filterType={"recommendations"} />
    </BrowserRouter>
  );

  expect(screen.getByTestId("cards")).toBeInTheDocument();
  expect(screen.getByTestId("recommendations-header")).toBeInTheDocument();
});

test("should render recommendations see more and bookmark", () => {
  render(
    <BrowserRouter>
      <CardGroup filterType={"recommendations"} />
    </BrowserRouter>
  );

  for (let i = 1; i < 5; i++) {
    expect(screen.queryAllByTestId(`${i}-card-item`).length).toEqual(0);
  }
});