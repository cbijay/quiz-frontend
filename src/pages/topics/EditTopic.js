import React, { useEffect } from "react";
import AppLayout from "../../layouts/AppLayout";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import TopicForm from "../../components/forms/TopicForm";
import { useSelector, useDispatch } from "react-redux";
import { getTopic } from "../../store/actions/topicAction";

function EditTopic({ match }) {
  const { topic } = useSelector((state) => state.topics);
  const dispatch = useDispatch();
  const topicId = match.params.id;

  useEffect(() => {
    dispatch(getTopic(topicId));
  }, [dispatch, topicId]);

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
                Edit Topic
              </Typography>
              <Divider />

              <TopicForm mode="edit" topic={topic} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AppLayout>
  );
}

export default EditTopic;
