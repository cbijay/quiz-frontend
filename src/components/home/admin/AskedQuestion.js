import {
  Card,
  CardContent,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";

const styles = {
  cardBody: {
    paddingBottom: "16px !important",
  },
};

function AskedQuestion({ questionCount, classes }) {
  return (
    <Card>
      <CardContent className={classes.cardBody}>
        <Grid container spacing={1}>
          <Grid zeroMinWidth item>
            <Typography>Total Number of Question Asked:</Typography>
          </Grid>
          <Grid item>
            <Typography>{questionCount}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(AskedQuestion);
