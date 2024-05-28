import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "../../index.css";
import { statItems } from "../../mockData/statMockUp";

const StatSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the count up only once
    threshold: 0.3, // Adjust this value as needed
  });

  return (
    <Box py={{ xs: 6, sm: 6, lg: 8 }} bgcolor="grey.100">
      <Container maxWidth="lg">
        <Box textAlign="center" maxWidth="md" mx="auto">
          <Typography
            variant="h2"
            component="h2"
            fontWeight=""
            gutterBottom
            fontFamily={"btBrik"}
          >
            Season Updates
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </Typography>
        </Box>
        <Grid container spacing={0} mt={{ xs: 8, lg: 10 }} textAlign="center">
          {statItems.map((stat, index) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
              <Typography variant="h3" component="h3" fontWeight="bold">
                <Box
                  component="span"
                  ref={ref}
                  sx={{
                    background: "linear-gradient(to right, #111827, #dc004e)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    fontFamily:"btBrik",
                    padding:'10px',
                  }}
                >
                  {inView ? <CountUp end={stat.value} duration={3} start={0}/> : 0}
                </Box>
              </Typography>
              <Typography
                variant="h6"
                fontWeight="medium"
                fontFamily={"MontserratBold"}
                letterSpacing={"-0.5px"}
              >
                {stat.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatSection;
