import {
  Button,
  Divider,
  Grid,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../store/actions/authAction";
import DropDownMenu from "../menus/DropDownMenu";
import clsx from "clsx";

const styles = makeStyles((theme) => ({
  navBtn: {
    fontSize: 18,
    fontWeight: 700,
    color: theme.palette.default.main,
  },
  dashboardBtn: {
    background: theme.palette.secondary.main,
    color: "#fff",
    "&:hover": {
      background: theme.palette.secondary.dark,
    },
  },
  register: {
    color: "#fff",
  },
}));

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

const NavButtons = () => {
  //returns true if screen-width is greater than 600px
  const small = useMediaQuery("(max-width:1024px)");

  const classes = styles();
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

  const userSubMenu = [{ name: "Log out", handleClick: handleLogout }];
  return (
    <>
      <Grid
        item
        container
        xs={12}
        sm={12}
        md
        justify="center"
        direction={small ? "column" : "row"}
        style={{ marginTop: small && 50 }}
      >
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
      {small && <Divider style={{ marginBottom: small && 50 }} />}

      <Grid item>
        {admin && (
          <Button
            variant="contained"
            className={classes.dashboardBtn}
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
          <Grid
            container
            alignItems="center"
            direction={small ? "column" : "row"}
          >
            <Grid>
              <Button
                variant="contained"
                color="default"
                component={Link}
                className={classes.primary}
                to="/login"
              >
                Login
              </Button>
            </Grid>
            <Grid>
              <Button
                className={clsx(classes.primary, classes.register)}
                component={Link}
                to="/register"
              >
                Register
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default NavButtons;
