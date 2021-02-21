import {
  Card,
  CardContent,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";
import Marquee from "react-double-marquee";
import theme from "../../../styles/theme";

const styles = {
  cardContainer: {
    background: theme.palette.secondary.main,
    color: "#fff !important",
  },
  cardBody: {
    paddingBottom: "16px !important",
  },
};

function AdminMessage({ messages, classes }) {
  return (
    <Card className={classes.cardContainer}>
      <CardContent className={classes.cardBody}>
        <Grid container spacing={1}>
          <Grid zeroMinWidth item>
            <Typography>Messages:</Typography>
          </Grid>
          <Grid item>
            <Marquee direction="left" delay={500}>
              {messages.map(({ description }, index) => (
                <Typography component="span" variant="body1" key={index}>
                  {description}
                </Typography>
              ))}
            </Marquee>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(AdminMessage);
