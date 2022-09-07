
import { ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookPage from "./Components/pages/bookPage";
import HomePage from "./Components/pages/home";
import Library, {
  useGlobalBookmarkState,
  useGlobalReadState,
} from "./Components/pages/library";
import theme from "./core-utils/theme";
import Books from "../Data/booksData";
import SearchResultsPage from "./Components/pages/searchResults";

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

export interface AllProps {
  book:BookProps;
  author:AuthorProps
}

function App() {
  const [, setCurrentRead] = useGlobalReadState();
  const [, setBookmarks] = useGlobalBookmarkState();

  const bookMarksIds = () => {
    const bookMarks = Books.filter(
      (book: AllProps) => book.book.bookMarked == true
    );
    const ids: number[] = [];
    bookMarks.map((book: AllProps) => ids.push(book.book.bookId));
    setBookmarks(ids);
  };
  bookMarksIds();
  const startReadIds = () => {
    const startRead = Books.filter(
      (book: AllProps) => book.book.currentRead == true
    );
    const ids: number[] = [];
    startRead.map((book: AllProps) => ids.push(book.book.bookId));
    setCurrentRead(ids);
  };
  startReadIds();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/searchresults" element={<SearchResultsPage />} />
          <Route path="/mylibrary" element={<Library />} />
          <Route path="/" element={<HomePage />} />
          <Route path={`/books/:id`} element={<BookPage />} />
        </Routes>
      </BrowserRouter>
   
      
    </ThemeProvider>
  );
}

export default App;
