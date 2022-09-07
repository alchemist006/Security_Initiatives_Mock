import * as React from "react";
import { render, screen } from "@testing-library/react";
import BookCards from ".";
import { BrowserRouter } from "react-router-dom";
import { TramRounded } from "@mui/icons-material";

test("should render BookCards", () => {
  render(
    <BrowserRouter>
      <BookCards
              searchInput={"J D Lee"}
              allBookData={[
                {
                  book: {
                    bookId: 1,
                    bookName: "Basic Physics",
                    authorId: 1,
                    description:
                      "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
                    rating: 9,
                    peopleRated: 120,
                    imageUrl: "https://i.ibb.co/xg9CJrt/Rectangle-18.png",
                    pages: 120,
                    category: {
                      categoryId: 1,
                      categoryName: "Social Science",
                    },
                    currentRead: false,
                    readComplete: false,
                    bookMarked: true,
                  },
                  author: {
                    id: 1,
                    name: "Eric Dorn Brose",
                    description:
                      "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
                    followers: 1000,
                    image: "https://i.ibb.co/s13qW8B/Rectangle-13-9.png",
                    bookId: 1,
                  },
                },
              ]} 
              searchResult={true}      />
    </BrowserRouter>
  );
  expect(screen.getByTestId("searchresultPage")).toBeInTheDocument();
});