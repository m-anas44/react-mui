import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import "../../index.css";
const Section = styled(Box)(({ theme }) => ({
  backgroundColor: "#f4f5f7",
  padding: theme.spacing(8, 0),
}));

const TitleBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1, 2),
  display: "inline-block",
  color: "#ffffff",
  marginBottom: theme.spacing(2),
  borderRadius: "5px",
}));

const MissionTitle = styled(Typography)({
  fontWeight: "bold",
  fontFamily: "MontserratBold",
  letterSpacing: "-0.5px",
});

const ReadMoreButton = styled(Button)(({ theme }) => ({
  fontWeight: "bold",
  marginTop: theme.spacing(2),
  color: theme.palette.primary.main,
  fontFamily: "MontserratMedium",
  textTransform: "uppercase",
}));

const MissionSection = () => {
  return (
    <Section>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" p={{ xs: 0, lg: 3 }}>
          <Grid item xs={12} md={6}>
            <TitleBox>
              <MissionTitle variant="h6">Our Mission</MissionTitle>
            </TitleBox>
            <Typography
              variant="body1"
              paragraph
              fontFamily={"MontserratLight"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed non risus. Suspendisse lectus tortor,
              dignissim sit amet, adipiscing nec, ultricies sed, dolor.
            </Typography>
            <ReadMoreButton>Read more &gt;</ReadMoreButton>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://via.placeholder.com/400x300" // Replace with the actual image URL
              alt="Mission"
              sx={{ width: "100%", borderRadius: 1 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default MissionSection;
