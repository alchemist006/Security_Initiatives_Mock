import * as React from 'react';
import { render, screen } from "@testing-library/react";
import BookDescription from ".";
import book1 from "../../../../public/assets/images/book1.png";
import { BrowserRouter } from 'react-router-dom';

test("should render pagination", () => {
    render(<BrowserRouter><BookDescription bookImg={book1} bookTitle={'Super Simple Biology'} bookAuthor={'By D K Hudson'} bookCategory={'Humorous'} id={1}/></BrowserRouter>);
    expect(screen.getByRole("bookDescription")).toBeInTheDocument();

});