import React, { useCallback, useEffect } from "react";
import {
  //Badge,
  Card,
  CardContent,
  Grid,
  Typography,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  withStyles,
} from "@material-ui/core";
//import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import theme from "../../styles/theme";
import { getAskedQuestion } from "../../store/actions/questionAction";
import AppEcho from "../../config/socketConfig";

const styles = {
  cardContainer: {
    background: theme.palette.primary.main,
    color: "#fff",
  },
  cardBody: {
    paddingBottom: "16px !important",
  },
  badge: {
    right: -3,
    top: 13,
    marginRight: 5,
    borderRadius: 50,
    padding: "5px 15px",
    fontSize: 18,
    lineHeight: 1.75,
    textAlign: "center",
  },
  dark: {
    background: "#777",
    "&:hover": {
      background: "#333",
    },
  },
  primary: {
    background: "#e64a19",
    color: "#fff",
    "&:hover": {
      background: "#d84315",
    },
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
};

function AskedQuestion({ classes }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { askedQuestions: { questions, count } = {} } = useSelector(
    (state) => state.questions
  );

  const listen = useCallback(() => {
    AppEcho.channel(`question`).listen(".App\\Events\\ActiveQuestion", () => {
      dispatch(getAskedQuestion());
    });
  }, [dispatch]);

  useEffect(() => {
    listen();
  }, [listen]);

  useEffect(() => {
    dispatch(getAskedQuestion());
  }, [dispatch]);

  return (
    <Card className={classes.cardContainer}>
      <CardContent className={classes.cardBody}>
        {user && user.role === "A" && (
          <Grid container spacing={1}>
            <Grid zeroMinWidth item>
              <Typography>Total Number of Question Asked:</Typography>
            </Grid>
            <Grid item>
              <Typography>{count && count}</Typography>
            </Grid>
          </Grid>
        )}

        {user && user.role === "S" && (
          <>
            <Typography component="h2" variant="h6" gutterBottom>
              Questions Asked
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableCell}>Topic</TableCell>
                  <TableCell className={classes.tableCell}>
                    Question Number
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {questions &&
                  questions.map(
                    ({ title, question }, index) =>
                      question.length > 0 && (
                        <TableRow key={index}>
                          <TableCell className={classes.tableCell}>
                            {title}
                          </TableCell>
                          <TableCell
                            align="center"
                            className={classes.tableCell}
                          >
                            {question.map(
                              ({ question_order }, questionIndex) => (
                                <span key={questionIndex}>
                                  {(questionIndex ? ", " : "") + question_order}
                                </span>
                              )
                            )}
                          </TableCell>
                        </TableRow>
                      )
                  )}
              </TableBody>
            </Table>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(AskedQuestion);
