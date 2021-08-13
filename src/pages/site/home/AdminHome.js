import React, { useCallback, useEffect } from "react";
import SiteLayout from "../../../layouts/SiteLayout";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  withStyles,
  Container,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getParticipants } from "../../../store/actions/studentAction";
import Participants from "../../../components/home/admin/Participants";
import ActiveQuestion from "../../../components/home/admin/ActiveQuestion";
import PickQuestions from "../../../components/home/admin/PickQuestions";
import AskedQuestion from "../../../components/home/AskedQuestion";
import { getMessages } from "../../../store/actions/messageAction";
import AdminMessage from "../../../components/home/admin/AdminMessage";
import theme from "../../../styles/theme";

const styles = () => ({
  container: {
    paddingTop: 10,
  },
  participantContainer: {
    background: theme.palette.primary.main,
    color: "#fff !important",
  },
  cardContainer: {
    marginTop: 15,
  },
  title: {
    fontWeight: 700,
  },
  tableCell: {
    color: "#fff",
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
  const { messages } = useSelector((state) => state.messages);
  const { participants } = useSelector((state) => state.students);
  const admin = role === "A" ? true : false;

  useEffect(() => {
    dispatch(getMessages());
    dispatch(getParticipants());
  }, [dispatch]);

  const listen = useCallback(() => {
    window.Echo.channel(`participants`).listen(
      ".App\\Events\\ParticipantScore",
      () => {
        dispatch(getParticipants());
      }
    );
  }, [dispatch]);

  useEffect(() => {
    listen();
  }, [listen]);

  return (
    <SiteLayout>
      {admin && (
        <>
          <Container>
            <Grid container spacing={1} justify="space-between">
              <Grid item xs={12} lg={9}>
                <AdminMessage messages={messages} />
              </Grid>
              <Grid item xs={12} lg={3}>
                <AskedQuestion />
              </Grid>
            </Grid>
            {participants.length > 0 ? (
              <Grid
                container
                justify="center"
                spacing={1}
                className={classes.container}
              >
                <Grid item xs={12} lg={3}>
                  <PickQuestions />
                </Grid>
                <Grid item xs={12} lg={9}>
                  <Participants participants={participants} classes={classes} />
                  <ActiveQuestion classes={classes} />
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
            )}
          </Container>
        </>
      )}
    </SiteLayout>
  );
}

export default withStyles(styles)(AdminHome);
