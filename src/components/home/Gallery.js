import React from 'react';
import { Container, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import {
    DoubleArrow as DoubleArrowIcon,
    ArrowBack as ArrowBackIcon,
    ArrowRightAlt as ArrowFrontIcon,
}
    from '@material-ui/icons';

import Banner1 from "./images/banner.jpg";
import Banner2 from "./images/banner2.jpg";
import Banner3 from "./images/banner3.jpg";
import Banner4 from "./images/gallery1.jpg";
import Banner5 from "./images/gallery2.jpg";
import Banner6 from "./images/gallery3.jpg";
import Banner7 from "./images/gallery4.jpg";
import Banner8 from "./images/gallery5.jpg";
import Banner9 from "./images/gallery6.jpg";
import Banner10 from "./images/gallery7.jpg";



const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 20,
    },
    container: {
        padding: 20,
        display: 'flex',
        overflowY: 'hidden',
        overflowX: 'scroll',
        backgroundColor: theme.palette.primary.main,
        borderRadius: 4,
        '&::-webkit-scrollbar': {
            display: 'none',
        }
    },
    bannerImage: {
        height: 300,
        width: 500,
        // objectFit: "contain",
        margin: 20,
        borderRadius: 5
    },
    headline: {
        color: 'gray',
        textAlign: 'center'
    },
    nextBtn: {
        height: 80,
        width: 80,
        margin: 'auto',
        padding: 20
    }
}));


const swipeLeftHandler = () => {

}

const Gallery = () => {
    const classes = useStyles();
    var items = [
        { image: `${Banner1}` },
        { image: `${Banner2}` },
        { image: `${Banner3}` },
        { image: `${Banner4}` },
        { image: `${Banner5}` },
        { image: `${Banner6}` },
        { image: `${Banner7}` },
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
                <Grid className={classes.container} >
                    <div className={classes.scrollBtn}>
                        <IconButton onClick={swipeLeftHandler}>
                            <ArrowBackIcon />
                        </IconButton>
                        <IconButton onClick={swipeLeftHandler}>
                            <ArrowFrontIcon />
                        </IconButton>
                    </div>
                    {items.map((item) => (
                        <img className={classes.bannerImage} src={item.image} alt="Image1" />
                    ))}
                    <IconButton className={classes.nextBtn}>
                        <DoubleArrowIcon />
                        View More
                    </IconButton>
                </Grid>
            </Container>
        </>
    );
}

export default Gallery
