import React, { useState } from "react";
import {
  CssBaseline,
  Container,
  Box,
  withStyles,
  Grid,
} from "@material-ui/core";
import Copyright from "../components/footer/Copyright";
import theme from "../styles/theme";
import SiteHeader from "../components/header/SiteHeader";
import { useSelector } from "react-redux";
import { Alert } from "@material-ui/lab";

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

function AppLayout({ children, classes }) {
  const [open, setOpen] = useState(true);
  const { type, message } = useSelector((state) => state.alert);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <SiteHeader
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />

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
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default withStyles(styles)(AppLayout);
