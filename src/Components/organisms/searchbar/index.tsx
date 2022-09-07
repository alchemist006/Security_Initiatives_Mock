import React, { useRef, useState } from "react";
import { Box, InputAdornment, styled, TextField } from "@mui/material";
import SearchIcon from "../../../../public/assets/icons/search.svg";
import theme from "../../../core-utils/theme";
import SearchResult from "../../molecules/searchResult";
import { useNavigate } from "react-router-dom";
import NotfoundComponent from "../../molecules/notFound";
import { IconButton } from "@material-ui/core";
import ClearIcon from "@mui/icons-material/Clear";
import { BookDataProp } from "../bookCards";

export interface SearchProps {
  placeholder: string;
  BookData: Array<BookDataProp>;
  bookName?: string;
  topicSearch?: string;
}

const CloseButton = styled(IconButton)({
  marginRight: "-15px",
});

const SearchBar = (props: SearchProps) => {
  const [findTitle, setTitle] = useState<string>("");
  const [val, setVal] = useState<string>("");

  const [slicedSearchResults, setSlicedSearchResults] = useState<BookDataProp[]>(
    []
  );

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
  /* eslint-disable */
  const search = (val: string, books: any) => {
    setTitle(val);
    const searchResults = books.filter((book: BookDataProp) => {
      const dataFilter: string = book?.author?.name.toLowerCase();
      const bookFilter: string = book?.book?.bookName.toLowerCase();
      const categoryFilter: string = book?.book.category?.categoryName.toLowerCase();

      return (
        dataFilter?.includes(findTitle.toLowerCase()) ||
        bookFilter?.includes(findTitle.toLowerCase()) ||
        categoryFilter?.includes(findTitle.toLowerCase())
      );
    });

    setSlicedSearchResults(searchResults.slice(0, 4));
    return searchResults;
  };

  const handleChange = (e : any) => {
    const val = e.target.value;
    setVal(val);
    const books = search(val, props.BookData);
    setBookData(books);
  };
 

  const navigate = useNavigate();

  const ref = useRef(null);
  const handleClearClick = (e : any) => {    
    setTitle("");
    setVal("");
  };
   /* eslint-enable */

  return (
    <>
      <TextField
        ref={ref}
        id="searchField"
        data-testid="textfield"
        placeholder={props.placeholder}
        onChange={(e) => handleChange(e)}
        value={val}
        sx={{
          color: `${theme.palette.primary.main}`,
          width: "100%",
          lineHeight: "42px",
          height: "42px",
          stroke: "grey.50",
          [` & fieldset`]: {
            borderRadius: 2,
          },
          "& .MuiInputBase-root": {
            height: "42px",
            backgroundColor: `${theme.palette.info.main}`,
            borderRadius: 2,
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{
                marginLeft: "0px",
                paddingLeft: "0px",
                zIndex: 10,
              }}
            >
              <img role="searchicon" src={SearchIcon} />
            </InputAdornment>
          ),
          endAdornment: (
            <CloseButton onClick={(e) => handleClearClick(e)}>
              <ClearIcon
                fontSize="inherit"
                sx={{ width: "20px", height: "20px" }}
              />
            </CloseButton>
          ),
        }}
      ></TextField>

      <Box>
        {findTitle.length > 1 ? (
          bookData.length > 0 ? (
            <SearchResult
              results={slicedSearchResults}
              handleSeeMore={() =>
                navigate("/searchresults", {
                  state: {
                    data: bookData,
                    input: findTitle,
                  },
                })
              }
            />
          ) : (
            <NotfoundComponent
              placeholder={
                "No Results found. Please try a different search term"
              }
            />
          )
        ) : null}
      </Box>
    </>
  );
};

export default SearchBar;