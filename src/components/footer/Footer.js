import React from "react";
import { Grid } from "@material-ui/core";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <Grid container justify="center">
      <Grid item>
        <Copyright />
      </Grid>
    </Grid>
  );
};

export default Footer;
