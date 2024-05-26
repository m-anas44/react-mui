import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Divider,
  CssBaseline,
  Popper,
  ClickAwayListener,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { NavLink } from "react-router-dom";
import { NavBarLinks } from "../mockdata/navLinks";

const Navbar2 = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSubMenuClick = (event) => {
    setSubMenuAnchorEl(event.currentTarget);
  };

  const handleSubMenuClose = () => {
    setSubMenuAnchorEl(null);
  };

  const drawerWidth = 240;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Your Brand
      </Typography>
      <Divider />
      <List>
        {NavBarLinks.map((item, index) =>
          item.fields ? (
            <React.Fragment key={index}>
              <ListItem button onClick={handleMenuClick}>
                <ListItemText primary={item.name} />
                <KeyboardArrowDownIcon />
              </ListItem>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {item.fields.map((field, index) => (
                  <MenuItem key={index} onClick={handleMenuClose}>
                    <NavLink to={field.path}>{field.name}</NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </React.Fragment>
          ) : (
            <ListItem button component={NavLink} to={item.path}>
              <ListItemText primary={item.name} />
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: "#111827" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              className="h-8"
            />
            <span style={{ marginLeft: "8px", fontWeight: "bold" }}>
              Your Brand
            </span>
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {NavBarLinks.map((item, index) =>
              item.fields ? (
                <React.Fragment key={index}>
                  <Button onClick={handleSubMenuClick}>{item.name}</Button>
                  <Popper
                    open={Boolean(subMenuAnchorEl)}
                    anchorEl={subMenuAnchorEl}
                    placement="bottom-start"
                  >
                    <ClickAwayListener onClickAway={handleSubMenuClose}>
                      <List
                        component="nav"
                        sx={{
                          width: 200,
                          "& .MuiListItem-root": { padding: "0" },
                        }}
                      >
                        {item.fields.map((field, index) => (
                          <ListItem button key={index}>
                            <NavLink to={field.path}>{field.name}</NavLink>
                          </ListItem>
                        ))}
                      </List>
                    </ClickAwayListener>
                  </Popper>
                </React.Fragment>
              ) : (
                <Button component={NavLink} to={item.path}>
                  {item.name}
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar2;