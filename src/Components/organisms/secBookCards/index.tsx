import { Typography, Box } from "@mui/material";
import React, { useEffect, useState, useCallback } from "react";
import chevron from "../../../../public/assets/icons/chevron.svg";
import Infocard from "../../molecules/card";
import { BooksURL } from "../../../core-utils/properties";
import { useGlobalBookmarkState } from "../bookDetails";
import axios from "axios";
import theme from "../../../core-utils/theme";
import { bookMarkBook, unbookMarkBook } from "../../../service-layer";
import { useNavigate } from "react-router-dom";
import Books from "../../../../Data/booksData";

const types = {
  recommendations: false,
  PeopleYouareFollowingAlsoRead: false,
  TopRatings: false,
};
interface CardGroupProps {
  filterType: keyof typeof types;
  heading?: string;
}

const CardGroup = (props: CardGroupProps) => {
  const [bookData, setBookData] = useState(Books);
  const [start, setStart] = useState(0);
  const [stop, setStop] = useState(4);

  const [bookmarks, setBookmarks] = useGlobalBookmarkState();

  useEffect(() => {
    const data = async () => {
      const searchedRes = await axios.get(`${BooksURL}/api/books/authors`);
      setBookData(searchedRes.data);
    };

    if (props.filterType == "recommendations") {
      setStart(0);
      setStop(4);
    } else if (props.filterType == "PeopleYouareFollowingAlsoRead") {
      setStart(5);
      setStop(9);
    } else {
      setStart(10);
      setStop(14);
    }
    data();
  }, [props.filterType]);

  const addBookmarks = useCallback(
    (id: number) => {
      setBookmarks([...bookmarks, id]);
      bookMarkBook(id);
    },
    [bookmarks, setBookmarks]
  );
  const navigate = useNavigate();
  const handleCardNavigate = (id: number) => {
    navigate(`/books/${id}`);
  };

  return (
    <Box>
      <Box
        data-testid="recommendations-header"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h1" color="primary.dark">
          {props.heading}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            cursor: "pointer",
            display: "flex",
            marginLeft: "auto",
            width: theme.spacing(22.5),
            color: "secondary.main",
            alignItems: "center",
          }}
        >
          See more <img style={{ height: theme.spacing(4) }} src={chevron} />{" "}
        </Typography>
      </Box>
      <Box
        data-testid="cards"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: theme.spacing(4),
          justifyContent: "space-between",
        }}
      >
        {bookData.slice(start, stop).map((cards, key) => {
          return (
            <Infocard
              onCardClick={() => {
                handleCardNavigate(cards.book.bookId);
              }}
              key={key}
              imgSrc={cards.book.imageUrl}
              iconclick={() => {
                if (!cards.book.bookMarked) {
                  addBookmarks(cards.book.bookId);
                } else {
                  unbookMarkBook(cards.book.bookId);
                }
              }}
              bookName={cards.book.bookName}
              author={cards.author.name}
              category={cards.book.category.categoryName}
              rating={cards.book.rating}
              ratingCount={cards.book.rating}
              style={{ width: theme.spacing(68.25), border: "none" }}
              isBookmarked={cards.book.bookMarked}
              bookId={cards.book.bookId}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default CardGroup;
