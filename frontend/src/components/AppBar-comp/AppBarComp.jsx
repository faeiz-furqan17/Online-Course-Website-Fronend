import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Button,
  TextField,
  InputAdornment,
  OutlinedInput,
  Input,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/Logo";
import ROUTES from "../../routes/routes";
import { useSelector } from "react-redux";

function AppBarComp() {
  // State to manage the visibility of the drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const userProfile = useSelector((state) => state.user.userProfile);

  // State to manage the text in the search input
  const [searchText, setSearchText] = useState("");

  // Handler for search input changes
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <AppBar
        color="primary"
        position="relative"
        sx={{ backgroundColor: "primary.main" }}
      >
        <Toolbar>
          {/* Menu button to open the drawer */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo button */}
          <IconButton>
            <Logo />
          </IconButton>

          {/* Drawer component */}
          <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <List
              sx={{
                width: 200,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                padding: 0,
                marginTop: 20,
                gap: 3,
                listStyle: "none",
                "& > *": {
                  width: "100%",
                  padding: "10px 10",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  "&:hover": {
                    cursor: "pointer",
                    color: "secondary.main",
                  },
                },
              }}
            >
              {/* List items for drawer */}
              <ListItem>
                <Link to={ROUTES.HOMEPAGE}>Home</Link>
              </ListItem>
              <ListItem>
                <Link to={ROUTES.USER_PROFILE}>Profile</Link>
              </ListItem>
              {userProfile.is_instructor ? (
                <ListItem>
                  <Link to={ROUTES.COURSE_ADD}>Manage Courses</Link>
                </ListItem>
              ) : null}
            </List>
          </Drawer>

          {/* Search input field */}
          <Input
            sx={{ marginLeft: 5 }}
            autoComplete="on"
            inputProps={{ "aria-label": "search" }}
            size="small"
            color="secondary"
            id="search"
            label="search"
            value={searchText}
            onChange={handleSearch}
            placeholder="Search..."
            variant="filled"
            type="search"
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon color={searchText ? "secondary" : ""} />
                </IconButton>
              </InputAdornment>
            }
          />

          {/* Buttons for sign in and registration */}
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              justifyContent: "space-around",
              gap: 10,
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="md"
              sx={{ borderRadius: "20px" }}
            >
              Sign In
            </Button>
            <Button
              variant="contained"
              color="warning"
              size="md"
              sx={{ borderRadius: "20px" }}
            >
              Register for free
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default AppBarComp;
