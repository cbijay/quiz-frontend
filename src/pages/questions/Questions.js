import React, { useEffect } from "react";
import AppLayout from "../../layouts/AppLayout";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";
import clsx from "clsx";
import {
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
} from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import {
  getQuestionTopics,
  deleteQuestion,
} from "../../store/actions/questionAction";
import { useHistory } from "react-router-dom";
import AppStyle from "../../styles/AppStyle";

function Questions() {
  const classes = AppStyle();
  const { topics } = useSelector((state) => state.questions);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestionTopics());
  }, [dispatch]);

  const handleView = (topicId) => {
    history.push(`/admin/questions/${topicId}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteQuestion(id));
  };

  return (
    <AppLayout>
      <Card>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item>
              <Typography
                component="h5"
                variant="h6"
                color="textSecondary"
                noWrap
              >
                Questions By Topic Wise
              </Typography>
            </Grid>
          </Grid>
          <Divider className={classes.noDivider} />

          <Grid container spacing={2}>
            {topics.length > 0 ? (
              topics.map(
                (
                  { id, title, description, per_q_mark, timer, question },
                  index
                ) => (
                  <Grid item xs={12} sm={12} md={6} key={index}>
                    <Card>
                      <CardContent>
                        <Typography component="h6" variant="h6" gutterBottom>
                          {title}
                        </Typography>
                        <Typography
                          component="p"
                          variant="body1"
                          color="textSecondary"
                          gutterBottom
                        >
                          {description}
                        </Typography>

                        <Grid container justify="space-between">
                          <Grid item>
                            <Typography
                              component="p"
                              variant="body1"
                              color="textPrimary"
                              gutterBottom
                            >
                              Per Question Mark
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              component="p"
                              variant="body1"
                              color="textPrimary"
                              gutterBottom
                            >
                              {per_q_mark}
                            </Typography>
                          </Grid>
                        </Grid>

                        <Grid container justify="space-between">
                          <Grid item>
                            <Typography
                              component="p"
                              variant="body1"
                              color="textPrimary"
                              gutterBottom
                            >
                              Total Marks
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              component="p"
                              variant="body1"
                              color="textPrimary"
                              gutterBottom
                            >
                              {question !== null
                                ? per_q_mark * question.length
                                : per_q_mark}
                            </Typography>
                          </Grid>
                        </Grid>

                        <Grid container justify="space-between">
                          <Grid item>
                            <Typography
                              component="p"
                              variant="body1"
                              color="textPrimary"
                              gutterBottom
                            >
                              Total Questions
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              component="p"
                              variant="body1"
                              color="textPrimary"
                              gutterBottom
                            >
                              {question !== null ? question.length : 0}
                            </Typography>
                          </Grid>
                        </Grid>

                        <Grid container justify="space-between">
                          <Grid item>
                            <Typography
                              component="p"
                              variant="body1"
                              color="textPrimary"
                              gutterBottom
                            >
                              Total Time
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              component="p"
                              variant="body1"
                              color="textPrimary"
                              gutterBottom
                            >
                              {`${timer} minutes`}
                            </Typography>
                          </Grid>
                        </Grid>

                        <Grid container spacing={1}>
                          <Grid item>
                            <Button
                              variant="contained"
                              color="primary"
                              size="small"
                              className={clsx(
                                classes.greenButton,
                                classes.button
                              )}
                              onClick={() => handleView(id)}
                            >
                              <VisibilityIcon className={classes.buttonIcon} />
                              View Questions
                            </Button>
                          </Grid>
                          <Grid item>
                            <Button
                              variant="contained"
                              color="secondary"
                              size="small"
                              className={classes.button}
                              onClick={() => handleDelete(id)}
                            >
                              <DeleteIcon className={classes.buttonIcon} />
                              Delete Answer
                            </Button>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              )
            ) : (
              <Typography>No record found!!</Typography>
            )}
          </Grid>
        </CardContent>
      </Card>
    </AppLayout>
  );
}

export default Questions;
