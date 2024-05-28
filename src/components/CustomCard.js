import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import "../index.css";

export default function CustomCard(props) {
  return (
    <Card sx={{ maxWidth: 345, mx: "auto", display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardMedia
        component="img"
        alt={props.heading}
        height="140"
        image={props.image}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          fontFamily={"MontserratMedium"}
          letterSpacing={-1}
        >
          {props.heading}
        </Typography>
        <Divider sx={{ borderBottomWidth: 1.5, marginBottom: 1 }} />
        <Typography
          variant="body2"
          color="text.secondary"
          fontFamily={"MontserratLight"}
          letterSpacing={1}
        >
          {props.uploadTime}
        </Typography>
      </CardContent>
    </Card>
  );
}
