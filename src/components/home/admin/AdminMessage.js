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
  messageText: {
    lineHeight: 1.8,
    marginRight: 150,
  },
};

function AdminMessage({ messages, classes }) {
  return (
    <Card className={classes.cardContainer}>
      <CardContent className={classes.cardBody}>
        {messages.length > 0 ? (
          <Grid container spacing={1}>
            <Grid zeroMinWidth item xs={12} md={2}>
              <Typography>Messages:</Typography>
            </Grid>
            <Grid item xs={12} md={10}>
              {/*eslint-disable-next-line*/}
              <marquee behavior="scroll" direction="left">
                {messages.map(({ description }) => (
                  <span className={classes.messageText}>
                    {description + " "}
                  </span>
                ))}
              </marquee>
            </Grid>
          </Grid>
        ) : (
          <Typography>No message!!</Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(AdminMessage);
