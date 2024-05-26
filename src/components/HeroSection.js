import React, { useRef } from "react";
import Carousel from "react-material-ui-carousel";
import {
  Paper,
  Typography,
  IconButton,
  Box,
  Chip,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ArrowBackIos, ArrowForwardIos, Visibility } from "@material-ui/icons";
import video from "../assets/video/cricket.mp4";
import "../index.css";
const items = [
  {
    type: "video",
    src: video,
    alt: "Video Slide 1",
    heading: "From one captain to another",
    date: "May 25, 2024",
    time: "2:30",
    views: "1.2M",
  },
  {
    type: "video",
    src: video,
    alt: "Video Slide 2",
    heading: "Maximum 'Impact', spins it like Shadab",
    date: "May 24, 2024",
    time: "3:00",
    views: "900K",
  },
  {
    type: "video",
    src: video,
    alt: "Video Slide 3",
    heading: "It's all on skills and mindset in finals",
    date: "May 23, 2024",
    time: "2:15",
    views: "1.5M",
  },
  {
    type: "video",
    src: video,
    alt: "Video Slide 4",
    heading: "One more step to glory",
    date: "May 22, 2024",
    time: "4:00",
    views: "800K",
  },
  {
    type: "video",
    src: video,
    alt: "Video Slide 5",
    heading: "Semifinal Qualifier 2 victory",
    date: "May 21, 2024",
    time: "2:45",
    views: "1.8M",
  },
];

const useStyles = makeStyles((theme) => ({
  carousel: {
    position: "relative",
    width: "100%",
    maxHeight: "500px",
    overflow: "hidden",
  },
  carouselItem: {
    position: "relative",
    height: "500px",
    [theme.breakpoints.down("sm")]: { height: "300px" },
    [theme.breakpoints.down("xs")]: { height: "200px" },
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  navButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    color: "white",
    zIndex: 2,
    "&:hover": { backgroundColor: "transparent" },
  },
  navButtonLeft: { left: "10px" },
  navButtonRight: { right: "10px" },
  indicators: { display: "none" },
  heading: {
    position: "absolute",
    bottom: "50px",
    left: "20px",
    zIndex: 2,
    color: "#fff",
    fontSize: "2.5rem",
    fontWeight: "bold",
    fontFamily: "btBrik",
    letterSpacing: "1.5px",
    fontWeight: 400,
    [theme.breakpoints.down("sm")]: { fontSize: "1rem" },
    [theme.breakpoints.down("xs")]: { fontSize: "0.8rem" },
  },
  badge: {
    position: "absolute",
    top: "20px",
    left: "20px",
    zIndex: 2,
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
    padding: "3px 8px", // Adjust padding for smaller badge
    borderRadius: "5px",
    fontSize: "0.7rem", // Decrease font size for smaller badge
    fontWeight: "bold",
    textTransform: "uppercase",
    [theme.breakpoints.down("xs")]: {
      padding: "2px 6px", // Further decrease padding for extra small screens
      fontSize: "0.6rem", // Further decrease font size for extra small screens
    },
  },
  details: {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    zIndex: 2,
    color: "#fff",
    display: "flex",
    alignItems: "center",
  },
  detailItem: {
    fontSize: "0.9rem",
    fontWeight: "bold",
    marginRight: "10px",
    color: "#fff",
  },
  divider: {
    height: "30px",
    borderRight: "2px solid rgba(255, 255, 255, 0.5)",
    margin: "0 10px",
  },
}));

const HeroSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.carousel}>
      <Carousel
        navButtonsAlwaysVisible
        indicators={false}
        interval={5000}
        NavButton={({ onClick, next }) => (
          <IconButton
            onClick={onClick}
            className={`${classes.navButton} ${
              next ? classes.navButtonRight : classes.navButtonLeft
            }`}
          >
            {next ? <ArrowForwardIos /> : <ArrowBackIos />}
          </IconButton>
        )}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

const Item = ({ item }) => {
  const classes = useStyles();
  const videoRef = useRef(null);

  const handleMouseEnter = () => videoRef.current && videoRef.current.play();
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Paper
      className={classes.carouselItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={classes.overlay}></div>
      {item.type === "video" ? (
        <video
          ref={videoRef}
          src={item.src}
          alt={item.alt}
          className={classes.video}
          loop
          muted
        />
      ) : (
        <img src={item.src} alt={item.alt} className={classes.img} />
      )}
      <Box sx={{ width: "50%" }} component={'div'}>
        <Chip label="Video" className={classes.badge} />
        <Typography className={classes.heading}>{item.heading}</Typography>
        <Box className={classes.details}>
          <Typography className={classes.detailItem}>{item.date}</Typography>
          <Divider
            className={classes.divider}
            orientation="vertical"
            flexItem
          />
          <Typography className={classes.detailItem}>{item.time}</Typography>
          <Divider
            className={classes.divider}
            orientation="vertical"
            flexItem
          />
          <Typography className={classes.detailItem}>{item.views}</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default HeroSection;
