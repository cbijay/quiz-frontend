import React, { useCallback, useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Collapse,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  getActiveQuestion,
  openQuestion,
} from "../../../store/actions/questionAction";
import useTimer from "../../../hooks/useTimer";
import AppEcho from "../../../config/socketConfig";

function ActiveQuestion({ classes }) {
  const dispatch = useDispatch();
  const { question } = useSelector((state) => state.questions);
  const [questionOption, setQuestionOption] = useState(false);
  const { minutes, seconds } = useTimer("");

  const listen = useCallback(() => {
    AppEcho.channel(`question`).listen(".App\\Events\\ActiveQuestion", () => {
      dispatch(getActiveQuestion());
    });
  }, [dispatch]);

  useEffect(() => {
    listen();
  }, [listen]);

  useEffect(() => {
    dispatch(getActiveQuestion());
  }, [dispatch]);

  const handleQuestionOption = () => {
    setQuestionOption(!questionOption);
  };

  const handleQuestionStatus = (questionId, status) => {
    dispatch(openQuestion(questionId, status));
  };

  return (
    <Card className={classes.cardContainer}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
              className={classes.title}
            >
              User Question
            </Typography>
          </Grid>
          <Grid item>
            <Typography component="h4">
              {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </Typography>
          </Grid>
        </Grid>

        {question ? (
          question.status === 2 && minutes === 0 && seconds === 0 ? (
            <Typography>Time up!! Please pick another question</Typography>
          ) : (
            <>
              <Box>{question.question}</Box>
              <Grid container spacing={1} justify="flex-end">
                <Grid item>
                  <Button
                    className={classes.success}
                    variant="contained"
                    onClick={() => handleQuestionStatus(question.id, 1)}
                    disabled={question.status === 1 ? true : false}
                  >
                    {question.status === 1 ? "Active" : "Start"}
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    className={classes.questionOption}
                    variant="contained"
                    onClick={handleQuestionOption}
                  >
                    {questionOption ? "Hide Options" : "Show Options"}
                  </Button>
                </Grid>
              </Grid>

              <Collapse in={questionOption} className={classes.container}>
                <Grid container spacing={1}>
                  <Grid item xs={12} lg={6}>
                    <Button
                      fullWidth
                      color="primary"
                      variant="contained"
                      className={question.answer === "A" ? classes.success : ""}
                    >
                      {question.a}
                    </Button>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Button
                      fullWidth
                      color="primary"
                      variant="contained"
                      className={question.answer === "B" ? classes.success : ""}
                    >
                      {question.b}
                    </Button>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Button
                      fullWidth
                      color="primary"
                      variant="contained"
                      className={question.answer === "C" ? classes.success : ""}
                    >
                      {question.c}
                    </Button>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Button
                      fullWidth
                      color="primary"
                      variant="contained"
                      className={question.answer === "D" ? classes.success : ""}
                    >
                      {question.d}
                    </Button>
                  </Grid>
                </Grid>
              </Collapse>
            </>
          )
        ) : (
          <Typography>Please pick question to start quiz</Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default ActiveQuestion;
