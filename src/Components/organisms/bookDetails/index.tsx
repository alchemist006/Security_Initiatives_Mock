import { Box, Grid, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import ButtonComponent from "../../atoms/Buttons";
import Icons from "../../atoms/icons";
import Share from "../../../../public/assets/icons/share.svg";
import Bookmark from "../../../../public/assets/icons/bookmark.svg";
import BookmarkYellow from "../../../../public/assets/icons/bookmarky.svg";
import {
  BooksURL,
  By,
  category,
  date,
  lang,
  Language,
  ReleaseDate,
} from "../../../core-utils/messages/index";
import { useTrackerContext } from "../../../core-utils/trackercontext";
import axios from "axios";
import { createGlobalState } from "react-use";
import theme from "../../../core-utils/theme";
import {
  startReadBook,
  stopReadBook,
  toggleBookMark,
} from "../../../service-layer";
import Books from "../../../../Data/booksData";

export interface BookDetailsProps {
  id: number;
}

export const useGlobalReadState = createGlobalState<number[]>([]);
export const useGlobalBookmarkState = createGlobalState<number[]>([]);
export const useGlobalBooksCompletedState = createGlobalState<number[]>([]);

const BookDetails = (props: BookDetailsProps) => {
  const {tracker, setTracker} = useTrackerContext();
  const [bookData, setBookData] = useState(Books[1]);

  const [isbookmarked, setIsBookmarked] = useState(false);
  useEffect(() => {
    const myBookData = async (n: number) => {
      axios
        .get(`${BooksURL}/api/books/authors/${n}`)
        .then((res) => {
          setBookData(res.data);
          setIsBookmarked(res.data.book.bookMarked);
        })
        .catch((err) => {
          console.log(err);
        });

      const bookStatus = bookData.book.currentRead
        ? "Stop Reading"  
        : "Start Reading";
      setStartRead(bookStatus);
    };
    myBookData(props.id);
  }, [bookData.book.currentRead, props.id,isbookmarked]);

  const [currentRead, setCurrentRead] = useGlobalReadState();

  const readStatus = bookData.book.currentRead
    ? "Stop Reading"
    : "Start Reading";
  const [startRead, setStartRead] = useState(readStatus);
  const [booksCompleted, setBooksCompleted] = useGlobalBooksCompletedState();

  const handleStartRead = () => {
    if (
      currentRead.indexOf(bookData.book.bookId) <= -1 ||
      currentRead.length == 0
    ) {
      addToRead(bookData.book.bookId);
      startReadBook(bookData.book.bookId);
      deleteFromComplete(bookData.book.bookId);
      setStartRead("Stop Reading");
    } else {
      addToComplete(bookData.book.bookId);
      deleteToRead(bookData.book.bookId);
      stopReadBook(bookData.book.bookId);
      setStartRead("Start Reading");
    }
  };

  const deleteFromComplete = useCallback(
    (id: number) => {
      const index = booksCompleted.indexOf(id);
      if (index !== -1) {
        booksCompleted.splice(index, 1);
      }
      setBooksCompleted(booksCompleted);
    },
    [booksCompleted, setBooksCompleted]
  );

  const addToComplete = useCallback(
    (id: number) => {
      setBooksCompleted([...booksCompleted, id]);
    },
    [booksCompleted, setBooksCompleted]
  );

  const deleteToRead = useCallback(
    (id: number) => {
      console.log(currentRead);
      const index = currentRead.indexOf(id);
      if (index !== -1) {
        currentRead.splice(index, 1);
      }
      setCurrentRead(currentRead);
    },
    [currentRead, setCurrentRead]
  );

  const addToRead = useCallback(
    (id: number) => {
      setCurrentRead([...currentRead, id]);
    },
    [currentRead, setCurrentRead]
  );

  const handleBookmark = () => {  
    setIsBookmarked(!isbookmarked);
    toggleBookMark(bookData.book.bookId, !bookData.book.bookMarked);
    setTracker(tracker+1);
  };

  return (
    <Grid container xs={8} md={8}>
      <Grid item display="flex" sx={{ height: theme.spacing(75.25) }}>
        <Box>
          <img
            src={bookData.book.imageUrl}
            style={{ height: "297px" }}
            alt="book image"
          />
        </Box>
        <Box sx={{ marginLeft: theme.spacing(6.25) }}>
          <Typography data-testid="title" variant="h1" color="primary.dark">
            {bookData.book.bookName}
          </Typography>
          <Typography
            data-testid="author"
            color="primary.light"
            marginTop={theme.spacing(1)}
          >
            {By}
            <Typography color="primary.main" variant="body1" component="span">
              {bookData.author.name}
            </Typography>
          </Typography>
          <Typography
            data-testid="category"
            color="primary.light"
            marginTop={theme.spacing(1)}
          >
            {category}
            <Typography color="primary.main" variant="body1" component="span">
              {bookData.book.category.categoryName}
            </Typography>
          </Typography>
          <Typography
            data-testid="rating"
            color="primary.light"
            marginTop={theme.spacing(1)}
          >
            {bookData.book.rating} reviews
          </Typography>
          <Typography
            data-testid="date"
            color="primary.light"
            marginTop={theme.spacing(1)}
          >
            {ReleaseDate}
            <Typography color="primary.main" variant="body1" component="span">
              {date}
            </Typography>
          </Typography>
          <Typography
            data-testid="lang"
            color="primary.light"
            marginTop={theme.spacing(1)}
          >
            {Language}
            <Typography color="primary.main" variant="body1" component="span">
              {lang}
            </Typography>
          </Typography>
          <Box
            data-testid="footer"
            sx={{ marginTop: theme.spacing(22.5) }}
            display="flex"
          >
            <ButtonComponent
              data-testid="button"
              variant="contained"
              color="secondary"
              style={{
                backgroundColor: `${theme.palette.secondary.main}`,
                textTransform: "none",
                boxShadow: "none",
              }}
              onClick={handleStartRead}
            >
              {startRead}
            </ButtonComponent>
            <Icons
              icon={bookData.book.bookMarked ? BookmarkYellow : Bookmark}
              onClick={handleBookmark}
              style={{ marginLeft: theme.spacing(5.5) }}
            />
            <Icons icon={Share} style={{ marginLeft: theme.spacing(5.5) }} />
          </Box>
        </Box>
      </Grid>
      <Grid item sx={{ marginTop: theme.spacing(2.5) }}>
        <Box>
          <Typography variant="subtitle1" color="primary.dark">
            Book Description
          </Typography>
          <Typography
            color="primary.light"
            sx={{ marginTop: theme.spacing(2) }}
          >
            {bookData.book.description}
          </Typography>
        </Box>
        <Box sx={{ marginTop: theme.spacing(10) }}>
          <Typography variant="subtitle1" color="primary.dark">
            About Author
          </Typography>
          <Box display="flex" marginTop={theme.spacing(4)}>
            <img
              src={"https://i.ibb.co/6w4bQgB/Ellipse-9.png"}
              alt="author image"
              style={{ height: theme.spacing(20), width: theme.spacing(20) }}
            />
            <div style={{ marginLeft: theme.spacing(6.25) }}>
              <Typography color="primary.dark">
                By {bookData.author.name}
              </Typography>
              <Typography color="primary.light" marginTop={theme.spacing(1)}>
                {bookData.author.followers} Followers
              </Typography>
              <ButtonComponent
                variant="outlined"
                style={{
                  color: `${theme.palette.secondary.main}`,
                  borderColor: `${theme.palette.secondary.main}`,
                  textTransform: "none",
                  marginTop: theme.spacing(1),
                }}
              >
                Following
              </ButtonComponent>
            </div>
          </Box>
          <Typography
            color="primary.light"
            sx={{ marginTop: theme.spacing(2) }}
          >
            {bookData.author.description}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BookDetails;
