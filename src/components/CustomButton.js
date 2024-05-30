import React from "react";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styled } from "@mui/material/styles";
import "../index.css";
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#111827",
  color: "#efefeff7",
  textTransform: "none",
  padding: theme.spacing(1, 2.5),
  fontSize: "12px",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: "#1f2937",
  },
  "& .icon": {
    marginLeft: theme.spacing(1),
    transition: "transform 0.3s ease-in-out",
  },
  "&:hover .icon": {
    transform: "translateX(5px)",
  },
}));
const CustomButton = (props) => {
  return (
    <StyledButton
      variant="contained"
      endIcon={<ArrowForwardIcon className="icon" />}
      sx={{ fontFamily: "MontserratMedium", textTransform: 'capitalize' }}
    >
      {props.name}
    </StyledButton>
  );
};

export default CustomButton;
