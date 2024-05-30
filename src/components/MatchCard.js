import React from "react";
import { Box, Typography, Paper, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import "../index.css";

const Card = styled(Paper)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 79%, #7bbcf8 21%)`,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  minWidth: '350px',
  minHeight: "200px",
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "0.75rem",
  fontFamily: "MontserratMedium",
  fontWeight: "bold",
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "0.875rem",
  fontFamily: "MontserratLight",
  fontWeight: "100",
}));

const TeamInfo = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: "#efefef",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "center",
}));

const TeamName = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontFamily: "btBrik",
  fontWeight: 300,
}));

const TeamFlag = styled("img")({
  width: 24,
  height: 24,
  marginRight: 8,
});

const VsBlock = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#dc004e",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 12px",
  color: theme.palette.secondary.main,
}));

const MatchCard = ({ match }) => {
  const { title, subtitle, teams, time, date, location } = match;

  return (
    <Card>
      <Box mb={1}>
        <Title>{title}</Title>
        <Subtitle variant="h6">{subtitle}</Subtitle>
      </Box>
      <Divider />
      <Box
        my={2}
        sx={{
          display: "flex",
          textAlign: "center",
          gap: "0.5rem",
        }}
      >
        <TeamInfo sx={{ flexGrow: 1 }}>
          <TeamName>
            <TeamFlag src={teams[0].flagSrc} alt={`${teams[0].name} Flag`} />
            {teams[0].name}
          </TeamName>
        </TeamInfo>
        <VsBlock>vs</VsBlock>
        <TeamInfo sx={{ flexGrow: 1 }}>
          <TeamName>
            <TeamFlag src={teams[1].flagSrc} alt={`${teams[1].name} Flag`} />
            {teams[1].name}
          </TeamName>
        </TeamInfo>
      </Box>
      <Box>
        <Typography
          sx={{
            color: "#7bbcf8",
            fontFamily: "MontserratMedium",
            marginBottom: "3px",
            maxWidth:'20rem',
          }}
        >
          Live from {location}
        </Typography>
      </Box>
      <Divider sx={{ borderColor: "#7bbcf8", marginBottom: '6px' }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "0.5rem",
          color: "#d1d5db",
          mt: "auto",
        }}
      >
        <Typography fontFamily="MontserratMedium">{date}</Typography>
        <Typography
          fontFamily="MontserratBold"
          color={"#111827"}
          fontSize={"15px"}
        >
          {time}
        </Typography>
      </Box>
    </Card>
  );
};

export default MatchCard;
