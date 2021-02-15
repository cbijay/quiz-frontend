import React from "react";
import { Grid, Typography, Card, CardContent } from "@material-ui/core";
import principal from "../../images/principal_message.png";

function PrincipalMessage({ classes }) {
  return (
    <Grid container justify="center">
      <Grid item xs={12} lg={10}>
        <Typography
          component="h6"
          variant="h6"
          color="textSecondary"
          align="center"
          display="block"
          gutterBottom
        >
          MESSAGE FROM THE PRESIDENT
        </Typography>

        <Card>
          <CardContent className={classes.cardContent}>
            <Grid container spacing={2} justify="space-between">
              <Grid item xs={12} lg={6}>
                <img src={principal} alt="Principal Message" width="100%" />
              </Grid>
              <Grid item xs={12} lg={6}>
                <Typography component="h3" variant="h3">
                  Er Bijay Raj Bhattarai (Dallas, TX)
                </Typography>
                <Typography component="h5" variant="h5" gutterBottom>
                  President
                </Typography>
                <Typography paragraph>
                  <b>
                    Welcome to the home of the Association of Nepalis in the
                    Americas (ANA)!
                  </b>
                </Typography>
                <Typography paragraph>
                  It is a great privilege to be elected President for the next
                  term (January 2021-June 2023).
                </Typography>
                <Typography paragraph>
                  The Association of Nepalis in the Americas (ANA), established
                  in 1983, was the first large-scale Nepali community
                  organization in North America. Our mission is to unite the
                  North American Nepali diaspora and to foster Nepali identity
                  and culture. For the past 38 years, the ANA has actualized
                  this vision through numerous successful initiatives.{" "}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default PrincipalMessage;
