import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import SearchBar from ".";

test("should render search icon and textfield", () => {
  render(
    <BrowserRouter>
      <SearchBar
        placeholder={"Search here by book title, author or ISBN"}
        BookData={[]}
      />
    </BrowserRouter>
  );
  const placeholder = screen.getByPlaceholderText(
    "Search here by book title, author or ISBN"
  );
  const query = "change";
  const search = screen.getByTestId("textfield");
  const searchicon = screen.getByRole("searchicon");
  expect(placeholder).toBeInTheDocument();
  expect(search).toBeInTheDocument();
  fireEvent.change(placeholder, { target: { value: query } });

  expect(searchicon).toBeInTheDocument();
});