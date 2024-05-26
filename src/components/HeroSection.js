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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  ArrowBackIos,
  ArrowForwardIos,
  Visibility,
  AccessTime,
  Event,
  PlayCircleFilled,
  Close,
} from "@material-ui/icons";
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
    cursor: "pointer",
    "&:hover $playButton": {
      display: "none",
    },
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
    bottom: "4rem",
    left: "5rem",
    zIndex: 2,
    color: "#fff",
    fontSize: "2.5rem",
    fontWeight: "bold",
    fontFamily: "btBrik",
    letterSpacing: "1.5px",
    [theme.breakpoints.down("sm")]: { fontSize: "1rem", bottom: "25px", left: "30px" },
    [theme.breakpoints.down("xs")]: { fontSize: "0.8rem", bottom: "20px", left: "20px" },
  },
  badge: {
    position: "absolute",
    bottom: "10rem",
    left: "5rem",
    zIndex: 2,
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
    padding: "3px 8px",
    borderRadius: "5px",
    fontSize: "0.7rem",
    fontWeight: "bold",
    fontFamily: 'MontserratLight',
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      padding: "1px 3px",
      fontSize: "0.6rem",
      top: "10px",
      left: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "1px 3px",
      fontSize: "0.6rem",
      top: "10px",
      left: "10px",
    },
  },
  details: {
    position: "absolute",
    bottom: "7.5rem",
    left: "5rem",
    zIndex: 2,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: { bottom: "50px", left: "30px" },
    [theme.breakpoints.down("xs")]: { bottom: "40px", left: "20px" },
  },
  detailItem: {
    fontSize: "0.9rem",
    fontWeight: "bold",
    fontFamily: 'MontserratLight',
    letterSpacing:'1px',
    marginRight: "10px",
    color: "#fff",
    [theme.breakpoints.down("sm")]: { fontSize: "0.7rem", marginRight: "5px" },
    [theme.breakpoints.down("xs")]: { fontSize: "0.6rem", marginRight: "5px" },
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: "5px",
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: { fontSize: "0.8rem" },
    [theme.breakpoints.down("xs")]: { fontSize: "0.7rem" },
  },
  divider: {
    height: "30px",
    borderRight: "2px solid rgba(255, 255, 255, 0.5)",
    margin: "0 10px",
    [theme.breakpoints.down("sm")]: { height: "15px" },
    [theme.breakpoints.down("xs")]: { height: "10px" },
  },
  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "5rem",
    zIndex: 3,
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: { fontSize: "3rem" },
    [theme.breakpoints.down("xs")]: { fontSize: "2rem" },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(5px)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalVideo: {
    width: "100%",
    maxHeight: "80vh",
    outline: "none",
    borderRadius: '10px',
    [theme.breakpoints.down("sm")]: { width: "100%",borderRadius: '0' },
    [theme.breakpoints.down("xs")]: { width: "100%",borderRadius: '0' },
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: "#fff",
  },
}));

const HeroSection = () => {
  const classes = useStyles();
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
          <Item key={i} item={item} handleOpen={handleOpen} />
        ))}
      </Carousel>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        aria-labelledby="video-modal-title"
        aria-describedby="video-modal-description"
      >
        <div>
          <IconButton
            className={classes.closeButton}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <video
            src={currentVideo}
            className={classes.modalVideo}
            controls
            autoPlay
          />
        </div>
      </Modal>
    </div>
  );
};

const Item = ({ item, handleOpen }) => {
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
      <PlayCircleFilled className={classes.playButton} />
      <Box component={"div"}>
        <Chip label="Video" className={classes.badge} />
        <Typography className={classes.heading}>{item.heading}</Typography>
        <Box className={classes.details}>
          <Box className={classes.iconContainer}>
            <Event className={classes.icon} />
            <Typography className={classes.detailItem}>{item.date}</Typography>
          </Box>
          <Divider className={classes.divider} orientation="vertical" flexItem />
          <Box className={classes.iconContainer}>
            <AccessTime className={classes.icon} />
            <Typography className={classes.detailItem}>{item.time}</Typography>
          </Box>
          <Divider className={classes.divider} orientation="vertical" flexItem />
          <Box className={classes.iconContainer}>
            <Visibility className={classes.icon} />
            <Typography className={classes.detailItem}>{item.views}</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default HeroSection;
