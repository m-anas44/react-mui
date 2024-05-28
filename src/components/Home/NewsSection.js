import React from "react";
import Card from "../CustomCard";
import { newsItems } from "../../mockData/newsMockUp";
import { Box, Grid } from "@mui/material";
import SectionsHeader from "../SectionsHeader";

const NewsSection = () => {
  return (
    <Box component="section" mt={4} pl={0} pr={0}>
      <SectionsHeader heading={'Latest News'} buttonName={'All News'}/>
      <Box maxWidth="1200px" mx="auto" px={2} mt={4}>
        <Grid container spacing={2} justifyContent="start">
          {newsItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Card
                image={item.imageUrl}
                heading={item.headline}
                uploadTime={item.uploadTime}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default NewsSection;
