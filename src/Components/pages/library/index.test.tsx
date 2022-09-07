import * as React from "react";
import { render, screen } from "@testing-library/react";
import Library from ".";
import { BrowserRouter } from "react-router-dom";

test("should render HomePage", () => {
  render(
    <BrowserRouter>
      <Library />
    </BrowserRouter>
  );

  const explore = screen.getByText("Explore");
  expect(explore).toBeInTheDocument();

  const home = screen.getByText("Home");
  expect(home).toBeInTheDocument();
});