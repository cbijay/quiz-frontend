import React from "react";
import { Avatar, Grid, makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import Copyright from "./Copyright";
import SocialIcon from "./SocialIcon";
import { Link } from "react-router-dom";
import logo from "../../images/quiz_logo.png";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  Home as HomeIcon,
  Room as RoomIcon,
}
  from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 30,
    background: '#000062',
    color: theme.palette.default.main,
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: theme.palette.default.main,
  },
  logo: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  actionButton: {
    color: theme.palette.default.main,
    textDecoration: 'none',
    marginTop: 5,
  },
  quickLink: {
    color: theme.palette.default.main,
    margin: (5, 0),
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.secondary.main
    }
  }
}))

const Footer = () => {
  const classes = useStyles();

  //returns true if screen-width is smaller than 600px
  const small = useMediaQuery('(max-width:600px)');

  return (

    <Grid className={classes.root} >
      <Grid
        container
        spacing={5}
        direction={small ? "column" : "row"}
        justify="center"
      >


        <Grid item xs={12} md={4}>
          <Grid container justify='space-between'>
            <Typography gutterBottom variant="h4" color="initial">Vision</Typography>
            <Typography
              component="p"
              variant="subtitle1"
              color="inherit"
              gutterBottom
              className={classes.title}
            >
              Aiming to promote Nepalese culture and heritage, Nepalese Society, Texas (NST) has been involved in different community programs. One of them is the school, KG thru 12 grade.
              </Typography>

            <Grid container alignItems='center' spacing={2}>
              <Grid item>
                <Link to="/" className={classes.title}>
                  <Avatar
                    alt="Nepalese Society of Texas School"
                    src={logo}
                    className={classes.logo}
                  />
                </Link>
              </Grid>

              <Grid item>
                <Link to="/" className={classes.title}>
                  <Typography
                    component="h1"
                    variant={small ? 'subtitle1' : 'h4'}
                    color="inherit"
                    noWrap
                  >
                    NST SCHOOL QUIZ
                  </Typography>
                </Link>
              </Grid>

            </Grid>

          </Grid>
        </Grid>


        <Grid item xs={12} md={4}>
          <Typography variant="h4" color="initial" gutterBottom>Contact info</Typography>
          <Grid container>

            <Grid spacing={5} container>
              <Grid item xs={2} md={1}><EmailIcon /></Grid>
              <Grid item xs={10} md={8}>
                <Typography
                  key="Email"
                  component="a"
                  href="mailto:school@ournst.org"
                  className={classes.actionButton}
                >
                  school@ournst.org
                </Typography>
              </Grid>
            </Grid>

            <Grid spacing={5} container>
              <Grid item xs={2} md={1}><PhoneIcon /></Grid>
              <Grid item xs={10} md={8}>
                <Typography
                  key="Email"
                  component="a"
                  href="tel:123-456-7890"
                  className={classes.actionButton}
                >
                  +1 972-514-7131
                </Typography>
              </Grid>
            </Grid>

            <Grid spacing={5} container>
              <Grid item xs={2} md={1}><HomeIcon /></Grid>
              <Grid item xs={10} md={8}>
                <Typography className={classes.actionButton} gutterBottom><RoomIcon />  2914 Huntington Grove Square Alexandria, VA 22306</Typography>
                <Typography className={classes.actionButton} gutterBottom><RoomIcon /> 912 Saratoga Way Coppell, TX 75019</Typography>
                <Typography className={classes.actionButton} gutterBottom> <RoomIcon /> Treasurer Address: 15911 SW 68Th LN Miami, FL 33193-3623</Typography>
              </Grid>
            </Grid>

          </Grid>
        </Grid>


        <Grid item xs={12} md={3}>
          <Grid container direction='column'>
            <Typography variant="h4" color="initial" gutterBottom>Quick Links</Typography>
            <Grid item container spacing={2}>
              <Grid item xs={4} sm={4} md={12}>
                <Typography className={classes.quickLink} component={Link} to='/about'>About us</Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={12}>
                <Typography className={classes.quickLink} component={Link} to='/register'>Regsiter</Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={12}>
                <Typography className={classes.quickLink} component={Link} to='/about'>About us</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <SocialIcon />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Copyright />
    </Grid >
  );
}

export default Footer;
