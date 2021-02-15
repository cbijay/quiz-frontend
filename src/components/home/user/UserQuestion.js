import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  withStyles,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getActiveQuestion } from "../../../store/actions/questionAction";
import { participantAnswer } from "../../../store/actions/studentAction";

const styles = {
  container: {
    paddingTop: 10,
  },
};

function UserQuestion({ classes }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { question } = useSelector((state) => state.questions);

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

  const handleAnswer = (answer) => {
    const answerData = {
      topic_id: question.topic_id,
      user_id: user.id,
      question_id: question.id,
      user_answer: answer,
      answer: question.answer,
    };

    dispatch(participantAnswer(answerData));
  };

  return (
    <Card className={classes.container}>
      <CardContent>
        {question ? (
          <>
            <Grid container justify="space-between">
              <Grid item>
                <Typography
                  component="h2"
                  variant="h6"
                  color="primary"
                  gutterBottom
                >
                  Question
                </Typography>
              </Grid>
              <Grid item>
                <Typography component="h4">
                  {minutes < 10 ? `0${minutes}` : minutes}:
                  {seconds < 10 ? `0${seconds}` : seconds}
                </Typography>
              </Grid>
            </Grid>

            {question.timer > 0 && minutes === 0 && seconds === 0 ? (
              <Typography component="p">
                Time up, please wait for another question
              </Typography>
            ) : (
              <>
                <Box>{question.question}</Box>
                <Grid container spacing={1} className={classes.container}>
                  <Grid item xs={12} lg={6}>
                    <Button
                      fullWidth
                      color="primary"
                      variant="contained"
                      onClick={() => handleAnswer("A")}
                    >
                      {question.a}
                    </Button>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Button
                      fullWidth
                      color="primary"
                      variant="contained"
                      onClick={() => handleAnswer("B")}
                    >
                      {question.b}
                    </Button>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Button
                      fullWidth
                      color="primary"
                      variant="contained"
                      onClick={() => handleAnswer("C")}
                    >
                      {question.c}
                    </Button>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Button
                      fullWidth
                      color="primary"
                      variant="contained"
                      onClick={() => handleAnswer("D")}
                    >
                      {question.d}
                    </Button>
                  </Grid>
                </Grid>
              </>
            )}
          </>
        ) : (
          <Typography component="p">Please wait for question</Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(UserQuestion);
