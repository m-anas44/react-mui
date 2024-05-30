import React from "react";
import MatchCard from "../MatchCard";
import { Box } from "@mui/material";
import { matchData } from "../../mockData/MatchesMockUp";
import SectionsHeader from "../SectionsHeader";
import { styled } from "@mui/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section = styled("section")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(3, 11),
  },
}));

const CardWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
}));

const UpMatchSection = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <Box component="section">
      <SectionsHeader heading="upcoming matches" buttonName="all matches" />
      <Section>
        <Slider {...settings}>
          {matchData.map((match, index) => (
            <CardWrapper key={index}>
              <MatchCard match={match} />
            </CardWrapper>
          ))}
        </Slider>
      </Section>
    </Box>
  );
};

export default UpMatchSection;
