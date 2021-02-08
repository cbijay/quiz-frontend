import React from "react";
import AppLayout from "../../layouts/AppLayout";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import TopicForm from "../../components/forms/TopicForm";

function AddTopic() {
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
                Add Topic
              </Typography>
              <Divider />

              <TopicForm topic="" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AppLayout>
  );
}

export default AddTopic;
