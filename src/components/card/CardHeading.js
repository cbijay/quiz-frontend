import React from "react";
import { Typography, Divider, withStyles } from "@material-ui/core";
import theme from "../../styles/theme";

const styles = () => ({
  heading: {
    padding: theme.spacing(1, 2),
  },
});

function CardHeading({ children, classes }) {
  return (
    <>
      <Typography
        component="h5"
        variant="h6"
        color="primary"
        noWrap
        className={classes.heading}
      >
        {children}
      </Typography>
      <Divider />
    </>
  );
}

export default withStyles(styles)(CardHeading);
