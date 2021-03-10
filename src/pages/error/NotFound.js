import React from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";

const styles = {
  container: {
    marginTop: 150,
  },
  button: {
    display: "flex",
    justifyContent: "center",
  },
};

function NotFound({ classes }) {
  return (
    <>
      <Grid container justify="center" className={classes.container}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography
                component="h2"
                variant="h2"
                align="center"
                color="textPrimary"
              >
                Oops
              </Typography>
              <Typography
                component="h6"
                variant="h6"
                align="center"
                color="primary"
              >
                404 - PAGE NOT FOUND
              </Typography>
              <Grid container justify="center" align="center">
                <Grid item xs={12} md={8}>
                  <Typography paragraph align="center">
                    Maybe the page you are looking for has been removed, or you
                    typed in the wrong URL
                  </Typography>
                  <Button
                    color="primary"
                    variant="contained"
                    align="center"
                    className={classes.button}
                  >
                    Go to homepage
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default withStyles(styles)(NotFound);
