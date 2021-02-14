import Echo from "laravel-echo";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  withStyles,
  FormControl,
  InputLabel,
  Select,
  Box,
  Collapse,
} from "@material-ui/core";
import { Check as CheckIcon, Close as CloseIcon } from "@material-ui/icons";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SiteLayout from "../../layouts/SiteLayout";
import {
  getAllQuestions,
  getActiveQuestion,
  updateQuestionStatus,
  getQuestion,
} from "../../store/actions/questionAction";
import {
  getParticipants,
  participantAnswer,
} from "../../store/actions/studentAction";
import principal from "../../images/principal_message.png";

//Import Pusher
window.Pusher = require("pusher-js");

//Laravel Echo config
window.Echo = new Echo({
  broadcaster: "pusher",
  key: "myKey",
  wsHost: "127.0.0.1",
  wsPort: 6001,
  forceTLS: false,
  disableStats: true,
});

const styles = () => ({
  title: {
    color: "#636b6f",
    //fontSize: 40,
    textTransform: "uppercase",
    letterSpacing: 5,
    marginTop: 30,
  },
  cardContent: {
    "&:last-child": {
      paddingBottom: 16,
    },
  },
  container: {
    paddingTop: 10,
  },
  rightAnswer: {
    color: "#00a152",
  },
  wrongAnswer: {
    color: "#b2102f",
  },
  success: {
    background: "#2e7d32",
    color: "#fff",
    "&:hover": {
      background: "#205723",
    },
  },
  questionOption: {
    background: "#1976d2",
    color: "#fff",
    "&:hover": {
      background: "#115293",
    },
  },
});

