import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube
} from "@material-ui/icons";
import { Button, Grid } from "@material-ui/core";

function SocialIcon() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Button
          component="a"
          href="https://www.facebook.com/Nepalese-Society-School-Texas-USA-104384784589240"
          target="_blank"
        >
          <Facebook color='secondary' />{" "}
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          component="a"
          href="https://www.twitter.com"
          target="_blank"
        >
          <Twitter color='secondary' />{" "}
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          component="a"
          href="https://www.instagram.com"
          target="_blank"
        >
          <Instagram color='secondary' />{" "}
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
