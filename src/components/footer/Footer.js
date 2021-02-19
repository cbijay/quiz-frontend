import React from "react";
import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";
import Copyright from "./Copyright";
import SocialIcon from "./SocialIcon";
import { Link } from "react-router-dom";
import logo from "../../images/quiz_logo.png";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  Home as HomeIcon,
}
  from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 30,
    background: '#000062',
    color: theme.palette.default.main
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
      color: 'red'
    }
  }
}))

const Footer = () => {
  const classes = useStyles();
  return (

    <Grid className={classes.root}>
      <Grid
        container
        spacing={5}
        direction="row"
        justify="center"
        wrap="nowrap"
      >


        <Grid item xs={4} >
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
            <hr />

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
                    variant="h4"
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


        <Grid item xs={4}>
          <Typography variant="h4" color="initial" gutterBottom>Contact info</Typography>
          <Grid container>

            <Grid spacing={5} container>
              <Grid item xs={1}><EmailIcon /></Grid>
              <Grid item xs={8}>
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
              <Grid item xs={1}><PhoneIcon /></Grid>
              <Grid item xs={8}>
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
              <Grid item xs={1}><HomeIcon /></Grid>
              <Grid item xs={8}>
                <Typography className={classes.actionButton} gutterBottom>2914 Huntington Grove Square Alexandria, VA 22306</Typography>
                <Typography className={classes.actionButton} gutterBottom>912 Saratoga Way Coppell, TX 75019</Typography>
                <Typography className={classes.actionButton} gutterBottom>Treasurer Address: 15911 SW 68Th LN Miami, FL 33193-3623</Typography>
              </Grid>
            </Grid>

          </Grid>
        </Grid>


        <Grid item xs={2}>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant="h4" color="initial" gutterBottom>Quick Links</Typography>
              <Grid item>
                <Typography className={classes.quickLink} component={Link} to='/about'>About us</Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.quickLink} component={Link} to='/register'>Regsiter</Typography>
              </Grid>
              <Grid item>
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
    </Grid>
  );
}

export default Footer;
