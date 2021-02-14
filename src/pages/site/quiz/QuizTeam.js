import React from "react";
import SiteLayout from "../../../layouts/SiteLayout";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import CardHeading from "../../../components/card/CardHeading";

function QuizTeam() {
  return (
    <SiteLayout>
      <Grid container>
        <Grid item xs={12}>
          <Card>
            <CardHeading>Quiz Team</CardHeading>
            <CardContent>
              <Typography component="p" variant="body1" color="textSecondary">
                Coming Soon...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </SiteLayout>
  );
}

export default QuizTeam;
