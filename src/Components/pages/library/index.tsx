import axios from "axios";
import React, { useEffect, useState } from "react";
import { createGlobalState } from "react-use";
import { AllProps } from "../../../App";
import { BooksURL } from "../../../core-utils/messages";
import LandingPageStarter from "../../molecules/landingpage";
import BookCards from "../../organisms/bookCards";
import LandingTemplate from "../../templates/landingTemplate";

export const useGlobalReadState = createGlobalState<number[]>([]);
export const useGlobalBookmarkState = createGlobalState<number[]>([]);
export const useGlobalBooksCompletedState = createGlobalState<number[]>([]);

const Library: React.FC = () => {
  const [library, setLibrary] = useState(true);
  const [bookData, setBookData] = useState([
    {
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
          categoryName: "",
        },
        currentRead: false,
        readComplete: false,
        bookMarked: false,
      },
      author: {
        id: 0,
        name: "",
        description: "",
        followers: 0,
        image: "",
        bookId: 0,
      },
    },
  ]);
  /* eslint-disable */
  useEffect(() => {
    const data = async () => {
      const searchedRes = await axios.get(`${BooksURL}/api/books/authors`);
      const filterData = searchedRes.data.filter(
        (book: AllProps) =>
          book.book.bookMarked || book.book.currentRead
      );
      setBookData(filterData);
      if (bookData.length !== 0) {
        setLibrary(false);
      }
    };
    data();
  }, []);
  /* eslint-enable */

  return library ? (
    <LandingTemplate template={<LandingPageStarter />} library={true} />
  ) : (
    <LandingTemplate
      template={
        <BookCards
          title={"My Library"}
          allBookData={bookData}
          searchResult={false}
        />
      }
      library={true}
    />
  );
};

export default Library;
