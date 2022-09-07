import { render, screen } from "@testing-library/react";
import HeaderComponent from ".";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("not Found component", () => {
  test("render text notfound", () => {
    // eslint-disable-next-line react/no-children-prop

    render(
      <BrowserRouter>
        <HeaderComponent isLibrary={true} />
      </BrowserRouter>
    );

    const search = screen.getByTestId("textfield");

    const home = screen.getByTestId("home");
    expect(home).toBeInTheDocument();

    const explore = screen.getByTestId("exploreIA");
    expect(explore).toBeInTheDocument();

    const library = screen.getByTestId("libraryA");
    expect(library).toBeInTheDocument();

    expect(search).toBeInTheDocument();
  });
});