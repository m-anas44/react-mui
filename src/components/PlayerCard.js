import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 85%, #7bbcf8 15%)`,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

const StyledCardMedia = styled(CardMedia)({
  borderRadius: '100%',
  padding: '0.5rem'
});

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.secondary.main,
}));

const PlayerCard = ({ player }) => {
  return (
    <StyledCard sx={{ minWidth: 165, border: '1px solid gray' }}>
      <StyledCardMedia
        component="img"
        image={player.player_image}
        alt={player.player_name}
      />
      <StyledCardContent>
        <Typography gutterBottom variant="h5" component="div"  sx={{color: '#d1d5db', fontFamily:'btBrik'}}>
          {player.player_name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{color: '#d1d5db', fontFamily:'MontserratMedium'}}>
          {player.player_age}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{color: '#d1d5db', fontFamily:'MontserratMedium'}}>
         {player.player_value}
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
};

export default PlayerCard;
