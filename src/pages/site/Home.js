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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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

const styles = () => ({
  title: {
    color: "#636b6f",
    fontSize: 40,
    textTransform: "uppercase",
    letterSpacing: 5,
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

  useEffect(() => {
    dispatch(getParticipants());
    dispatch(getActiveQuestion());
    dispatch(getAllQuestions());
  }, [dispatch]);

  const handleQuestion = (e) => {
    dispatch(getQuestion(e.target.value));
  };

  const handleQuestionOption = () => {
    setQuestionOption(!questionOption);
  };

  const handleQuestionStatus = (id) => {
    dispatch(updateQuestionStatus(id));
  };

  const handleAnswer = (answer) => {
    const answerData = {
      topic_id: question.topic_id,
      user_id: user.id,
      question_id: question.id,
      user_answer: answer,
      answer: question.answer,
    };

    console.log(answerData);
    dispatch(participantAnswer(answerData));
  };

  return (
    <SiteLayout>
      {admin && (
        <Grid container justify="center" spacing={1}>
          <Grid item xs={12} lg={3}>
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
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Participant</TableCell>
                      <TableCell>Score</TableCell>
                      <TableCell>Latest</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {participants.length > 0 ? (
                      participants.map(
                        ({ name, per_q_mark, answers }, index) => (
                          <TableRow key={index}>
                            <TableCell> {name} </TableCell>

                            <TableCell>
                              {answers.filter(
                                (answer) => answer.answer === answer.user_answer
                              ).length * per_q_mark}
                            </TableCell>
                            <TableCell>
                              {answers.filter(
                                (answer) => answer.answer === answer.user_answer
                              ).length > 0 ? (
                                <CheckIcon className={classes.rightAnswer} />
                              ) : (
                                <CloseIcon className={classes.wrongAnswer} />
                              )}
                            </TableCell>
                            {/* {answers.map((answer) =>
                            topics
                              .filter((topic) => topic.id === answer.topic_id)
                              .map((topic) => topic.per_q_mark)
                          )} */}
                          </TableRow>
                        )
                      )
                    ) : (
                      <TableRow>
                        <TableCell colSpan={6}>No record found!!</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Card>
              <CardContent>
                <Typography
                  component="h2"
                  variant="h6"
                  color="primary"
                  gutterBottom
                >
                  User Question
                </Typography>
                {question && (
                  <>
                    {question.question ? (
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
                      </>
                    ) : (
                      <Typography>
                        Please Pick question to start quiz
                      </Typography>
                    )}
                  </>
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
                    onChange={handleQuestion}
                    inputProps={{
                      name: "question",
                      id: "question-label",
                    }}
                  >
                    {questions &&
                      questions
                        .filter((question) => question.status === 0)
                        .map(({ id, question }, index) => (
                          <option key={index} aria-label={question} value={id}>
                            {question}
                          </option>
                        ))}
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {student && status === 1 && (
        <Card className={classes.container}>
          <CardContent>
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              Question
            </Typography>
            {question && (
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
            <Grid item xs={12} lg={6}>
              <Typography
                component="h2"
                variant="h6"
                color="inherit"
                align="center"
                className={classes.title}
                gutterBottom
              >
                Nepalese Society of Texas School
              </Typography>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Card>
                    <CardContent className={classes.cardContent}>
                      Please{" "}
                      <Button color="primary" component={Link} to="/login">
                        Login
                      </Button>{" "}
                      To Start Quiz
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </SiteLayout>
  );
}

export default withStyles(styles)(Home);
