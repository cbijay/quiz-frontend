import { Card, CardContent, Grid, makeStyles, Modal, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import CardHeading from '../../components/card/CardHeading'
import SiteLayout from '../../layouts/SiteLayout';
import { images } from './Images'

const styles = makeStyles(theme => ({
    image: {
        height: 300,
        width: 400,
        objectFit: 'cover',
        borderRadius: 3,
        cursor: 'pointer',
        [theme.breakpoints.down('md')]: {
            objectFit: 'contain',
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


    const modalCloseHandler = () => {
        setImage(null)
        setIsModalOpen(!isModalOpen)
    }

    const modalHandler = (imageIndex) => {
        setIsModalOpen(!isModalOpen)
        setImage(imageIndex)
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
                                    src={images[image].src}
                                    alt="hello"
                                />
                                <Typography variant='subtitle1' style={{ color: 'gray' }}>
                                    {/* only show when valid description is added */}
                                    {/* Photo Desription: {images[image].description} */}
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
                                                    onClick={() => modalHandler(index)}
                                                    className={classes.image}
                                                    src={image.src}
                                                    alt="hello"
                                                />
                                                <Typography variant='subtitle1' style={{ color: 'gray' }}>
                                                    {/* only show when valid description is added */}
                                                    {/* Photo Desription: {image.description} */}
                                                </Typography>
                                            </Card>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </SiteLayout>
    )
}

export default Gallery
