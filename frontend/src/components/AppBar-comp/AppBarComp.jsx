import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  InputAdornment,
  OutlinedInput,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../assets/logo/Logo";
import ROUTES from "../../routes/routes";
import { searchCourseSlicerFunc } from "../../redux/user/userSlice";

function AppBarComp() {
  const userProfile = useSelector((state) => state.user.userProfile);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    dispatch(searchCourseSlicerFunc(e.target.value));
  };

  const isUserProfileEmpty = Object.keys(userProfile).length === 0;

  return (
    <AppBar
      color="primary"
      position="relative"
      sx={{ backgroundColor: "rgba(255, 101, 47, 0.8)" }}
    >
      <Toolbar>
        <IconButton>
          <Logo />
        </IconButton>

        <List
          sx={{
            fontSize: "medium",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            padding: 0,
            marginLeft: 10,
            gap: 1,
            listStyle: "none",
            "& > *": {
              width: "100%",
              textTransform: "uppercase",
              fontWeight: 500,
              whiteSpace: "nowrap",
              "&:hover": {
                cursor: "pointer",
                color: "secondary.main",
              },
            },
          }}
        >
          <ListItem>
            <Link to={ROUTES.HOMEPAGE}>Home</Link>
          </ListItem>
          <ListItem>
            <Link to={ROUTES.USER_PROFILE}>Profile</Link>
          </ListItem>
          {userProfile.is_instructor && (
            <>
              <ListItem>
                <Link to={ROUTES.COURSE_ADD}>Manage Courses</Link>
              </ListItem>
              <ListItem>
                <Link to={ROUTES.PREFERENCE_ADD}>Your Preference</Link>
              </ListItem>
            </>
          )}
        </List>

        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            justifyContent: "space-around",
            gap: 10,
          }}
        >
          <OutlinedInput
            sx={{
              marginLeft: 5,
            }}
            autoComplete="on"
            inputProps={{ "aria-label": "search" }}
            size="small"
            color="secondary"
            id="search"
            value={searchText}
            onChange={handleSearch}
            placeholder="Search..."
            type="search"
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => navigate(ROUTES.SEARCH)}>
                  <SearchIcon color={searchText ? "secondary" : "inherit"} />
                </IconButton>
              </InputAdornment>
            }
          />

          {isUserProfileEmpty && (
            <>
              <Button
                variant="contained"
                color="secondary"
                size="md"
                sx={{ borderRadius: "20px" }}
                onClick={() => navigate(ROUTES.LOGIN)}
              >
                Sign In
              </Button>
              <Button
                variant="contained"
                color="warning"
                size="md"
                sx={{ borderRadius: "20px" }}
                onClick={() => navigate(ROUTES.REGISTER)}
              >
                Register for free
              </Button>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarComp;
