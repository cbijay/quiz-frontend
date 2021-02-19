import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FB8503",
      dark: "#d84315",
      contrastText: "#fff",
    },
    default: {
      main: "#fff",
      dark: "#eee",
      contrastText: "#333",
    },
  },
});

theme.overrides = {
  MuiListItemIcon: {
    root: {
      minWidth: 36,
    },
  },
  MuiFormControl: {
    marginNormal: {
      marginTop: 0,
      marginBottom: theme.spacing(3),
    },
  },
  MuiButton: {
    root: {
      textTransform: "capitalize",
    },
    containedPrimary: {
      backgroundColor: theme.palette.primary.main,
      margin: theme.spacing(0, 0, 1.5),
    },
  },
  MuiAppBar: {
    root: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  },
  MuiSelect: {
    select: {
      transition: "none !important",
    },
  },
};

export default theme;
