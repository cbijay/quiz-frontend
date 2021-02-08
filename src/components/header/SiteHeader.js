import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  withStyles,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../store/actions/authAction";

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
  },
  buttonIcon: {
    marginRight: 5,
  },
  primary: {
    margin: 0,
  },
});

function SiteHeader({ open, handleDrawerOpen, handleDrawerClose, classes }) {
  const { user } = useSelector((state) => state.auth);
  const { user: { role } = {} } = useSelector((state) => state.auth);
  const admin = role === "A" ? true : false;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    history.push("/login");
  };

  return (
    <>
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Nepalese
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            About Us
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            How it works
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Contact Us
          </Button>
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
        </Toolbar>
      </AppBar>
    </>
  );
}

export default withStyles(styles)(SiteHeader);
