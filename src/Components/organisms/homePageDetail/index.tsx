 /* eslint-disable */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../core-utils/theme";
import topicsYouFollow from "../../../../Data/topicsYouFollow";
import chevron from "../../../../public/assets/icons/chevron.svg";
import bookToRead from "../../../../public/assets/icons/bookstoread.svg";
import bookRead from "../../../../public/assets/icons/bookread.svg";
import check from "../../../../public/assets/icons/check.svg";
import targetsvg from "../../../../public/assets/icons/target.svg";
import {
  useGlobalBookmarkState,
  useGlobalBooksCompletedState,
  useGlobalReadState,
} from "../bookDetails";
import {
  booksRead,
  booksToRead,
  BooksURL,
  currentRead,
  homeTitle1,
  homeTitle2,
  homeTitle3,
  homeTitle4,
  target,
} from "../../../core-utils/messages";
import ReadingCount from "../../molecules/readingCount";
import ReadingCardComponent from "../../molecules/bookReading";
import CardGroup from "../secBookCards";
import BannerComponent from "../../molecules/banner";
import { useNavigate } from "react-router-dom";
import Books from "../../../../Data/booksData"

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "100px",
    width: "84%",
    display: "flex",
    flexDirection: "column",
    marginBottom: "50px",
    textAlign: "left",
  },
  bannerDiv: {
    margin: `${theme.spacing(14)} 0px`,
    width: "100%",
  },
  countDiv: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
}));

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

interface AllProps {
  book:BookProps;
  author:AuthorProps
}

const HomePageDetail = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [booksReadcount] = useGlobalReadState();
  const [booksToReadcount] = useGlobalBookmarkState();

  const [booksReadcountL, setBooksReadCount] = useState([
    [
      [{
        book: {
        bookId: 0,
        bookName: "",
        authorId: 0,
        description: "",
        rating: 0,
        peopleRated: 0,
        imageUrl: "",
        pages: 0,
        category: {
        categoryId: 0,
        categoryName: ""
        },
        currentRead: false,
        readComplete: false,
        bookMarked: false
        },
        author: {
        id: 0,
        name: "",
        description: "",
        followers: 0,
        image: "",
        bookId: 0
        }
        },
      ],
    ],
  ]);
  const [booksToReadcountL, setBooksToReadcount] = useState([
    [{
      book: {
      bookId: 0,
      bookName: "",
      authorId: 0,
      description: "",
      rating: 0,
      peopleRated: 0,
      imageUrl: "",
      pages: 0,
      category: {
      categoryId: 0,
      categoryName: ""
      },
      currentRead: false,
      readComplete: false,
      bookMarked: false
      },
      author: {
      id: 0,
      name: "",
      description: "",
      followers: 0,
      image: "",
      bookId: 0
      }
      },
    ],
  ]);
  const [booksCompletedcount] = useGlobalBooksCompletedState();

  const [bookData, setBookData] = useState([{
    book: {
    bookId: 0,
    bookName: "",
    authorId: 0,
    description: "",
    rating: 0,
    peopleRated: 0,
    imageUrl: "",
    pages: 0,
    category: {
    categoryId: 0,
    categoryName: ""
    },
    currentRead: false,
    readComplete: false,
    bookMarked: false
    },
    author: {
    id: 0,
    name: "",
    description: "",
    followers: 0,
    image: "",
    bookId: 0
    }
    },
  ],);

  const navigateBookDetail = (id: number) => {
    navigate(`/books/${id}`);
  };

  useEffect(() => {
    const data = async () => {
      const searchedRes = await axios.get(`${BooksURL}/api/books/authors`);    
      const result = searchedRes.data;
      setBookData(result);
      const bookmarkCount = result.filter((book: AllProps) => {
        return book.book.bookMarked === true;
      });
      setBooksReadCount(bookmarkCount);

      const bookstoReadCount = result.filter((book: AllProps) => {
        return book.book.currentRead === true;
      });
      setBooksToReadcount(bookstoReadCount);
    };
    data();
  }, [booksReadcountL, booksToReadcountL]);

  return (
    <Box className={classes.container}>
      <Box className={classes.bannerDiv}>
        <BannerComponent imgSrc={"https://i.ibb.co/yV41kd6/book-Shelf.png"} />
      </Box>
      <Box className={classes.countDiv}>
        <ReadingCount
          heading={currentRead}
          iconImg={bookRead}
          count={booksToReadcountL.length}
        />
        <ReadingCount
          heading={booksToRead}
          iconImg={bookToRead}
          count={booksReadcountL.length}
        />
        <ReadingCount
          heading={booksRead}
          iconImg={check}
          count={booksCompletedcount.length}
        />
        <ReadingCount heading={target} iconImg={targetsvg} count={100} />
      </Box>
      <Box sx={{ marginTop: theme.spacing(26) }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h1" color="primary.dark">
              {homeTitle1}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="secondary.main">
              See more
              <img style={{ height: theme.spacing(4) }} src={chevron} />
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: theme.spacing(3.75),
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {bookData
            .filter((books) => books.book.currentRead)
            .slice(0, 4)
            .map((book, key) => {
              return (
                <ReadingCardComponent
                  key={key}
                  imgSrc={book.book.imageUrl}
                  bookName={book.book.bookName}
                  author={book.author.name}
                  category={book.book.category.categoryName}
                  pagesRead={20}
                  pagesTotal={250}
                  onClick={() => {
                    navigateBookDetail(book.book.bookId);
                  }}
                />
              );
            })}
        </Box>
      </Box>
      <Box sx={{ marginTop: theme.spacing(26) }} id={"recommendations"} data-testid={"recommendations"}>
        <CardGroup
          filterType={"recommendations"}
          heading={"Recommendations"}
        ></CardGroup>
      </Box>
      <Box sx={{ marginTop: theme.spacing(26) }} id={"PeopleYouareFollowingAlsoRead"} data-testid={"PeopleYouareFollowingAlsoRead"}>
        <CardGroup
          filterType={"PeopleYouareFollowingAlsoRead"}
          heading={homeTitle2}
        ></CardGroup>
      </Box>
      <Box sx={{ marginTop: theme.spacing(26) }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h1" color="primary.dark">
              {homeTitle3}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="secondary.main">
              See more{" "}
              <img style={{ height: theme.spacing(4) }} src={chevron} />
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: theme.spacing(3.75),
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {topicsYouFollow.map((book, key) => {
            return (
              <Box id={book.val} data-testid={book.val} key={key} sx={{ marginRight: theme.spacing(5) }}>
                <Box>
                  <img src={book.img} />
                </Box>
                <Box>
                  <Typography>{book.val}</Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box sx={{ marginTop: theme.spacing(26) }} id={"TopRatings"} data-testid={"TopRatings"}>
        <CardGroup filterType={"TopRatings"} heading={homeTitle4}></CardGroup>
      </Box>
    </Box>
  );
};

export default HomePageDetail;
