import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import PlayerCard from "../PlayerCard";

const PlayerSection = ({ players }) => {
  return (
    <Box component={"section"}>
        <Typography variant="h3" component={'h3'} sx={{textAlign: 'center', fontFamily: 'btBrik'}} marginY={'2rem'}>Team Players</Typography>
      <Grid
        container
        spacing={{ xs: "0.2rem", sm: "0.5rem", md: "0.8rem", lg: "1rem" }}
        paddingX={{ xs: "0rem", md: "2rem", lg: "3rem" }}
        marginX={"auto"}
      >
        {players.map((player, index) => (
          <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
            <PlayerCard player={player} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PlayerSection;
