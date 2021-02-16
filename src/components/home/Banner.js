import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";

import Banner2 from "./images/banner2.jpg";

const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginTop: 20
    },
    bannerImage: {
        height: 400,
        minWidth: 500,
        width: 1170,
        boxShadow: 'inset 100px 0px 100px black',
        '&:after': {
            content: '',
            background: 'radialGradient(transparent, black)'
        }
    },
    bannerContent: {
        position: 'absolute',
        top: 0,
        width: 1170,
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerText: {
        color: '#fff',
        opacity: 1,
        position: 'absolute',
    }
});

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
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Banner;
