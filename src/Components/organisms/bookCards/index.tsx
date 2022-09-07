import { Box, Grid, Typography } from "@mui/material";
import React, { useState, useCallback, useEffect } from "react";
import SearchResultCard from "../../molecules/searchResultCard";
import { SearchResult } from "../../../core-utils/messages/index";
import BookPagination from "../../molecules/Pagination";
import { useGlobalBookmarkState } from "../bookDetails/index";
import DropDown from "../../molecules/Dropdown";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../core-utils/theme";
import { bookMarkBook, unbookMarkBook } from "../../../service-layer";
import { useNavigate } from "react-router-dom";
interface AuthorProps {
  id: number;
  name: string;
  description: string;
  followers: number;
  image: string;
  bookId: number;
}

interface CategoryProps {
  categoryId: number;
  categoryName: string;
}

interface BookProps { 
  bookId: number;
  bookName: string;
  authorId: number;
  description: string;
  rating: number;
  peopleRated: number;
  imageUrl: string;
  pages: number;
  category:CategoryProps
  currentRead: boolean;
  readComplete: boolean;
  bookMarked: boolean;
}


export interface BookDataProp {
  book: BookProps;
  author: AuthorProps;
}

interface BookCardsProps {
  title?: string;
  searchInput?: string;
  allBookData: Array<BookDataProp>;
  searchResult: boolean;
}

const useStyles = makeStyles(() => ({
  heading: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    margin: theme.spacing(3.75),
  },
}));



const BookCards = (props: BookCardsProps) => {
   /* eslint-disable */
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [bookMarkState, setBookmarkState]= useState(false)
  const [bookmarks, setBookmarks] = useGlobalBookmarkState();
  
  const [bookData, setBookData] = useState([
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
  ]);
  useEffect(() => {
    setBookData(props.allBookData.slice((page - 1) * 10, page * 10))
  }, [page, props.allBookData]);

  /* eslint-enable */
  const addBookmarks = useCallback(
    (id: number) => {
      setBookmarks([...bookmarks, id]);
    },
    [bookmarks, setBookmarks]
  );

  const handleBookMarkClick = (id: number, bookMark:boolean) => {
    setBookmarkState(!bookMark)
    if (!bookMark) {
      addBookmarks(id);
      bookMarkBook(id);
    } else {
      unbookMarkBook(id);
    }
    
  };

  const handlePagination = (
    _event: React.ChangeEvent<unknown>,
    currentPage: number
  ) => {

    const val = page * 10;
    setBookData(props.allBookData.slice(val, (page + 1) * 10));
    setPage(currentPage);
  };

  const totalPagination = (): number => {
    return Math.ceil(props.allBookData.length / 10);
  };

  const navigate = useNavigate();
  const handleCardNavigate = (id: number) => {
    navigate(`/books/${id}`);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "100px",
        }}
      >
        <Box className={classes.heading}>
          <Box>
            {props.searchResult ? (
              <Typography
                data-testid="searchresultPage"
                id={"searchresultPage"}
                variant="h1"
                sx={{ marginTop: theme.spacing(1.75) }}
              >
                {SearchResult}
                {props.searchInput}
              </Typography>
            ) : (
              <Typography
                data-testid="mylibraryPage"
                id={"mylibraryPage"}
                variant="h1"
                sx={{ marginTop: theme.spacing(1.75) }}
              >
                My Library
              </Typography>
            )}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <DropDown
              style={{
                width: theme.spacing(32),
                height: theme.spacing(10.5),
                margin: theme.spacing(1.75),
                borderRadius: theme.spacing(2),
              }}
              name={"Categories"}
            />
            <DropDown
              style={{
                width: theme.spacing(32),
                height: theme.spacing(10.5),
                margin: theme.spacing(1.75),
                borderRadius: theme.spacing(2),
              }}
              name={"Sort by"}
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ minHeight: "67vh" }}
        >
          {bookData.length > 0 &&
            bookData.map((book, key) => {
              return (
                <>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    display="flex"
                    justifyContent="center"
                  >
                    <SearchResultCard
                      key={key}
                      id={book.book.bookId}
                      bookImg={book.book.imageUrl}
                      authorAvtar={book.author.image}
                      authorName={book.author.name}
                      bookName={book.book.bookName}
                      bookDescription={book.book.description}
                      category={book.book.category.categoryName}
                      rating={book.book.rating}
                      peopleRated={book.book.peopleRated}
                      bookmarkClick={() => handleBookMarkClick(book.book.bookId, book.book.bookMarked)}
                      onCardClick={() => handleCardNavigate(book.book.bookId)}
                      isBookmarked={book.book.bookMarked} />
                  </Grid>
                </>
              );
            })}
        </Grid>
        <Box
          sx={{ display: "flex", float: "right", margin: theme.spacing(4.5) }}
        >
          <Box sx={{ margin: theme.spacing(2) }} component="span">
            <Typography variant="caption" sx={{ marginTop: "-8px" }}>
              {page * 10 - 9} to{" "}
              {props.allBookData.slice((page - 1) * 10, page * 10).length} of{" "}
              {props.allBookData.length} results
            </Typography>
          </Box>
          <BookPagination
            onClick={handlePagination}
            setPage={setPage}
            page={page}
            count={totalPagination()}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BookCards;