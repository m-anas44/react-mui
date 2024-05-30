import React from "react";
import { Box, Typography, Paper, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import "../index.css";

const Card = styled(Paper)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 79%, #7bbcf8 21%)`,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minHeight: "200px",
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "1rem", // Adjusted font size for better readability
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
  [theme.breakpoints.up("xs")]: {
    padding: "4px",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "0 1rem",
  },
}));

const LocationText = styled(Typography)(({ theme }) => ({
  color: "#7bbcf8",
  fontFamily: "MontserratMedium",
  marginBottom: theme.spacing(1), 
  maxWidth:'90%',
}));

const TimeInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#d1d5db",
  marginTop: '10px'
}));

const MatchCard = ({ match }) => {
  const { title, subtitle, teams, time, date, location } = match;

  return (
    <Card>
      <Box>
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
        flexDirection={{ xs: 'column', sm: 'row'}}
      >
        <TeamInfo sx={{ flexGrow: 1 }}>
          <TeamName>
            <TeamFlag src={teams[0].flagSrc} alt={`${teams[0].name} Flag`} />
            {teams[0].name}
          </TeamName>
        </TeamInfo>
        <VsBlock >vs</VsBlock>
        <TeamInfo sx={{ flexGrow: 1 }}>
          <TeamName>
            <TeamFlag src={teams[1].flagSrc} alt={`${teams[1].name} Flag`} />
            {teams[1].name}
          </TeamName>
        </TeamInfo>
      </Box>
      <LocationText variant="body2">Live from {location}</LocationText>
      <Divider sx={{borderWidth: '1px', borderColor: '#7bbcf8'}} />
      <TimeInfo>
        <Typography fontFamily='MontserratMedium'>{date}</Typography>
        <Typography fontFamily='MontserratMedium' color={'#111827'} fontSize={{xs: '13px', sm: '16px'}}>{time}</Typography>
      </TimeInfo>
    </Card>
  );
};

export default MatchCard;
