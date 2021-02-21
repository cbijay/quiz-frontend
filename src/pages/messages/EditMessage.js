import React, { useEffect } from "react";
import AppLayout from "../../layouts/AppLayout";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import MessageForm from "../../components/forms/MessageForm";
import { useSelector, useDispatch } from "react-redux";
import { getMessage } from "../../store/actions/messageAction";

function EditMessage({ match }) {
  const { message } = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  const messageId = match.params.id;

  useEffect(() => {
    dispatch(getMessage(messageId));
  }, [dispatch, messageId]);

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
                Edit Message
              </Typography>
              <Divider />

              <MessageForm mode="edit" message={message} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AppLayout>
  );
}

export default EditMessage;
