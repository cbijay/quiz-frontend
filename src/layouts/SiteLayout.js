import React from "react";
import { CssBaseline, Box, withStyles, Grid } from "@material-ui/core";
import theme from "../styles/theme";
import SiteHeader from "../components/header/SiteHeader";
import { useSelector } from "react-redux";
import AlertMessage from "../components/alert/AlertMessage";
import SiteFooter from "../components/footer/SiteFooter";

const styles = () => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflowX: "hidden",
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(4),
  },
});

function SiteLayout({ children, classes }) {
  const { type, message } = useSelector((state) => state.alert);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <SiteHeader />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {message && <AlertMessage type={type} message={message} />}
          </Grid>
        </Grid>
        {children}
        <Box pt={4}>
          <SiteFooter />
        </Box>
      </main>
    </div>
  );
}

export default withStyles(styles)(SiteLayout);
