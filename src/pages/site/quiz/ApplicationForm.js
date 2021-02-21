import React from "react";
import SiteLayout from "../../../layouts/SiteLayout";
import { Button, Card, CardContent, Grid } from "@material-ui/core";
import CardHeading from "../../../components/card/CardHeading";
import DocViewer from "../../../components/doc/DocViewer";
import doc from "../../../quiz_application.pdf";
import { Link } from "react-router-dom";

function ApplicationForm() {
  return (
    <SiteLayout>
      <Grid container>
        <Grid item xs={12}>
          <Card>
            <CardHeading>Quiz Contest (2021) Application Form</CardHeading>

            <Grid container justify='center'>
              <Link to='/register' style={{ textDecoration: 'none', marginTop: 20 }}>
                <Button
                  color='primary'
                  variant='contained'
                >
                  Apply online
                </Button>
              </Link>
            </Grid>

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
