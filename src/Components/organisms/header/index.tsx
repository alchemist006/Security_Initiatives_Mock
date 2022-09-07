import React, { useEffect, useState } from "react";
import {
  AppBar,
  Grid,
  Menu,
  MenuItem,
  styled,
  Typography,
} from "@mui/material";
import theme from "../../../core-utils/theme";
import Icons from "../../atoms/icons";
import BookLogo from "../../atoms/Logo";
import SearchBar from "../searchbar";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
import { BooksURL } from "../../../core-utils/properties";
import AllTopic from "../allTopics";

type headerProps = {
  isLibrary: boolean;
};

const HeaderBox = styled("div")({
  height: "68px",
  paddingLeft: "7.46vw",
  paddingRight: "7.46vw",
  background: `linear-gradient(180deg, ${theme.palette.info.dark} 0%, ${theme.palette.success.main} 100%)`,
});

const HeadInner = styled(Grid)({
  paddingTop: "12px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "start",
});

const Logo = styled(BookLogo)({});

const DropDownFrameActive = styled("div")({
  height: "22px",
  marginTop: "1px",
  border: `1px solid ${theme.palette.info.main}`,
  borderRadius: "2px",
  display: "flex",
  paddingBottom: "5px",
  paddingLeft: "5px",
  marginLeft: "26px",
});

const DropDownFrame = styled("div")({
  height: "22px",
  marginTop: "5px",
  display: "flex",
  paddingBottom: "5px",
  paddingLeft: "5px",
  marginLeft: "24px",
});
const SearchBox = styled("div")({
  marginLeft: "2rem",
  width: "37.5vw",
  [theme.breakpoints.down(1327)]: {
    width: "350px",
  },
  [theme.breakpoints.down(1154)]: {
    width: "100px",
  },
  [theme.breakpoints.down(862)]: {
    width: "50px",
  },
});

