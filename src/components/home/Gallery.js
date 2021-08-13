import React, { useRef } from "react";
import {
  Button,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  DoubleArrow as DoubleArrowIcon,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowFrontIcon,
} from "@material-ui/icons";

import Banner1 from "./images/banner.jpg";
import Banner3 from "./images/banner3.jpg";
/* import Banner4 from "./images/gallery1.jpg";
import Banner5 from "./images/gallery2.jpg";
import Banner6 from "./images/gallery3.jpg";
import Banner7 from "./images/gallery4.jpg"; */
import Banner8 from "./images/gallery5.jpg";
import Banner9 from "./images/gallery6.jpg";
import Banner10 from "./images/gallery7.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    position: "relative",
  },
  container: {
    display: "flex",
    overflowY: "hidden",
    overflowX: "scroll",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 4,
    paddingTop: 30,
    scrollBehavior: "smooth",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  bannerImage: {
    height: 300,
    width: 500,
    margin: 10,
    borderRadius: 5,
  },
  headline: {
    color: "gray",
    textAlign: "center",
  },
  viewMoreBtn: {
    width: 125,
    padding: 10,
  },
  scrollBtn: {
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
    marginLeft: 0,
    marginRight: 0,
    top: 30,
    left: 0,
    right: 0,
    padding: (0, 20),
  },
  arrow: {
    color: theme.palette.primary.contrastText,
  },
}));

const Gallery = () => {
  const classes = useStyles();
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  var items = [
    { image: `${Banner1}` },
    { image: `${Banner3}` },
    /* { image: `${Banner4}` },
    { image: `${Banner5}` },
    { image: `${Banner6}` },
    { image: `${Banner7}` }, */
    { image: `${Banner8}` },
    { image: `${Banner9}` },
    { image: `${Banner10}` },
  ];

  return (
    <>
      <Container maxWidth="lg" className={classes.root}>
        <Typography variant="h3" color="initial" className={classes.headline}>
          Gallery
        </Typography>
        <div className={classes.bottomBorder}></div>
        <div className={classes.scrollBtn}>
          <IconButton onClick={() => scroll(-100)}>
            <ArrowBackIcon className={classes.arrow} />
          </IconButton>
          <IconButton onClick={() => scroll(100)}>
            <ArrowFrontIcon className={classes.arrow} />
          </IconButton>
        </div>
        <Grid className={classes.container} ref={ref}>
          {items.map((item, index) => (
            <img
              key={index}
              className={classes.bannerImage}
              src={item.image}
              alt="Image1"
            />
          ))}
          <Link
            to="/gallery"
            style={{ margin: "auto", textDecoration: "none" }}
          >
            <Button
              className={classes.viewMoreBtn}
              variant="contained"
              size="small"
            >
              <DoubleArrowIcon />
              <Typography style={{ textDecoration: "none", color: "black" }}>
                View More
              </Typography>
            </Button>
          </Link>
        </Grid>
      </Container>
    </>
  );
};

export default Gallery;
