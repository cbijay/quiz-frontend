import {
    Button,
    Card,
    CardContent,
    Grid,
    TextField
} from '@material-ui/core';
import React from 'react';
import CardHeading from '../../components/card/CardHeading';
import SiteLayout from '../../layouts/SiteLayout';
import { useForm } from "react-hook-form";


const submitHandler = (data) => {
    const { subject, name, message } = data;
    window.location.href =
        `mailto:mail@mail.com?subject=${subject}&body=Hi, I am ${name},${message}`;
}

const Contact = () => {
    const { register, handleSubmit, errors } = useForm();
    return (
        <SiteLayout>
            <Grid container justify="center">
                <Grid item xs={12} lg={10}>
                    <Card>
                        <CardHeading>Contact</CardHeading>
                        <CardContent>
                            <form noValidate onSubmit={handleSubmit(submitHandler)}>
                                <Grid container item justify="center" spacing={2} xs={12} md={4}>
                                    <Grid item xs={6}>
                                        <TextField
                                            id="standard-basic"
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
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </SiteLayout>
    )
}

export default Contact;
