import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube
} from "@material-ui/icons";
import { Button, Grid, makeStyles } from "@material-ui/core";

const styles = makeStyles(theme => ({
  icon: {
    color: theme.palette.primary.contrastText
  }
}))

function SocialIcon() {
  const classes = styles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Button
          component="a"
          href="https://www.facebook.com/Nepalese-Society-School-Texas-USA-104384784589240"
          target="_blank"
        >
          <Facebook className={classes.icon} />{" "}
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          component="a"
          href="https://www.twitter.com"
          target="_blank"
        >
          <Twitter className={classes.icon} />{" "}
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          component="a"
          href="https://www.instagram.com"
          target="_blank"
        >
          <Instagram className={classes.icon} />{" "}
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          component="a"
          href="https://www.youtube.com"
          target="_blank"
        >
          <YouTube color='primary' />{" "}
        </Button>
      </Grid>
    </Grid >
  );
}

export default SocialIcon;
