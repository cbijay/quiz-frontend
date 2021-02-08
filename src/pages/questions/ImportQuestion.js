import React from "react";
import AppLayout from "../../layouts/AppLayout";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  withStyles,
} from "@material-ui/core";
import QuestionImportForm from "../../components/forms/QuestionImportForm";

const styles = () => ({
  divider: {
    marginBottom: 10,
  },
});

function ImportQuestion({ match, classes }) {
  const topicId = match.params.topicId;

  return (
    <AppLayout>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <Card>
            <CardContent>
              <Typography
                component="h5"
                variant="h6"
                color="textSecondary"
                gutterBottom
              >
                Import Question
              </Typography>
              <Divider className={classes.divider} />

              <QuestionImportForm topicId={topicId} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AppLayout>
  );
}

export default withStyles(styles)(ImportQuestion);