const HeaderComponent = (props: headerProps) => {
  const [exploreStatus, setExploreStatus] = useState<boolean>(false);
  const [libraryStatus, setLibraryStatus] = useState<boolean>(props.isLibrary);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
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

  useEffect(() => {
    const myBookData = async () => {
      const result = await axios.get(`${BooksURL}/api/books/authors`);
      const book = result.data;
      setBookData(book);
    };
    myBookData();
  }, []);

  const [explore, setExplore] = useState(false);
  const [exploreDrop, setExploreDrop] = useState(false);

  const handleDivClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setLibraryStatus(false);
    setExplore(!explore);
    setAnchorEl(event.currentTarget);
    setExploreStatus(true);
    ExploreClick();
  };
  const handleClose = () => {
    setExplore(false);
    setAnchorEl(null);
    setExploreStatus(false);
  };

  const MylibraryClick = () => {
    setLibraryStatus(true);
    setExplore(false);
    navigate("/mylibrary");
  };
  const ExploreClick = () => {
    setExplore(!explore);
    setExploreDrop(!exploreDrop);
  };

  return (
    <AppBar elevation={0}>
      <HeaderBox data-testid="headerbox" id={"headerbox"}>
        <HeadInner container>
          <Logo sx={{ marginTop: "5px", marginLeft: "13px" }} />
          <Typography
            id="home"
            data-testid="home"
            sx={{ marginTop: "8.5px", marginLeft: "4rem" }}
            color={`${theme.palette.info.main}`}
            onClick={() => {
              setLibraryStatus(false);
              setExploreStatus(false);
              navigate("/");
            }}
          >
            Home
          </Typography>

          {explore ? (
            <>
              <div
                style={{
                  marginTop: "5px",
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "-21px",
                }}
              >
                <DropDownFrameActive
                  onClick={handleDivClick}
                  id="exploreA"
                  data-testid="exploreA"
                >
                  <div
                    style={{
                      display: "flex",
                      backgroundColor: "transparent",
                      borderStyle: "none",
                    }}
                    id="categories-button"
                    aria-controls={open ? "categories-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    data-testid="exploreButton"
                  >
                    <Typography
                      sx={{ marginTop: "2px" }}
                      color={`${theme.palette.info.main}`}
                    >
                      Explore
                    </Typography>
                    <ArrowDropDownIcon
                      fontSize="small"
                      sx={{ marginTop: "2px" }}
                      htmlColor={`${theme.palette.info.main}`}
                    ></ArrowDropDownIcon>
                  </div>
                </DropDownFrameActive>
                <div>
                  {exploreStatus ? (
                    <img
                      src={"https://i.ibb.co/1KQ3L4J/killo.png"}
                      style={{ marginLeft: "45px", marginBottom: "-9px" }}
                    />
                  ) : (
                    <img
                      src={"https://i.ibb.co/1KQ3L4J/killo.png"}
                      style={{
                        marginLeft: "45px",
                        marginBottom: "-9px",
                        opacity: 0,
                      }}
                    />
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <DropDownFrame
                id="exploreIA"
                data-testid="exploreIA"
                onClick={handleDivClick}
              >
                <Typography
                  sx={{ marginTop: "3.5px" }}
                  color={`${theme.palette.info.main}`}
                >
                  Explore
                </Typography>
                <ArrowDropDownIcon
                  fontSize="small"
                  sx={{ marginTop: "3.5px" }}
                  htmlColor={`${theme.palette.info.main}`}
                ></ArrowDropDownIcon>
              </DropDownFrame>
            </>
          )}
          {libraryStatus ? (
            <DropDownFrameActive
              id="libraryA"
              data-testid="libraryA"
              onClick={() => MylibraryClick()}
              sx={{ marginTop: "6px" }}
            >
              <Typography
                sx={{ marginTop: "1.5px" }}
                color={`${theme.palette.info.main}`}
              >
                MyLibrary
              </Typography>
              <ArrowDropDownIcon
                fontSize="small"
                sx={{ marginTop: "1.5px" }}
                htmlColor={`${theme.palette.info.main}`}
              ></ArrowDropDownIcon>
            </DropDownFrameActive>
          ) : (
            <DropDownFrame
              id="libraryIA"
              data-testid="libraryIA"
              sx={{ marginTop: "7px" }}
              onClick={() => MylibraryClick()}
            >
              <Typography
                sx={{ marginTop: "1.5px" }}
                color={`${theme.palette.info.main}`}
              >
                MyLibrary
              </Typography>
              <ArrowDropDownIcon
                fontSize="small"
                sx={{ marginTop: "1.5px" }}
                htmlColor={`${theme.palette.info.main}`}
              ></ArrowDropDownIcon>
            </DropDownFrame>
          )}

          <SearchBox>
            <SearchBar 
              placeholder={"Search here by book title, author or ISBN"}
              BookData={bookData}
            ></SearchBar>
          </SearchBox>

          <div style={{ marginLeft: "3rem", marginTop: "14px" }}>
            {" "}
            <Icons icon={"https://i.ibb.co/TW7SLjS/bell.png"}></Icons>
          </div>

          <div
            style={{
              marginLeft: "1.5rem",
              marginRight: "10px",
              marginTop: "4.5px",
            }}
          >
            <Avatar
              src={"https://i.ibb.co/sHxLBNb/profile.png"}
              sx={{
                marginTop: "-3px",
                height: "40px",
                width: "40px",
              }}
            ></Avatar>
          </div>
        </HeadInner>
        <Menu
          id="categories-menu"
          anchorReference="anchorPosition"
          anchorPosition={{ top: 68, left: 960 }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "categories-button",
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          data-testid="menu"
        >
          <MenuItem
            onClick={handleClose}
            autoFocus={false}
            disableGutters
            style={{ backgroundColor: "transparent" }}
          >
            <AllTopic />
          </MenuItem>
        </Menu>
      </HeaderBox>
    </AppBar>
  );
};

export default HeaderComponent;
