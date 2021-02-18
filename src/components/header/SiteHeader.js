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

const styles = (theme) => ({
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
  logo: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  navBtn: {
    fontSize: 18,
    //width: 150,
    fontWeight: 700,
  },
});

function SiteHeader({ classes }) {
  const { user } = useSelector((state) => state.auth);
  const { user: { role } = {} } = useSelector((state) => state.auth);
  const admin = role === "A" ? true : false;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("hello");
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

  const userSubMenu = [{ name: "Log out", handleClick: handleLogout }];

  return (
    <>
      <AppBar position="fixed" color="default" className={classes.appBar}>
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
                      variant="h4"
                      color="inherit"
                      noWrap
                    >
                      NST SCHOOL
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs container justify="center">
              <Button
                color="inherit"
                component={Link}
                to="/"
                className={classes.navBtn}
              >
                Home
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/about"
                className={classes.navBtn}
              >
                About
              </Button>
              <DropDownMenu menu="School" subMenu={schoolSubMenu} />
              <DropDownMenu menu="Quiz" subMenu={quizSubMenu} />
              <Button
                component={Link}
                to="/gallery"
                color="inherit"
                className={classes.navBtn}
              >
                Gallery
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/contact"
                className={classes.navBtn}
              >
                Contact Us
              </Button>
            </Grid>

            <Grid item>
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
                <>
                  <DropDownMenu
                    menu={user?.name}
                    subMenu={userSubMenu}
                    userMenu={true}
                  />
                </>
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
