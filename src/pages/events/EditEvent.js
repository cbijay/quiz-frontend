import React, { useEffect } from "react";
import AppLayout from "../../layouts/AppLayout";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import EventForm from "../../components/forms/EventForm";
import { useSelector, useDispatch } from "react-redux";
import { getEvent } from "../../store/actions/eventAction";

function EditEvent({ match }) {
  const { event } = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const eventId = match.params.id;

  useEffect(() => {
    dispatch(getEvent(eventId));
  }, [dispatch, eventId]);

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
                Edit Event
              </Typography>
              <Divider />

              <EventForm mode="edit" event={event} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AppLayout>
  );
}

export default EditEvent;
