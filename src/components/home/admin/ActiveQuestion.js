import React, { useEffect, useState } from "react";
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

function ActiveQuestion({ classes }) {
  const dispatch = useDispatch();
  const { question } = useSelector((state) => state.questions);
  const [questionOption, setQuestionOption] = useState(false);

  let initialSeconds = 0;

  useEffect(() => {
    setMinutes(
      question && question.hasOwnProperty("timer") ? Number(question.timer) : 0
    );
  }, [question]);

  let [minutes, setMinutes] = useState();
  let [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    dispatch(getActiveQuestion());
  }, [dispatch]);

  useEffect(() => {
    let interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [minutes, seconds]);

  const handleQuestionOption = () => {
    setQuestionOption(!questionOption);
  };

  const handleQuestionStatus = (questionId) => {
    dispatch(openQuestion(questionId));
  };

  return (
    <Grid item xs={12} lg={4}>
      <Card>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
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
            minutes === 0 && seconds === 0 ? (
              <Typography>Please pick another question</Typography>
            ) : (
              <>
                <Box>{question.question}</Box>
                <Grid container justify="flex-end" spacing={1}>
                  <Grid item>
                    <Button
                      className={classes.success}
                      variant="contained"
                      onClick={() => handleQuestionStatus(question.id)}
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
                      Show Options
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
                        className={
                          question.answer === "A" ? classes.success : ""
                        }
                      >
                        {question.a}
                      </Button>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Button
                        fullWidth
                        color="primary"
                        variant="contained"
                        className={
                          question.answer === "B" ? classes.success : ""
                        }
                      >
                        {question.b}
                      </Button>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Button
                        fullWidth
                        color="primary"
                        variant="contained"
                        className={
                          question.answer === "C" ? classes.success : ""
                        }
                      >
                        {question.c}
                      </Button>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Button
                        fullWidth
                        color="primary"
                        variant="contained"
                        className={
                          question.answer === "D" ? classes.success : ""
                        }
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
    </Grid>
  );
}

export default ActiveQuestion;
