import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import AllTopic from ".";
import { BrowserRouter } from "react-router-dom";

test("should render pagination", () => {
  render(
    <BrowserRouter>
      <AllTopic />
    </BrowserRouter>
  );

  const tabs = screen.getAllByRole("tab");
  const tabPanel = screen.getByRole("tabpanel");
  const tabsComponent = screen.getByTestId("tabComponent");
  expect(tabsComponent).toBeInTheDocument();
  expect(tabPanel).toBeInTheDocument();

  expect(tabs[0]).toHaveAttribute("aria-selected", "true");
  expect(tabs[1]).toHaveAttribute("aria-selected", "false");

  fireEvent.click(tabs[1]);
  expect(tabs[0]).toHaveAttribute("aria-selected", "false");
  expect(tabs[1]).toHaveAttribute("aria-selected", "true");

  fireEvent.click(tabs[2]);
  expect(tabs[0]).toHaveAttribute("aria-selected", "false");
  expect(tabs[1]).toHaveAttribute("aria-selected", "false");

  fireEvent.click(tabs[3]);
  expect(tabs[0]).toHaveAttribute("aria-selected", "false");
  expect(tabs[1]).toHaveAttribute("aria-selected", "false");
});