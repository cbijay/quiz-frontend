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
        height: 400,
        'img &': {
            objectFit: 'contain'
        }
    }
})

const Banner = (props) => {
    const classes = useStyles()
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image: `${Banner1}`
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: `${Banner2}`
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
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