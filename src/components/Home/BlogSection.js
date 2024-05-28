import React from "react";
import BlogCard from "../BlogCard";
import { blogItems } from "../../mockData/blogMockUp";
import { Box, Grid } from "@mui/material";
import SectionsHeader from "../SectionsHeader";
const BlogSection = () => {
  return (
    <Box component="section" pl={0} pr={0} py={{ xs: 6, sm: 6, lg: 8 }}>
      <SectionsHeader heading={"Latest Blogs"} buttonName={"All Blogs"} />
      <Box maxWidth="1200px" mx="auto" px={2} mt={4}>
        <Grid container spacing={2} justifyContent="start">
          {blogItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <BlogCard avatar={item.avatar} title={item.title} subheader={item.subheader} image={item.image} content={item.content} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default BlogSection;
