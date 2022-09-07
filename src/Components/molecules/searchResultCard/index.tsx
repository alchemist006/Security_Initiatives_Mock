import * as React from "react";
import { Box, Card, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../../../core-utils/colors";
import { bookCategory } from "../../../core-utils/messages/index";
import {
  Star as StarIcon,
  BookmarkBorder as BookmarkBorderIcon,
  ShareOutlined as ShareOutlinedIcon,
} from "@mui/icons-material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import theme from "../../../core-utils/theme";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useEffect } from "react";

interface SearchResultCardProps {
  className?: string;
  onClick?: (id: number) => void;
  id: number;
  style?: React.CSSProperties;
  bookImg: string;
  authorAvtar: string;
  authorName: string;
  bookName: string;
  bookDescription: string;
  category: string;
  rating: number;
  peopleRated: number;
  isBookmarked: boolean;
  bookmarkClick?: () => void;
  onCardClick?: () => void;
}

const useStyles = makeStyles({
  card: {
    boxShadow: `0px -2px 10px ${theme.palette.grey[50]}`,
    display: "flex",
    width: "571px",
    height: "287px",
    padding: "24px",
    borderRadius: "12px",
    margin: "24px 0px",
    cursor: "pointer",
  },
  container: {},
  flexDiv: {
    display: "flex",
  },
  avtarStyle: {
    width: "38px",
    height: "38px",
  },
  bookNameStyle: {
    padding: "18px 18px 18px 0px",
  },
  commonStyle: {
    padding: "8px 0px",
    marginTop: "8px",
  },
  ratingStyle: {
    width: "16.94px",
    height: "16px",
    display: "flex",
    paddingTop: "39px",
  },
  authorDetail: {
    display: "flex",
    justifyContent: "space-between",
  },
  bookContentDiv: {
    paddingLeft: "44px",
    paddingTop: "10px",
  },
  authorDetailSubcontainer: {
    paddingLeft: "11.82px",
  },
  bookContentSubDiv: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const SearchResultCard = (props: SearchResultCardProps) => {
  /* eslint-disable */
  useEffect(() => {}, [props.isBookmarked]);
  const classes = useStyles();
  return (
    <Card
      classes={{ root: classes.card }}
      id={props.id + "id"}
      data-testid={props.id}
    >
      <Box className={classes.flexDiv} onClick={props.onCardClick}>
        <img
          src={props.bookImg}
          style={{
            marginTop: "7.5px",
            marginLeft: "9px",
            width: "205px",
            height: "273px",
          }}
        />
      </Box>
      <Box className={classes.bookContentDiv}>
        <Box className={classes.authorDetail}>
          <Box className={classes.flexDiv}>
            <Box>
              <img className={classes.avtarStyle} src={props.authorAvtar} />
            </Box>
            <Box className={classes.authorDetailSubcontainer}>
              <Typography variant="body1" color="primary.dark">
                {props.authorName}
              </Typography>
              <Typography variant="caption" color="primary.light">
                Author
              </Typography>
            </Box>
          </Box>
          <Box>
            <MoreHorizIcon
              fontSize={"inherit"}
              style={{
                color: `${theme.palette.secondary.light}`,
                marginRight: "-5px",
                height: "30px",
                width: "35px",
                marginTop: "-5px",
              }}
            />
          </Box>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            color="primary.main"
            className={classes.bookNameStyle}
          >
            {props.bookName}
          </Typography>
          <Typography
            variant="caption"
            color="primary.light"
            className={classes.commonStyle}
          >
            {props.bookDescription.slice(0, 137)}
            <Box
              data-testid="boxcomponent"
              component="span"
              color="secondary.main"
              style={{ cursor: "pointer" }}
            >
              &nbsp;See more
            </Box>
          </Typography>
          <br></br>
          <br></br>
          <Typography
            variant="caption"
            color="primary.main"
            className={classes.commonStyle}
          >
            {bookCategory}
            {props.category}
          </Typography>
          <Typography
            variant="caption"
            color="primary.light"
            className={classes.ratingStyle}
          >
            {props.rating}
            <StarIcon
              sx={{
                color: colors.RATING_ICON,
                height: "16px",
                width: "16px",
                position: "relative",
                bottom: "1px",
                left: "5px",
              }}
            />
          </Typography>
        </Box>
        <Box className={classes.bookContentSubDiv}>
          <Typography
            variant="caption"
            color="primary.light"
            className={classes.commonStyle}
          >
            {props.peopleRated} ratings
          </Typography>
          <Box sx={{ marginLeft: "-10px" }}>
            {props.isBookmarked ? (
              <BookmarkIcon
                fontSize={"inherit"}
                data-testid="bookmark"
                sx={{
                  color: "#FFB500",
                  height: "32px",
                  width: "26px",
                  paddingRight: "12px",
                  marginBottom: "-7px",
                  cursor: "pointer",
                }}
                onClick={props.bookmarkClick}
              />
            ) : (
              <BookmarkBorderIcon
                fontSize={"inherit"}
                data-testid="bookmark"
                sx={{
                  color: "secondary.light",
                  height: "32px",
                  width: "26px",
                  paddingRight: "12px",
                  marginBottom: "-7px",
                  cursor: "pointer",
                }}
                onClick={props.bookmarkClick}
              />
            )}

            <ShareOutlinedIcon
              fontSize={"inherit"}
              sx={{
                color: "secondary.light",
                marginBottom: "-5px",
                height: "28px",
                width: "24px",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default SearchResultCard;
