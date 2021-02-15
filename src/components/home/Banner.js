import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Grid, makeStyles } from '@material-ui/core';

import Banner1 from './images/banner.jpg'
import Banner2 from './images/banner2.jpg'
import Banner3 from './images/banner3.jpg'

const useStyles = makeStyles({
    root: {
        // width: '100vw',
    },
    carouselImage: {
        height: 600,
        width: '100%',
        objectFit: 'contain',
        'img &': {
            objectFit: 'contain'
        }
    }
})

const Banner = (props) => {
    const classes = useStyles()
    var items = [
        {
            name: "Image 1 Baby Girls greeting",
            description: "Hello Everyone Namaste!, Welcome to our community...",
            image: `${Banner1}`
        },
        {
            name: "Blood Donation group photos of some great personality",
            description: "Donate blood, save lives!",
            image: `${Banner2}`
        },
        {
            name: "Yoga Event Banner",
            description: "Join our Yoga community and stay healthy with every aspect of life...",
            image: `${Banner3}`
        }
    ]

    return (
        <>
            <Grid xs={12}>
                <Carousel className={classes.root} showArrows={true}>
                    {
                        items.map(item => (
                            <div className={classes.carouselImage}>
                                <img src={item.image} alt='Banner1' key={item.name} />
                                <p className="legend">{item.description}</p>
                            </div>
                        ))
                    }
                </Carousel>
            </Grid>
        </>
    )
}

export default Banner