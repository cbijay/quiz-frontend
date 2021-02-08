import React from "react";
import {
  Drawer,
  Divider,
  List,
  IconButton,
  Typography,
  withStyles,
} from "@material-ui/core";
import clsx from "clsx";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { AppSidebarItems } from "./AppSidebarItems";
import theme from "../../styles/theme";

const drawerWidth = 232;

const styles = () => ({
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(6),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(6),
    },
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    maxHeight: 50 + "px !important",
  },
});

function AppSidebar({ open, setOpen, classes }) {
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <Typography
          component="h3"
          variant="h6"
          color="inherit"
          noWrap
          align="center"
          className={classes.title}
        >
          Nepalese
        </Typography>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{AppSidebarItems}</List>
    </Drawer>
  );
}

export default withStyles(styles)(AppSidebar);
