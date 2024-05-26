import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  IconButton,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "../index.css";
import user from "../assets/pictures/user.jpg";

const userMenuItems = [
  { text: "Dashboard" },
  { text: "Settings" },
  { text: "Earnings" },
  { text: "Sign out" },
];

const mainMenuItems = [
  { text: "Home", path: "/" },
  { text: "Score Card", path: "/scorecard" },
  { text: "Card", path: "/score" },
  { text: "Profile", path: "/profile" },
  { text: "About", path: "/about" },
  { text: "Contact", path: "/contact" },
  { text: "FAQ", path: "/faq" },
  { text: "Support", path: "/support" },
];

const UserDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <div>
      <IconButton
        aria-controls="user-menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        color="inherit"
        sx={{
          p: 2,
          margin: "0 5px 0 15px",
          width: 10,
          height: 10,
          justifyContent: "center",
          textAlign: "center",
          borderRadius: "50%",
          ":hover": { bgcolor: "grey.100" },
          focusVisible: { outline: "2px solid", outlineColor: "grey.200" },
        }}
      >
        <Avatar alt="user photo" src={user} sx={{ width: 40, height: 40 }} />
      </IconButton>

      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="body2" color="text.primary">
            Bonnie Green
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            name@flowbite.com
          </Typography>
        </Box>
        <Divider />
        {userMenuItems.map((item) => (
          <MenuItem key={item.text} onClick={handleMenuClose}>
            <ListItemText primary={item.text} />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [submenuAnchorEl, setSubmenuAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:960px)");

  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => {
    setAnchorEl(null);
    setSubmenuAnchorEl(null);
  };
  const handleSubmenuClick = (event) => setSubmenuAnchorEl(event.currentTarget);
  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const drawerWidth = 300;
  const drawerTextColor = "#d1d5db";

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {["About", "Contact"].map((text) => (
        <MenuItem
          key={text}
          component={Link}
          to={`/${text.toLowerCase()}`}
          onClick={handleClose}
        >
          {text}
        </MenuItem>
      ))}
      <MenuItem
        aria-controls="submenu"
        aria-haspopup="true"
        onClick={handleSubmenuClick}
      >
        More Options
        <ArrowRightIcon />
      </MenuItem>
      <Menu
        id="submenu"
        anchorEl={submenuAnchorEl}
        keepMounted
        open={Boolean(submenuAnchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {["FAQ", "Support"].map((text) => (
          <MenuItem
            key={text}
            component={Link}
            to={`/${text.toLowerCase()}`}
            onClick={handleClose}
          >
            {text}
          </MenuItem>
        ))}
      </Menu>
    </Menu>
  );

  const renderDrawerMenu = (
    <Box
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
      className="drawer"
      sx={{
        width: drawerWidth,
        height: "100%",
      }}
    >
      <List>
        {mainMenuItems.map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
          >
            <ListItemText
              className="drawer-text no-uppercase"
            >{item.text}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" className="app-bar">
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ color: drawerTextColor }}
              >
                <MenuIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  textDecoration: "none",
                  color: drawerTextColor,
                  fontFamily: "btBrik",
                }}
              >
                Season Insight
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <UserDropdown />
              </Box>
            </>
          ) : (
            <>
              <Typography
                component={Link}
                to="/"
                variant="h6"
                sx={{
                  textDecoration: "none",
                  color: drawerTextColor,
                  fontFamily: "btBrik",
                  borderBottom: "2px solid transparent",
                }}
              >
                Season Insight
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: "flex" }}>
                {mainMenuItems.slice(0, 4).map((item) => (
                  <Button
                    key={item.text}
                    color="inherit"
                    component={Link}
                    to={item.path}
                    className="link" // Apply link class for border transition
                    sx={{
                      color: drawerTextColor,
                      marginRight: "16px",
                      fontFamily: "Montserrat",
                      textTransform: "none", // Ensure text is not uppercase
                      "&:hover": {
                        color: "#7bbcf8", // Change text color on hover
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
                <Button
                  color="inherit"
                  className="link" // Apply link class for border transition
                  sx={{
                    color: drawerTextColor,
                    fontFamily: "Montserrat",
                    textTransform: "none", // Ensure text is not uppercase
                    "&:hover": {
                      color: "#7bbcf8", // Change text color on hover
                    },
                  }}
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleMenuClick}
                >
                  More
                  <ExpandMoreIcon />
                </Button>
                {renderMenu}
                <UserDropdown />
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        {renderDrawerMenu}
      </Drawer>
      <Toolbar /> {/* Spacer to push content below AppBar */}
    </>
  );
};

export default Navbar;
