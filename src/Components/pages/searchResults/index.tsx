import React from "react";
import BookCards from "../../organisms/bookCards";
import LandingTemplate from "../../templates/landingTemplate";
import { useLocation } from "react-router-dom";
import { BookDataProp } from "../../organisms/bookCards";
import Books from "../../../../Data/booksData";

interface CustomizedState {
  data: Array<BookDataProp>;
  input: string;
}

const SearchResultsPage: React.FC = () => {
  const location = useLocation();
  let state = location.state as CustomizedState;
  if (state == null) {
    state = {
      data: Books,
      input: "chemistry",
    };
  }

  return (
    <LandingTemplate
      library={false}
      template={
        <BookCards
          allBookData={state.data}
          searchInput={state.input}
          title={"Search Results"}
          searchResult={true}
        />
      }
    />
  );
};

export default SearchResultsPage;
