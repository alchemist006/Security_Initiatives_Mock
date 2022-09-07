import { Box, Divider } from "@mui/material";
import React from "react";
import theme from "../../../core-utils/theme";
import ButtonComponent from "../../atoms/Buttons/index";
import { BookDataProp } from "../../organisms/bookCards";
import BookDescription from "../bookDescription/index";



export interface SearchResultProps {
  results: Array<BookDataProp>;
  handleSeeMore: () => void;
}

const SearchResult = (props: SearchResultProps) => {

  return (
    <Box sx={{zIndex : "999", background: "white", boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.2)", borderRadius: "5px", height:'500px', width:'37.4vw'}}>
      <>
       <div style={{height:'450px',overflowX:'hidden',overflowY:'scroll'}}>
       {props.results.map((books, key) => {
          return (
            <BookDescription
              key={key}
              bookImg={books.book.imageUrl}
              bookTitle={books.book.bookName}
              bookAuthor={books.author.name}
              bookCategory={books.book.category.categoryName}
              id={books.book.bookId}
            />
          );
        })}
       </div>
       <div style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
       <div>
        <Divider sx={{marginLeft:'24px',marginRight:'24px',color:`${theme.palette.grey[50]}`, width:'35vw'}}/>
       <ButtonComponent
          role={"button"}
          color="secondary"
          style={{textTransform:'none',marginTop:'6px', width: '37.4vw', color:`${theme.palette.secondary.main}`}}
          onClick={props.handleSeeMore}
        >
          See all results
        </ButtonComponent>
       </div>
       </div>
      </>
    </Box>
  );
};

export default SearchResult;