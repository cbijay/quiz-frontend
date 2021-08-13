import React, { useState } from "react";
import {
  CssBaseline,
  Container,
  Box,
  Grid,
  withStyles,
} from "@material-ui/core";
import AppHeader from "../components/header/AppHeader";
import AppSidebar from "../components/sidebar/AppSidebar";
import AlertMessage from "../components/alert/AlertMessage";
import { useSelector } from "react-redux";
import theme from "../styles/theme";
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
      <AppHeader
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <AppSidebar open={open} setOpen={setOpen} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {message && <AlertMessage type={type} message={message} />}
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

export default withStyles(styles)(AppLayout);
