import React, { useCallback, useEffect, useState } from "react";
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
import { participantAnswer } from "../../../store/actions/studentAction";
import useTimer from "../../../hooks/useTimer";
import AppEcho from "../../../config/socketConfig";
import { getActiveQuestion } from "../../../store/actions/questionAction";

const styles = {
  container: {
    paddingTop: 10,
  },
};

function UserQuestion({ classes }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { question } = useSelector((state) => state.questions);
  const [userAnswer, setUserAnswer] = useState();
  let { minutes, seconds } = useTimer(userAnswer);

  const listen = useCallback(() => {
    AppEcho.channel(`question`).listen(".App\\Events\\ActiveQuestion", () => {
      dispatch(getActiveQuestion());
    });
  }, [dispatch]);

  useEffect(() => {
    listen();
  }, [listen]);

  useEffect(() => {
    const answer =
      question && question.users.length > 0
        ? question.users.filter(({ answer }) => answer.user_id === user.id)
        : "null";
    setUserAnswer(answer.length > 0 && answer[0].answer);
  }, [question, user]);

  const handleAnswer = (answer) => {
    const answerData = {
      topic_id: question.topic_id,
      user_id: user.id,
      question_id: question.id,
      user_answer: answer,
      answer: question.answer,
    };

    dispatch(participantAnswer(answerData, false));
    minutes = 0;
    seconds = 0;
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

            {question?.users.length > 0 &&
            Number(userAnswer?.user_answer) !== 0 &&
            userAnswer !== false ? (
              <Typography component="p">
                Please wait for another question
              </Typography>
            ) : question?.users.length > 0 &&
              Number(userAnswer?.user_answer) === 0 &&
              userAnswer !== false &&
              minutes === 0 &&
              seconds === 0 ? (
              <Typography component="p">
                Time up, please wait for another question
              </Typography>
            ) : question?.status === 2 && minutes === 0 && seconds === 0 ? (
              <Typography component="p">
                Time Up from admin, You're too late too answer, please wait for
                another question
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
