import React from "react";
import SiteLayout from "../../../layouts/SiteLayout";
import { Card, CardContent, Grid } from "@material-ui/core";
import CardHeading from "../../../components/card/CardHeading";
import DocViewer from "../../../components/doc/DocViewer";
import doc from "../../../quiz_application.pdf";

function ApplicationForm() {
  return (
    <SiteLayout>
      <Grid container>
        <Grid item xs={12}>
          <Card>
            <CardHeading>Quiz Contest (2021) Application Form</CardHeading>
            <CardContent>
              <DocViewer source={doc} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </SiteLayout>
  );
}

export default ApplicationForm;
