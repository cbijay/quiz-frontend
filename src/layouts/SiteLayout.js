import React from "react";
import {
  CssBaseline,
  Container,
  Box,
  withStyles,
  Grid,
} from "@material-ui/core";
import theme from "../styles/theme";
import SiteHeader from "../components/header/SiteHeader";
import { useSelector } from "react-redux";
import { Alert } from "@material-ui/lab";
import Footer from "../components/footer/Footer";

const styles = () => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(4),
  },
  alertContainer: {
    marginBottom: 10,
  },
});

function SiteLayout({ children, classes }) {
  const { type, message } = useSelector((state) => state.alert);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <SiteHeader />
      {/* <Banner /> */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {message && (
                <Alert severity={type} className={classes.alertContainer}>
                  {message}
                </Alert>
              )}
            </Grid>
          </Grid>
          {children}
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default withStyles(styles)(SiteLayout);
