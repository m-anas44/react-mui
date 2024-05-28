import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import CustomButton from "./CustomButton";
import useMediaQuery from "@mui/material/useMediaQuery";

const SectionsHeader = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="div"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mx="auto"
      maxWidth="1200px"
      px={2}
    >
      <Typography
        component="h3"
        variant={isMobile ? "h5" : "h4"}
        color="primary.main"
        fontFamily={"btBrik"}
        sx={{ color: "#111827" }}
      >
        {props.heading}
      </Typography>
      <CustomButton
        name={props.buttonName}
        sx={{
          fontSize: isMobile ? "0.575rem" : "1rem",
          padding: isMobile ? "0px" : "10px 20px",
        }}
      />
    </Box>
  );
};

export default SectionsHeader;
