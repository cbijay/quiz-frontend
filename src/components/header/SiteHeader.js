import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  Avatar,
  Grid,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
} from "@material-ui/core";
import logo from "../../images/quiz_logo.png";
import { Link } from "react-router-dom";
import { MenuOpen } from "@material-ui/icons";
import NavButtons from "./NavButtons";

const styles = (theme) => ({
  appBar: {
    background: theme.palette.primary,
  },
  toolbar: {
    paddingRight: 24,
    minHeight: 50,
  },
  menuButton: {
    marginRight: 10,
  },
  menuButtonHidden: {
    display: "none",
  },
  MenuIcon: {
    color: theme.palette.default.main,
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: theme.palette.default.main,
  },
  buttonIcon: {
    marginRight: 5,
  },
  primary: {
    margin: 0,
  },
  list: {
    width: 250,
    background: "#3394FF",
    height: "100vh",
  },
  fullList: {
    width: "auto",
  },
});

function SiteHeader({ classes }) {
  //returns true if screen-width is less than 600px
  const small = useMediaQuery("(max-width:1024px)");
  //returns true if screen-width is greater than 600px
  const medium = useMediaQuery("(min-width:1024px)");

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(true);
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Grid container direction="column">
          <NavButtons />
        </Grid>
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid
            container
            spacing={1}
            alignItems="center"
            justify="space-between"
          >
            <Grid item>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Link to="/">
                    <Avatar
                      style={{
                        width: 50,
                        height: 50,
                      }}
                      alt="Nepalese Society of Texas School"
                      src={logo}
                      className={classes.logo}
                    />
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/" className={classes.title}>
                    <Typography
                      component="h1"
                      variant={small ? "h6" : "h4"}
                      color="inherit"
                      noWrap
                    >
                      NST SCHOOL
                    </Typography>
                  </Link>
                </Grid>
                <Grid></Grid>
                {
                  //shows up when screen size is less than 1024px
                  small && (
                    <>
                      <IconButton
                        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                        style={{ position: "absolute", right: 0 }}
                      >
                        <MenuOpen className={classes.MenuIcon} />
                      </IconButton>
                      <Drawer
                        anchor="right"
                        open={isDrawerOpen}
                        onClose={() => setIsDrawerOpen(false)}
                      >
                        {list("right")}
                      </Drawer>
                    </>
                  )
                }
              </Grid>
            </Grid>
            {
              // Shows up in medium screen which is greater than 1024 px
              medium && <NavButtons />
            }
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default withStyles(styles)(SiteHeader);
