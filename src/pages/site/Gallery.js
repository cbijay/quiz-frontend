import { Button, Card, CardContent, Grid, makeStyles, Modal, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import CardHeading from '../../components/card/CardHeading'
import SiteLayout from '../../layouts/SiteLayout'

import Banner1 from "../../components/home/images/banner.jpg";
import Banner2 from "../../components/home/images/banner2.jpg";
import Banner3 from "../../components/home/images/banner3.jpg";
import Banner4 from "../../components/home/images/gallery1.jpg";
import Banner5 from "../../components/home/images/gallery2.jpg";
import Banner6 from "../../components/home/images/gallery3.jpg";
import Banner7 from "../../components/home/images/gallery4.jpg";
import Banner8 from "../../components/home/images/gallery5.jpg";
import Banner9 from "../../components/home/images/gallery6.jpg";
import Banner10 from "../../components/home/images/gallery7.jpg";

const styles = makeStyles(theme => ({
    image: {
        height: 300,
        width: 400,
        objectFit: 'cover',
        borderRadius: 3,
        cursor: 'pointer',
        [theme.breakpoints.down('md')]: {
            objectFit: 'contain',
            // height: 300,
            // width: 300,
            height: '100%',
            width: '100%',
        },
    },
    paper: {
        position: 'absolute',
        width: 'auto',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
    },
    modalImage: {
        height: 600,
        width: 900,
        objectFit: 'contain',
        borderRadius: 3,
        [theme.breakpoints.down('sm')]: {
            objectFit: 'contain',
            height: 400,
            width: 400,
        },
    },
    rootModal: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}))


const Gallery = () => {
    const classes = styles();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [image, setImage] = useState(null);
    const [images, setImages] = useState([
        { src: Banner1, description: 'This is Image Description' },
        { src: Banner2, description: 'This is Image Description' },
        { src: Banner3, description: 'This is Image Description' },
        { src: Banner4, description: 'This is Image Description' },
        { src: Banner5, description: 'This is Image Description' },
        { src: Banner6, description: 'This is Image Description' },
        { src: Banner7, description: 'This is Image Description' },
        { src: Banner8, description: 'This is Image Description' },
        { src: Banner9, description: 'This is Image Description' },
        { src: Banner10, description: 'This is Image Description' },
    ])
    const showMore = () => {
        setImages([...images, ...images])
    }

    const modalCloseHandler = () => {
        setImage(null)
        setIsModalOpen(!isModalOpen)
    }

    const modalHandler = (imgSrc) => {
        setIsModalOpen(!isModalOpen)
        setImage(imgSrc)
    }
    return (
        <SiteLayout>
            <Grid container>
                {
                    isModalOpen && (
                        <Modal
                            open={isModalOpen}
                            onClose={modalCloseHandler}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            className={classes.rootModal}
                        >
                            <div className={classes.paper}>
                                <img
                                    className={classes.modalImage}
                                    src={image}
                                    alt="hello"
                                />
                                <Typography variant='subtitle1' style={{ color: 'gray' }}>
                                    Photo Desription: {image.description}
                                </Typography>
                            </div>
                        </Modal>
                    )
                }
                <Grid item xs={12}>
                    <Card>
                        <CardHeading>Gallery</CardHeading>
                        <CardContent>
                            <Grid container spacing={4}>
                                {
                                    images.map((image, index) => (
                                        <Grid item xs={6} sm={6} lg={4} key={index}>
                                            <Card elevation={6}>
                                                <img
                                                    onClick={() => modalHandler(image.src)}
                                                    className={classes.image}
                                                    src={image.src}
                                                    alt="hello"
                                                />
                                                <Typography variant='subtitle1' style={{ color: 'gray' }}>
                                                    Photo Desription: {image.description}
                                                </Typography>
                                            </Card>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                            <Button
                                variant="contained"
                                color='primary'
                                style={{ marginTop: 30 }}
                                onClick={showMore}
                            >
                                VIEW MORE
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </SiteLayout>
    )
}

export default Gallery
