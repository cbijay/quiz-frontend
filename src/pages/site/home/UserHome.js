import React from "react";
import SiteLayout from "../../../layouts/SiteLayout";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  withStyles,
  Container,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import UserQuestion from "../../../components/home/user/UserQuestion";
import AskedQuestion from "../../../components/home/AskedQuestion";
import theme from "../../../styles/theme";

const styles = {
  cardContainer: {
    background: theme.palette.secondary.main,
    color: "#fff !important",
  },
  cardContent: {
    "&:last-child": {
      paddingBottom: 16,
    },
  },
};

function UserHome({ classes }) {
  const { user: { role, status } = {} } = useSelector((state) => state.auth);
  const student = role === "S" ? true : false;

  return (
    <SiteLayout>
      UserHome
      <Container>
        <Grid container spacing={1} justify="space-between">
          <Grid item xs={12} lg={12}>
            <Card className={classes.cardContainer}>
              <CardContent className={classes.cardContent}>
                <Typography component="h5" variant="h5">
                  Welcome to NST SCHOOL QUIZ
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={3}>
            <AskedQuestion />
          </Grid>
          <Grid item xs={12} lg={9}>
            {student && status === 1 && <UserQuestion />}
          </Grid>
        </Grid>

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
      </Container>
    </SiteLayout>
  );
}

export default withStyles(styles)(UserHome);
