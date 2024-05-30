import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Section = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  padding: theme.spacing(6, 0),
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(6, 8),
  },
}));

const Subheading = styled(Typography)(({ theme }) => ({
  fontSize: "1.125rem",
  fontWeight: "normal",
  color: "#d1d5db",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.25rem",
    maxWidth: "40rem",
    margin: "0",
  },
}));

const ContactSection = () => {
  return (
    <Section>
      <Container maxWidth="xl">
        <Box display="flex" flexDirection="column" alignItems="start" gap={2}>
          <Typography
            variant="h3"
            component="h3"
            gutterBottom
            marginBottom={"0px"}
            fontFamily={"btBrik"}
            color="inherit"
            fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
          >
            Get In Contact
          </Typography>
          <Subheading variant="body1">
            We're here to help you with any questions or concerns. Feel free to
            reach out to us anytime.
          </Subheading>
          <Button
            variant="contained"
            size={`${{ xs: "small", sm: "medium", md: "large" }}`}
            endIcon={<ArrowForwardIosIcon />}
            sx={{
              backgroundColor: "#dc004e",
              "&:hover": {
                backgroundColor: "#a70037",
              },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </Section>
  );
};

export default ContactSection;
