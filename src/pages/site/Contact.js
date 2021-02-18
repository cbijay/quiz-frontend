import {
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    makeStyles,
    TextField,
    Typography
} from '@material-ui/core';
import React from 'react';
import CardHeading from '../../components/card/CardHeading';
import SiteLayout from '../../layouts/SiteLayout';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const styles = makeStyles({
    rightCard: {
        backgroundColor: '#ededeb',
        width: 500,
        height: 300,
        borderRadius: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    rightCardHeadline: {
        textAlign: 'center',
    },
    rightCardParagraph: {
        color: 'grey',
        textAlign: 'center',
    },
    formHeader: {
        color: 'grey'
    }
})

const Contact = () => {
    const classes = styles();
    const { register, handleSubmit, errors } = useForm();

    const submitHandler = (data) => {
        const { subject, name, message } = data;
        window.location.href =
            `mailto:school@ournst.org?subject=${subject}&body=Hi, I am ${name},${message}`;
    }

    return (
        <SiteLayout>
            <Container maxWidth='lg'>
                <Grid item xs={12}>
                    <Card>
                        <CardHeading>
                            CONTACT US
                        </CardHeading>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Typography component='h4' variant='h4' className={classes.formHeader} align="center">
                                        Submit any queries
                                    </Typography>
                                    <form onSubmit={handleSubmit(submitHandler)}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <TextField
                                                    id="standard-basic"
                                                    fullWidth
                                                    label="Name"
                                                    name="name"
                                                    inputRef={register({ required: "Name is required" })}
                                                    error={!!errors.name}
                                                    helperText={!!errors.name ? errors.name.message : ""}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    id="standard-basic"
                                                    label="Email"
                                                    fullWidth
                                                    type='email'
                                                    name="email"
                                                    inputRef={register({ required: "Email is required" })}
                                                    error={!!errors.email}
                                                    helperText={!!errors.email ? errors.email.message : ""}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    id="standard-basic"
                                                    label="Subject"
                                                    fullWidth
                                                    name='subject'
                                                    inputRef={register({ required: "Subject is required" })}
                                                    error={!!errors.subject}
                                                    helperText={!!errors.subject ? errors.subject.message : ""}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    id="standard-basic"
                                                    label="Message"
                                                    fullWidth
                                                    name="message"
                                                    inputRef={register({ required: "Message is required" })}
                                                    error={!!errors.message}
                                                    helperText={!!errors.message ? errors.message.message : ""}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button type="submit" fullWidth variant='contained' color="primary">Submit</Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                                <Grid item xs={12} md={6} container justify="center">
                                    <Card elevation={1} className={classes.rightCard}>
                                        <Typography variant="h3" className={classes.rightCardHeadline}>Register for Quiz</Typography>
                                        <Typography variant="subtitle1" component="p" className={classes.rightCardParagraph}>
                                            NST will award the winning team members with brand new laptops, trophies and other items in the Nepali New Year program.
                                        </Typography>
                                        <Link to='/quiz/application-form' style={{ textDecoration: 'none' }}>
                                            <Button variant="outlined" color="primary">
                                                Register Now
                                            </Button>
                                        </Link>
                                    </Card>
                                </Grid>
                            </Grid>
                            {/* <form noValidate onSubmit={handleSubmit(submitHandler)}>
                            </form> */}
                        </CardContent>
                    </Card>
                </Grid>
            </Container>
        </SiteLayout>
    )
}

export default Contact;
