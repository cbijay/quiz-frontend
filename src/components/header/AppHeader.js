import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  withStyles,
} from "@material-ui/core";
import clsx from "clsx";
import {
  Menu as MenuIcon,
  Public as PublicIcon,
  ExitToApp as ExitToAppIcon,
} from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../store/actions/authAction";

const styles = () => ({
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
});

function AppHeader({ open, handleDrawerOpen, handleDrawerClose, classes }) {
  const { user } = useSelector((state) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    history.push("/login");
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="close drawer"
            onClick={handleDrawerClose}
            className={clsx(
              classes.menuButton,
              !open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Nepalese
          </Typography>
          <Typography component="h6" variant="body1" color="inherit">
            Welcome {user ? user.name : ""}
          </Typography>
          <Button color="inherit" component={Link} to="/">
            <PublicIcon className={classes.buttonIcon} />
            Visit Site
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            <ExitToAppIcon />
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default withStyles(styles)(AppHeader);
