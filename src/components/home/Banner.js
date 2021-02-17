import React from "react";
import { Button, Container, makeStyles, Typography } from "@material-ui/core";

import Banner2 from "./images/banner.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    bannerImage: {
        objectFit: 'cover',
        width: '87vw',
        height: '35vw',
        boxShadow: 'inset 100px 0px 100px black',
        [theme.breakpoints.down('sm')]: {
            objectFit: 'cover',
            width: '90vw',
            height: '70vw',
        }
    },
    bannerContent: {
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        right: 0,
        left: 0,
        top: 0,
        width: '87vw',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            width: '90vw',
        }
    },
    bannerText: {
        color: '#fff',
        opacity: 1,
        position: 'absolute',
        [theme.breakpoints.down('sm')]: {
            fontSize: 20
        }
    },
    bannerButton: {
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            fontSize: 12
        },
        marginTop: 120
    }
}));

const Banner = (props) => {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth="lg" className={classes.root}>
                <div className={classes.carouselImage}>
                    <img className={classes.bannerImage} src={Banner2} alt="Banner1" />
                    <div className={classes.bannerContent}>
                        <Typography variant="h4" className={classes.bannerText} align="center">
                            Nepalese Society of Texas Community School.
                        </Typography>
                        <Link to="/about">
                            <Button variant='contained' color='primary' className={classes.bannerButton}>
                                LEARN MORE
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Banner;
