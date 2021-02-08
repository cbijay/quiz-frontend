import React, { useEffect } from "react";
import AppLayout from "../../layouts/AppLayout";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import QuestionForm from "../../components/forms/QuestionForm";
import { useSelector, useDispatch } from "react-redux";
import { getQuestion } from "../../store/actions/questionAction";

function EditQuestion({ match }) {
  const { question } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const questionId = match.params.id;

  useEffect(() => {
    dispatch(getQuestion(questionId));
  }, [dispatch, questionId]);

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
                Edit Question
              </Typography>
              <Divider />

              <QuestionForm mode="edit" formQuestion={question} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AppLayout>
  );
}

export default EditQuestion;
