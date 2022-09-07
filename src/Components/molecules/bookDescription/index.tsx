import * as React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../core-utils/theme";
import { useNavigate } from "react-router";

interface BookDescriptionProps {
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  bookImg: string;
  bookTitle: string;
  bookAuthor: string;
  bookCategory: string;
  id:number;
}

const useStyles = makeStyles({
  container: {
    marginLeft: "24px",
    marginRight: "24px",
    width: "35vw",
    display: "flex",
    paddingTop: "16px",
    paddingBottom: "16px",
    backgroundColor: "white",
    borderBottomStyle: "solid",
    borderWidth: "1.5px",
    borderColor: `${theme.palette.grey[50]}`,
  },
  bookInfoDiv: {
    display: "flex",
    textAlign: "left",
    flexDirection: "column",
    paddingTop: "8px",
    justifyContent: "center",
  },
  imgDiv: {
    marginRight: "32px",
  },
});

const BookDescription = (props: BookDescriptionProps) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleCardNavigate = (id: number) => {
    navigate(`/books/${id}`);
  };
  return (
    <Box role = {"bookDescription"}className={classes.container} onClick={()=>handleCardNavigate(props.id)}>
      <Box className={classes.imgDiv}>
        <img src={props.bookImg} style={{ width: "188px", height: "88px" }} />
      </Box>
      <Box>
        <Box className={classes.bookInfoDiv}>
          <Typography color="primary.dark" variant="subtitle1">
            {props.bookTitle}
          </Typography>
          <Typography color="primary.light" variant="body1">
            {props.bookAuthor}
          </Typography>
          <Typography color="primary.light" variant="body1">
            Catergory - {props.bookCategory}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BookDescription;
