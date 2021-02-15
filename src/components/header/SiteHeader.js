import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  withStyles,
  Avatar,
  Grid,
} from "@material-ui/core";
import logo from "../../images/quiz_logo.png";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../store/actions/authAction";
import DropDownMenu from "../menus/DropDownMenu";

const styles = () => ({
  appBar: {
    background: "#fff",
  },
  toolbar: {
    paddingRight: 24,
    minHeight: 50 + "px",
  },
  menuButton: {
    marginRight: 10,
  },
  menuButtonHidden: {
    display: "none",
  },

  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "#777",
  },
  buttonIcon: {
    marginRight: 5,
  },
  primary: {
    margin: 0,
  },
});

function SiteHeader({ classes }) {
  const { user } = useSelector((state) => state.auth);
  const { user: { role } = {} } = useSelector((state) => state.auth);
  const admin = role === "A" ? true : false;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    history.push("/login");
  };

  const schoolSubMenu = [
    { name: "Team", link: "/school/team" },
    { name: "Register", link: "/register" },
    { name: "Syllabus", link: "/school/syllabus" },
  ];

  const quizSubMenu = [
    { name: "Application Form", link: "/quiz/application-form" },
    { name: "Syllabus", link: "/quiz/syllabus" },
    { name: "Rules", link: "/quiz/rules" },
    { name: "Team", link: "/quiz/team" },
  ];

  return (
    <>
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid container spacing={1} justify="space-between">
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <Link to="/">
                    <Avatar alt="Nepalese Society of Texas School" src={logo} />
                  </Link>
                </Grid>
                <Grid item justify="space-evenly">
                  <Link to="/" className={classes.title}>
                    <Typography
                      component="h1"
                      variant="h6"
                      color="inherit"
                      noWrap
                    >
                      Nepalese
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Typography component="span" variant="body1" color="inherit">
                {user?.name}
              </Typography>
              <Button color="inherit" component={Link} to="/about">
                About
              </Button>
              <DropDownMenu menu="School" subMenu={schoolSubMenu} />
              <DropDownMenu menu="Quiz" subMenu={quizSubMenu} />
              <Button color="inherit">Gallery</Button>
              <Button color="inherit">Contact Us</Button>
            </Grid>

            <Grid alignItems="center">
              {admin && (
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.primary}
                  component={Link}
                  to="/admin"
                >
                  Dashboard
                </Button>
              )}
              {user && (
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              )}

              {!user && (
                <>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    className={classes.primary}
                    to="/login"
                  >
                    Login
                    </Button>
                  <Button color="inherit" component={Link} to="/register">
                    Register
                    </Button>
                </>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default withStyles(styles)(SiteHeader);
