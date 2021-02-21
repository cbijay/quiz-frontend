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

const styles = {
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
      <Container>
        {student && status === 1 && <UserQuestion />}

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
