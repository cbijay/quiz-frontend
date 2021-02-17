import React, { useEffect } from "react";
import SiteLayout from "../../../layouts/SiteLayout";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  withStyles,
} from "@material-ui/core";
import Participants from "../../../components/home/admin/Participants";
import ActiveQuestion from "../../../components/home/admin/ActiveQuestion";
import PickQuestions from "../../../components/home/admin/PickQuestions";
import { useDispatch, useSelector } from "react-redux";
import { getParticipants } from "../../../store/actions/studentAction";

const styles = () => ({
  container: {
    paddingTop: 10,
  },
  avatar: {
    width: 30,
    height: 30,
  },
  rightAnswer: {
    color: "#00a152",
  },
  wrongAnswer: {
    color: "#b2102f",
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
});

function AdminHome({ classes }) {
  const dispatch = useDispatch();
  const { user: { role } = {} } = useSelector((state) => state.auth);
  const { participants } = useSelector((state) => state.students);
  const admin = role === "A" ? true : false;

  useEffect(() => {
    dispatch(getParticipants());
  }, [dispatch]);

  return (
    <SiteLayout>
      {admin &&
        (participants.length > 0 ? (
          <Grid container justify="center" spacing={1}>
            <Participants participants={participants} classes={classes} />
            <ActiveQuestion classes={classes} />
            <PickQuestions classes={classes} />
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
    </SiteLayout>
  );
}

export default withStyles(styles)(AdminHome);
