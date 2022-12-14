import { styled, Typography, Card, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Icons from "../../atoms/icons";
import Star from "../../../../public/assets/icons/star.svg";
import Share from "../../../../public/assets/icons/share.svg";
import Bookmark from "../../../../public/assets/icons/bookmark.svg";
import BookmarkYellow from "../../../../public/assets/icons/bookmarky.svg";
import theme from "../../../core-utils/theme";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { toggleBookMark } from "../../../service-layer";

type CardProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imgSrc?: any;
  bookName: string;
  author: string;
  category: string;
  rating: number;
  ratingCount: number;
  iconclick: () => void;
  onCardClick?: () => void;
  style?: React.CSSProperties;
  isBookmarked?: boolean;
  bookId: number;
};

const ImageBox = styled("div")({
  width: "60%",
  height: "20%",
  margin: "auto",
  padding: theme.spacing(3.75),
});

const Infocard = (props: CardProps) => {
  const [isBookmarked, setIsBookmarked] = useState(props.isBookmarked);
  const handleIconClick = (id: number) => {
    console.log(id);
    console.log(props.isBookmarked);
    setIsBookmarked(!isBookmarked);
    props.iconclick();
    toggleBookMark(id, !props.isBookmarked);
  };

  useEffect(() => {
    setIsBookmarked(props.isBookmarked)
  }, [props.isBookmarked]);
  return (
    <Card sx={props.style} data-testid={props.bookId} id={props.bookId+"id"}>
      <Box>
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <MoreHorizIcon
            fontSize={"small"}
            style={{
              marginRight: theme.spacing(2.5),
              color: `${theme.palette.secondary.light}`,
            }}
          />
        </div>
        <ImageBox
          onClick={props.onCardClick}
          style={{ backgroundColor: `${theme.palette.grey[200]}` }}
        >
          <img
            src={props.imgSrc}
            style={{ width: "151px", height: "165px" }}
          ></img>
        </ImageBox>
      </Box>
      <Box sx={{ marginLeft: theme.spacing(3) }}>
        <Typography variant="subtitle1" color="primary.dark">
          {props.bookName}
        </Typography>
        <Typography variant="body1" color="primary.light">
          By {props.author}
        </Typography>
        <Typography variant="body1" color="primary.light">
          Category: {props.category}
        </Typography>
        <Typography variant="body1" color="primary.light">
          {props.rating}
          <Icons
            icon={Star}
            style={{ height: theme.spacing(4.24), width: theme.spacing(4.24) }}
          ></Icons>
        </Typography>
        <div style={{ display: "flex" }}>
          <Typography variant="body1" color="primary.light">
            {props.ratingCount} Ratings
          </Typography>
          <div style={{ marginLeft: "auto" }}>
            <Icons
              onClick={() => handleIconClick(props.bookId)}
              icon={isBookmarked ? BookmarkYellow : Bookmark}
              style={{ marginRight: theme.spacing(2.5) }}
            ></Icons>
            <Icons
              icon={Share}
              style={{ marginRight: theme.spacing(2.5) }}
            ></Icons>
          </div>
        </div>
      </Box>
    </Card>
  );
};

export default Infocard;
