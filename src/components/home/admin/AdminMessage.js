import {
  Card,
  CardContent,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";
import theme from "../../../styles/theme";

const styles = {
  cardContainer: {
    background: theme.palette.secondary.main,
    color: "#fff !important",
  },
  cardBody: {
    paddingBottom: "16px !important",
  },
  newsTicker: {
    backgroundColor: "transparent !important",
  },
};

function AdminMessage({ messages, classes }) {
  return (
    <Card className={classes.cardContainer}>
      <CardContent className={classes.cardBody}>
        {messages.length > 0 ? (
          <Grid container spacing={1}>
            <Grid zeroMinWidth item>
              <Typography>Messages:</Typography>
            </Grid>
            <Grid item>{messages.map(({ description }) => description)}</Grid>
          </Grid>
        ) : (
          <Typography>No message!!</Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(AdminMessage);