function Home({ classes }) {
  const { user } = useSelector((state) => state.auth);
  const { user: { role, status } = {} } = useSelector((state) => state.auth);
  const admin = role === "A" ? true : false;
  const { participants } = useSelector((state) => state.students);
  const { questions, question } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const [questionOption, setQuestionOption] = useState(false);
  const student = role === "S" ? true : false;

  let initialSeconds = 0;

  useEffect(() => {
    setMinutes(
      question && question.hasOwnProperty("timer") ? Number(question.timer) : 0
    );
  }, [question]);

  let [minutes, setMinutes] = useState();
  let [seconds, setSeconds] = useState(initialSeconds);

  const listen = useCallback(() => {
    window.Echo.channel(`question`).listen(
      ".App\\Events\\ActiveQuestion",
      () => {
        dispatch(getActiveQuestion());
        dispatch(getAllQuestions());
      }
    );

    window.Echo.channel(`participants`).listen(
      ".App\\Events\\ParticipantScore",
      () => {
        dispatch(getParticipants());
      }
    );
  }, [dispatch]);

  useEffect(() => {
    listen();
    dispatch(getActiveQuestion());
    dispatch(getParticipants());
    dispatch(getAllQuestions());
  }, [dispatch, listen]);

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

  const handleQuestion = (e) => {
    dispatch(getQuestion(e.target.value));
  };

  const handleQuestionOption = () => {
    setQuestionOption(!questionOption);
  };

  const handleQuestionStatus = (questionId) => {
    dispatch(updateQuestionStatus(questionId));
  };

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
    <SiteLayout>
      {admin &&
        (participants.length > 0 ? (
          <Grid container justify="center" spacing={1}>
            <Grid item xs={12} lg={4}>
              <Card>
                <CardContent>
                  <Typography
                    component="h2"
                    variant="h6"
                    color="primary"
                    gutterBottom
                  >
                    Participants
                  </Typography>

                  {participants.length > 0 ? (
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Score</TableCell>
                          <TableCell>User Answer</TableCell>
                          <TableCell>Remarks</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {participants.map(
                          ({ name, per_q_mark, answers }, index) => (
                            <TableRow key={index}>
                              <TableCell> {name} </TableCell>

                              <TableCell>
                                {answers.filter(
                                  (answer) =>
                                    answer.answer === answer.user_answer
                                ).length * per_q_mark}
                              </TableCell>
                              <TableCell>
                                {answers.length > 0
                                  ? answers[0].user_answer
                                  : ""}
                              </TableCell>
                              <TableCell>
                                {answers.length > 0 ? (
                                  answers[0].answer ===
                                  answers[0].user_answer ? (
                                    <CheckIcon
                                      className={classes.rightAnswer}
                                    />
                                  ) : (
                                    <CloseIcon
                                      className={classes.wrongAnswer}
                                    />
                                  )
                                ) : (
                                  ""
                                )}
                              </TableCell>
                            </TableRow>
                          )
                        )}
                      </TableBody>
                    </Table>
                  ) : (
                    <Typography component="p">No participants!!</Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} lg={5}>
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

                      <Collapse
                        in={questionOption}
                        className={classes.container}
                      >
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
                      {/* {question.users.length > 0 && (
                          <>
                            <Typography>Participant Answer</Typography>
                            <Table size="small">
                              <TableHead>
                                <TableRow>
                                  <TableCell>Name</TableCell>
                                  <TableCell>Answer</TableCell>
                                  <TableCell>Correct</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {question.users.map(
                                  ({ name, answer }, index) => (
                                    <TableRow>
                                      <TableCell>{name}</TableCell>
                                      <TableCell>
                                        {answer.user_answer}
                                      </TableCell>
                                      <TableCell>
                                        {answer.answer ===
                                        answer.user_answer ? (
                                          <CheckIcon
                                            className={classes.rightAnswer}
                                          />
                                        ) : (
                                          <CloseIcon
                                            className={classes.wrongAnswer}
                                          />
                                        )}
                                      </TableCell>
                                    </TableRow>
                                  )
                                )}
                              </TableBody>
                            </Table>
                          </>
                        )} */}
                    </>
                  ) : (
                    <Typography>Please pick question to start quiz</Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} lg={3}>
              <Card>
                <CardContent>
                  <Typography
                    component="h2"
                    variant="h6"
                    color="primary"
                    gutterBottom
                  >
                    Pick Questions
                  </Typography>
                  {(questions.length > 0) &
                  (questions.filter((question) => question.status === 0)
                    .length >
                    0) ? (
                    <FormControl
                      margin="normal"
                      size="small"
                      variant="standard"
                      fullWidth
                    >
                      <InputLabel shrink htmlFor="question-label">
                        Questions
                      </InputLabel>

                      <Select
                        multiple
                        native
                        onClick={handleQuestion}
                        inputProps={{
                          name: "question",
                          id: "question-label",
                        }}
                      >
                        {questions &&
                          questions
                            .filter((question) => question.status === 0)
                            .map(({ id, question }, index) => (
                              <option
                                key={index}
                                aria-label={question}
                                value={id}
                              >
                                {question}
                              </option>
                            ))}
                      </Select>
                    </FormControl>
                  ) : (
                    <Typography component="p">No questions found!!</Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        ) : (
          <Grid container justify="center" spacing={1}>
            <Grid item lg={6}>
              <Card>
                <CardContent>
                  <Typography component="p">
                    Please add some participants to start quiz
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        ))}

      {student && status === 1 && (
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
      )}

      {student && status === 0 && (
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} lg={4}>
            <Card>
              <CardContent className={classes.cardContent}>
                <Typography component="p" align="center">
                  You are not allowed to participate
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {!user && (
        <>
          <Grid container justify="center">
            <Grid item xs={12} lg={8}>
              <Typography
                component="h3"
                variant="h3"
                color="inherit"
                align="center"
                className={classes.title}
                gutterBottom
              >
                Nepalese Society of Texas School
              </Typography>

              <Typography
                component="h4"
                variant="h4"
                color="textSecondary"
                align="center"
                display="block"
              >
                NST - 1998
              </Typography>
              <Typography
                component="h6"
                variant="h6"
                color="textSecondary"
                align="center"
                display="block"
                gutterBottom
              >
                QUIZ CONTEST PROGRAM
              </Typography>
            </Grid>

            <Grid container justify="center">
              <Grid item xs={12} lg={10}>
                <Typography
                  component="h6"
                  variant="h6"
                  color="textSecondary"
                  align="center"
                  display="block"
                  gutterBottom
                >
                  MESSAGE FROM THE PRESIDENT
                </Typography>

                <Card>
                  <CardContent className={classes.cardContent}>
                    <Grid container spacing={2} justify="space-between">
                      <Grid item xs={12} lg={6}>
                        <img
                          src={principal}
                          alt="Principal Message"
                          width="100%"
                        />
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <Typography component="h3" variant="h3">
                          Er Bijay Raj Bhattarai (Dallas, TX)
                        </Typography>
                        <Typography component="h5" variant="h5" gutterBottom>
                          President
                        </Typography>
                        <Typography paragraph>
                          <b>
                            Welcome to the home of the Association of Nepalis in
                            the Americas (ANA)!
                          </b>
                        </Typography>
                        <Typography paragraph>
                          It is a great privilege to be elected President for
                          the next term (January 2021-June 2023).
                        </Typography>
                        <Typography paragraph>
                          The Association of Nepalis in the Americas (ANA),
                          established in 1983, was the first large-scale Nepali
                          community organization in North America. Our mission
                          is to unite the North American Nepali diaspora and to
                          foster Nepali identity and culture. For the past 38
                          years, the ANA has actualized this vision through
                          numerous successful initiatives.{" "}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </SiteLayout>
  );
}

export default withStyles(styles)(Home);
