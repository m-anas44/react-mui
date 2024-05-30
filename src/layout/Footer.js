import React from "react";
import { Container, Grid, Typography, Box, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import logo from "../assets/Logo/logo.png";
import "../index.css";
import { GitHub, Facebook, Twitter, Instagram } from "@mui/icons-material/";
import { Link } from "react-router-dom";
import { linkItems } from "../mockData/footerMockUp";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#111827",
    padding: theme.spacing(6, 0),
    color: "#fff",
  },
  sectionTitle: {
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
    fontFamily: "MontserratBold !important",
    color: "#7bbcf8",
  },
  link: {
    marginBottom: theme.spacing(1),
    letterSpacing: "-0.5px",
    color: "#d1d5db",
    fontFamily: "MontserratLight",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  logo: {
    marginBottom: theme.spacing(0),
    fontWeight: "bold",
    color: "#fff",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  copyright: {
    marginTop: theme.spacing(1),
    textAlign: "center",
    fontFamily: "MontserratLight",
    fontSize: "14px",
    color: "#d1d5db",
  },
}));

const Footer = () => {
  const classes = useStyles();

  const renderLinks = (links) => {
    return links.map((link, index) => (
      <Link key={index} to={link.url} className={classes.link}>
        {link.text}
      </Link>
    ));
  };

  return (
    <Box className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid container item xs={6} sm={6} md={3} direction="column">
            <Typography variant="h6" className={classes.sectionTitle}>
              Company
            </Typography>
            {renderLinks(linkItems.company)}
          </Grid>
          <Grid container item xs={6} sm={6} md={3} direction="column">
            <Typography variant="h6" className={classes.sectionTitle}>
              Help
            </Typography>
            {renderLinks(linkItems.help)}
          </Grid>
          <Grid container item xs={6} sm={6} md={3} direction="column">
            <Typography variant="h6" className={classes.sectionTitle}>
              Resources
            </Typography>
            {renderLinks(linkItems.resources)}
          </Grid>
          <Grid container item xs={6} sm={6} md={3} direction="column">
            <Typography variant="h6" className={classes.sectionTitle}>
              Extra Links
            </Typography>
            {renderLinks(linkItems.extraLinks)}
          </Grid>
        </Grid>
        <Divider sx={{ borderColor: "#7bbcf8", margin: "1rem 0" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            width: "100%",
          }}
          flexDirection={{ xs: "column", sm: "row", md: "row" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
              flexGrow: 1,
            }}
          >
            <Link to="#" className={classes.logo}>
              <img src={logo} alt="season insight" width={72} height={72} />
            </Link>
            <Box className={classes.socialIcons}>
              <Link to="#" className={classes.link}>
                <GitHub />
              </Link>
              <Link to="#" className={classes.link}>
                <Facebook />
              </Link>
              <Link to="#" className={classes.link}>
                <Instagram />
              </Link>
              <Link to="#" className={classes.link}>
                <Twitter />
              </Link>
            </Box>
          </Box>
          <Typography
            variant="body2"
            className={classes.copyright}
            sx={{ flexGrow: 1 }}
          >
            © Copyright 2021, All Rights Reserved by Postcraft
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
