import React, { useRef, useState } from "react";
import Carousel from "react-material-ui-carousel";
import {
  Paper,
  Typography,
  IconButton,
  Box,
  Chip,
  Divider,
  Modal,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  ArrowBackIos,
  ArrowForwardIos,
  Visibility,
  AccessTime,
  Event,
  PlayCircleFilled,
  Close,
} from "@mui/icons-material";
import { items } from "../../mockData/heroMockUp";
import "../../index.css";

const PREFIX = "HeroSection";

const classes = {
  carousel: `${PREFIX}-carousel`,
  carouselItem: `${PREFIX}-carouselItem`,
  video: `${PREFIX}-video`,
  img: `${PREFIX}-img`,
  overlay: `${PREFIX}-overlay`,
  navButton: `${PREFIX}-navButton`,
  navButtonLeft: `${PREFIX}-navButtonLeft`,
  navButtonRight: `${PREFIX}-navButtonRight`,
  heading: `${PREFIX}-heading`,
  badge: `${PREFIX}-badge`,
  details: `${PREFIX}-details`,
  detailItem: `${PREFIX}-detailItem`,
  iconContainer: `${PREFIX}-iconContainer`,
  icon: `${PREFIX}-icon`,
  divider: `${PREFIX}-divider`,
  playButton: `${PREFIX}-playButton`,
  modal: `${PREFIX}-modal`,
  modalVideo: `${PREFIX}-modalVideo`,
  closeButton: `${PREFIX}-closeButton`,
};

const Root = styled("section")(({ theme }) => ({
  [`& .${classes.carousel}`]: {
    position: "relative",
    width: "100%",
    maxHeight: "600px",
    overflow: "hidden",
  },
  [`& .${classes.carouselItem}`]: {
    position: "relative",
    height: "600px",
    [theme.breakpoints.down("sm")]: { height: "300px" },
    [theme.breakpoints.down("xs")]: { height: "200px" },
    cursor: "pointer",
    "&:hover $playButton": {
      display: "none",
    },
  },
  [`& .${classes.video}`]: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  [`& .${classes.img}`]: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  [`& .${classes.overlay}`]: {
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
  [`& .${classes.navButton}`]: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    color: "white",
    zIndex: 2,
    "&:hover": { backgroundColor: "transparent" },
  },
  [`& .${classes.navButtonLeft}`]: { left: "10px" },
  [`& .${classes.navButtonRight}`]: { right: "10px" },
  [`& .${classes.heading}`]: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      top: "15rem",
      left: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
      top: "11rem",
      left: "20px",
    },
  },
  [`& .${classes.badge}`]: {
    [theme.breakpoints.down("sm")]: {
      padding: "1px 3px",
      fontSize: "0.6rem",
      top: "10px",
      left: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0",
      fontSize: "0.5rem",
      top: "10px",
      left: "10px",
    },
  },
  [`& .${classes.details}`]: {
    [theme.breakpoints.down("sm")]: { bottom: "60px", left: "30px" },
    [theme.breakpoints.down("xs")]: { bottom: "50px", left: "20px" },
  },
  [`& .${classes.detailItem}`]: {
    [theme.breakpoints.down("sm")]: { fontSize: "0.7rem", marginRight: "5px" },
    [theme.breakpoints.down("xs")]: { fontSize: "0.6rem", marginRight: "5px" },
  },
  [`& .${classes.iconContainer}`]: {
    display: "flex",
    alignItems: "center",
  },
  [`& .${classes.icon}`]: {
    marginRight: "5px",
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: { fontSize: "0.8rem" },
    [theme.breakpoints.down("xs")]: { fontSize: "0.7rem" },
  },
  [`& .${classes.divider}`]: {
    height: "30px",
    borderRight: "2px solid rgba(255, 255, 255, 0.5)",
    margin: "0 10px",
    [theme.breakpoints.down("sm")]: { height: "15px" },
    [theme.breakpoints.down("xs")]: { height: "10px" },
  },
  [`& .${classes.playButton}`]: {
    [theme.breakpoints.down("sm")]: { fontSize: "3rem" },
    [theme.breakpoints.down("xs")]: { fontSize: "2rem" },
  },
  [`& .${classes.modalVideo}`]: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      borderRadius: "0px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      borderRadius: "0px",
    },
  },
  [`& .${classes.closeButton}`]: {
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: "#fff",
  },
}));

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleOpen = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentVideo(null);
  };

  return (
    <Root>
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
          <Item key={i} item={item} handleOpen={handleOpen} />
        ))}
      </Carousel>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="video-modal-title"
        aria-describedby="video-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div>
          <IconButton
            className={classes.closeButton}
            style={{ position: "absolute", top: 3, right: 3, color: "#fff" }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <video
            src={currentVideo}
            className={classes.modalVideo}
            style={{
              width: "100%",
              maxHeight: "80vh",
              outline: "none",
              borderRadius: "10px",
            }}
            controls
            autoPlay
          />
        </div>
      </Modal>
    </Root>
  );
};

const Item = ({ item, handleOpen }) => {
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
      onClick={() => handleOpen(item.src)}
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
      <PlayCircleFilled
        className={classes.playButton}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "5rem",
          zIndex: 3,
          cursor: "pointer",
        }}
      />
      <Box component={"div"}>
        <Chip
          label="Video"
          className={classes.badge}
          sx={{
            position: "absolute",
            bottom: "10rem",
            left: "5rem",
            zIndex: 2,
            backgroundColor: "#dc004e",
            color: "#fff",
            padding: "3px 8px",
            borderRadius: "5px",
            fontSize: "0.7rem",
            fontWeight: "bold",
            fontFamily: "MontserratLight",
            textTransform: "uppercase",
          }}
        />
        <Typography
          className={classes.heading}
          sx={{
            position: "absolute",
            top: "30rem",
            left: "5rem",
            zIndex: 2,
            color: "secondary.main",
            fontSize: "2.5rem",
            fontWeight: "bold",
            fontFamily: "btBrik",
            letterSpacing: "1.5px",
          }}
        >
          {item.heading}
        </Typography>
        <Box
          className={classes.details}
          sx={{
            position: "absolute",
            bottom: "7.5rem",
            left: "5rem",
            zIndex: 2,
            color: "#f1f1f16e",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box className={classes.iconContainer}>
            <Event className={classes.icon} />
            <Typography
              className={classes.detailItem}
              sx={{
                fontSize: "0.9rem",
                fontWeight: "bold",
                fontFamily: "MontserratLight",
                letterSpacing: "1px",
                marginRight: "10px",
                color: "#f1f1f16e",
              }}
            >
              {item.date}
            </Typography>
          </Box>
          <Divider
            className={classes.divider}
            orientation="vertical"
            flexItem
          />
          <Box className={classes.iconContainer}>
            <AccessTime className={classes.icon} />
            <Typography
              className={classes.detailItem}
              sx={{
                fontSize: "0.9rem",
                fontWeight: "bold",
                fontFamily: "MontserratLight",
                letterSpacing: "1px",
                marginRight: "10px",
                color: "#f1f1f16e",
              }}
            >
              {item.time}
            </Typography>
          </Box>
          <Divider
            className={classes.divider}
            orientation="vertical"
            flexItem
          />
          <Box className={classes.iconContainer}>
            <Visibility className={classes.icon} />
            <Typography
              className={classes.detailItem}
              sx={{
                fontSize: "0.9rem",
                fontWeight: "bold",
                fontFamily: "MontserratLight",
                letterSpacing: "1px",
                marginRight: "10px",
                color: "#f1f1f16e",
              }}
            >
              {item.views}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default HeroSection;
