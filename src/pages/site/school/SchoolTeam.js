import React from "react";
import SiteLayout from "../../../layouts/SiteLayout";
import { Card, CardContent, Grid } from "@material-ui/core";
import CardHeading from "../../../components/card/CardHeading";
import team from "../../../images/school_team.jpg";

function SchoolTeam() {
  return (
    <SiteLayout>
      <Grid container>
        <Grid item xs={12}>
          <Card>
            <CardHeading>School Team</CardHeading>
            <CardContent>
              <img src={team} alt="School Team" width="100%" height="100%" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </SiteLayout>
  );
}

export default SchoolTeam;
