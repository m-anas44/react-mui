import React from "react";
import MatchCard from "../MatchCard";
import { Box, Grid } from "@mui/material";
import { matchData } from "../../mockData/MatchesMockUp";
import SectionsHeader from "../SectionsHeader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UpMatchSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, // Added autoplay property
    autoplaySpeed: 3000, // Adjust autoplay speed as needed
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Box
      component="section"
      sx={{ overflow: "hidden" }}
      px={{ xs: 2, lg: 9 }}
      py={{ xs: 2, lg: 2 }}
    >
      <SectionsHeader heading="upcoming matches" buttonName="all" />
      <Slider {...settings}>
        {matchData.map((match, index) => (
          <Grid item key={index} sx={{ padding: "0 8px" }}>
            <MatchCard match={match} />
          </Grid>
        ))}
      </Slider>
      <br />
    </Box>
  );
};

export default UpMatchSection;
