import React from "react";
import { Grid } from "@material-ui/core";
import Copyright from "./Copyright";
import SocialIcon from "./SocialIcon";

function Footer() {
  return (
    <Grid container spacing={2} justify="space-between">
      <Grid item>
        <Copyright />
      </Grid>
      <Grid item>
        <SocialIcon />
      </Grid>
    </Grid>
  );
}

export default Footer;
