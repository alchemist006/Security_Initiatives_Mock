import * as React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from ".";
import { BrowserRouter } from "react-router-dom";

test("should render search results", () => {
  jest.mock("react-router-dom", () => ({
    useLocation: jest.fn().mockReturnValue({
      state: [
        {
          id: 1,
          title: "Basic Physics",
          author: "Karl F Kuhn",
          authorImg: "https://i.ibb.co/6w4bQgB/Ellipse-9.png",
          bookImage: "https://i.ibb.co/xg9CJrt/Rectangle-18.png",
          category: "Chemistry",
          rating: 4.5,
          bookDescription:
            "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons",
          bookDesc:
            "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
          authorDesc:
            "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
          reviewsCount: 1210,
          releaseDate: "12th September 1998",
          language: "English",
          followersCount: 1200,
          isStartRead: true,
          isBookmarked: true,
          type: {
            recommendations: true,
            PeopleYouareFollowingAlsoRead: false,
            TopRatings: false,
          },
        },
      ],
    }),
  }));

  render(
    <BrowserRouter>
      <SearchResults />
    </BrowserRouter>
  );

  const results = screen.getByText(/Search Results/i);
  expect(results).toBeInTheDocument();
});
