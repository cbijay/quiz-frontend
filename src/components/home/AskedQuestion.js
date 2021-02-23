import React, { useEffect } from "react";
import {
  Badge,
  Card,
  CardContent,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import theme from "../../styles/theme";
import { getAskedQuestion } from "../../store/actions/questionAction";

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
  const { totalQuestions } = useSelector((state) => state.questions);

  const questionColor = [
    `${classes.success}`,
    `${classes.primary}`,
    `${classes.dark}`,
    `${classes.secondary}`,
  ];

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
              <Typography>{totalQuestions && totalQuestions.length}</Typography>
            </Grid>
          </Grid>
        )}

        {user && user.role === "S" && (
          <>
            <Typography component="h2" variant="h6" gutterBottom>
              Questions Asked
            </Typography>
            {totalQuestions &&
              totalQuestions.map(({ question_order }, index) => (
                <Badge
                  key={index}
                  content={question_order}
                  color="primary"
                  className={clsx(
                    classes.badge,
                    questionColor[
                      Math.floor(Math.random() * questionColor.length)
                    ]
                  )}
                >
                  {question_order}
                </Badge>
              ))}
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(AskedQuestion);
