import React from "react";
import { Box, Typography, Grid, Paper, Chip, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/system";
import bgBanner from "../../assets/pictures/profileBanner.jpg";
import logo from "../../assets/pictures/banner2.png";
import "../../index.css";

const Banner = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundImage: `url(${bgBanner})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "#fff",
}));

const OverlayContent = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "#fff",
  width: "100%",
  height: "100%",
}));

const ProfileBanner = () => {
  return (
    <Banner component={"section"}>
      <OverlayContent>
        <IconButton
          title="Edit"
          sx={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            color: "#fff",
            borderRadius: "5px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.3)",
            },
          }}
          aria-label="edit"
        >
          <EditIcon />
        </IconButton>
        <Grid container sx={{ alignItems: "center" }}>
          <img
            item
            src={logo}
            alt="team logo"
            width={"25%"}
            height={"auto"}
            xs={12}
            sm={6}
            md={3}
            lg={3}
          ></img>

          <Grid
            item
            sx={{ color: "#d1d5db" }}
            xs={12}
            sm={6}
            md={3}
            lg={3}
            p={1}
          >
            <Chip
              label="Team"
              sx={{
                marginBottom: "5px",
                left: "5rem",
                zIndex: 2,
                backgroundColor: "#dc004e",
                color: "#fff",
                padding: "2px 6px",
                borderRadius: "5px",
                fontSize: "0.7rem",
                fontWeight: "bold",
                fontFamily: "MontserratLight",
                textTransform: "uppercase",
              }}
            />
            <Typography
              variant="h3"
              sx={{ fontFamily: "btBrik", marginBottom: "5px" }}
            >
              Eagles33
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontFamily: "MontserratLight", marginBottom: "5px" }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  color: "#111827",
                  backgroundColor: "#d1d5db",
                  padding: "4px",
                  borderRadius: "5px",
                }}
              >
                Captain Phone
              </span>
              &nbsp; 03451234567
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontFamily: "MontserratLight", marginBottom: "5px" }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  color: "#111827",
                  backgroundColor: "#d1d5db",
                  padding: "4px",
                  borderRadius: "5px",
                }}
              >
                Area
              </span>
              &nbsp; Johar Town, Lahore, Punjab, Pakistan
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontFamily: "MontserratLight", marginBottom: "5px" }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  color: "#111827",
                  backgroundColor: "#d1d5db",
                  padding: "4px",
                  borderRadius: "5px",
                }}
              >
                Email
              </span>
              &nbsp; eagles33@example.com
            </Typography>
          </Grid>
        </Grid>
      </OverlayContent>
    </Banner>
  );
};

export default ProfileBanner;
